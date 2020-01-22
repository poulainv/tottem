import slugify from 'slugify'
import https from 'https'
import { InferredItem } from '../parsers'
import { Item } from '@prisma/photon'

const options = {
    hostname: '5ab54ul325.execute-api.eu-west-1.amazonaws.com',
    port: 443,
    method: 'POST',
    path: '/default/url-to-s3',
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.API_GATEWAY_TOKEN,
    },
}

interface AWSImageBody {
    message: string
    url: string
}

// export function withOwnImage(item: Item): Promise<NewItem> {
//     return new Promise((resolve, reject) => {
//         const s3Key = `${slugify(item.title)}-${Buffer.from(
//             item.imageUrl
//         ).toString('base64')}`

//         const data = JSON.stringify({
//             imageUrl: item.imageUrl,
//             s3Key,
//         })

//         let response: string = ''

//         const req = https.request(options, res => {
//             console.log(`statusCode: ${res.statusCode}`)
//             res.on('data', d => {
//                 response += d
//                 return response
//             })
//             res.on('end', () => {
//                 let body: AWSImageBody | null = null
//                 try {
//                     body = JSON.parse(response)
//                 } catch (e) {
//                     reject(e)
//                 }
//                 if (!body) {
//                     reject()
//                 } else {
//                     const newItem = {
//                         ...item,
//                         imageUrl: body.url,
//                     }
//                     resolve(newItem)
//                 }
//             })
//         })

//         req.on('error', error => {
//             console.error(error)
//         })

//         req.write(data)
//         req.end()
//     })
// }
