import * as React from 'react'
import range from 'lodash.range'
import { Facebook } from 'react-content-loader'

export interface ISkeletonProps {
    className?: string
    rowCount?: number
    width?: number
    height?: number
}

export default function Skeleton({
    className,
    rowCount = 6,
    height = 140,
    width = 600,
}: ISkeletonProps) {
    return (
        <div className={className}>
            {range(rowCount).map((i: number) => {
                return <Facebook key={i} width={width} height={height} />
            })}
        </div>
    )
}
