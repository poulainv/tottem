'use strict'
const https = require('https')
const http = require('http')
const aws = require('aws-sdk')
const s3 = new aws.S3()
const path = require('path')

const defaultBucketName = 'tottem-media'
const acceptedFormat = ['.jpg', '.png', '.jpeg']

exports.handler = (event, context, callback) => {
    const body = event.body

    if (body === undefined) {
        callback(
            new Error(
                `body is required parameter. Usually provided by lambda proxy integration`
            )
        )
    }
    const params = JSON.parse(body)

    if (params.imageUrl === undefined) {
        callback(new Error(`imageUrl is a required parameter`))
    }

    if (params.s3Key === undefined) {
        callback(new Error(`s3Key is a required parameter`))
    }

    const imageUrl = params.imageUrl.toLowerCase()
    const bucketName = params.bucketName || defaultBucketName
    const extension = path.extname(imageUrl)
    const fetcher = imageUrl.split('://')[0] === 'http' ? http : https

    if (!acceptedFormat.includes(extension)) {
        callback(
            new Error(
                `Extension '${extension}'' is not valid should be one of ${acceptedFormat}`
            )
        )
    }

    fetcher.get(imageUrl, function(res) {
        var imageData = ''

        res.setEncoding('binary')

        res.on('data', function(chunk) {
            imageData += chunk
        })

        res.on('end', function() {
            const key = `${params.s3Key}${extension}`

            const options = {
                Bucket: bucketName,
                Key: key,
                Body: new Buffer.from(imageData, 'binary'),
                ACL: 'public-read',
                Metadata: {
                    'raw-url': imageUrl,
                },
            }

            s3.putObject(options, function(err, data) {
                if (err) console.log(err, err.stack)
                else console.log(data)
                const s3Url = `https://${bucketName}.s3-eu-west-1.amazonaws.com/${key}`
                callback(null, {
                    headers: { 'Content-Type': 'application/json' },
                    statusCode: 200,
                    body: JSON.stringify({
                        message: 'Finished S3 upload public ACL',
                        url: s3Url,
                    }),
                })
            })
        })
    })
}
