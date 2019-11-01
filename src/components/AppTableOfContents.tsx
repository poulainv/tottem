import { Anchor, Box } from 'grommet'
import * as React from 'react'
import removeMd from 'remove-markdown'
import styled from 'styled-components'
import { brand700, brand900, grey300, grey600 } from '../constants/colors'
import { ICollection } from '../types'

const throttle = require('lodash/throttle')

interface IAppTableOfContentsProps {
    collections: ICollection[]
}

const noop = () => {}

function useThrottledOnScroll(callback: any, delay: number) {
    const throttledCallback = React.useMemo(
        () => (callback ? throttle(callback, delay) : noop),
        [callback, delay]
    )

    React.useEffect(() => {
        if (throttledCallback === noop) {
            return undefined
        }

        window.addEventListener('scroll', throttledCallback)
        return () => {
            window.removeEventListener('scroll', throttledCallback)
            throttledCallback.cancel()
        }
    }, [throttledCallback])
}

interface ITableIndexProps {
    active?: boolean
}

const TableIndex = styled.li`
    color: ${(props: ITableIndexProps) => (props.active ? brand700 : grey600)};
    font-size: 14px;
    transition: all 0.3s;
    line-height: 160%;
    text-decoration: none;
    list-style: none;
    padding: 4px 16px 2px 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-left: 1px
        ${(props: ITableIndexProps) => (props.active ? brand900 : grey300)}
        solid;
`

const MenuHeader = styled.p`
    text-transform: uppercase;
    color: ${grey600};
    font-size: 12px;
    font-weight: 700;
    margin: 0px;
`

const StickyBox = styled(Box)`
    top: 80px;
    margin: 210px 0px 0px 0px;
    width: 240px;
    flex-shrink: 0;
    position: sticky;
    height: calc(100vh - 70px);
    overflow-y: auto;
`

const AppTableOfContents: React.FunctionComponent<
    IAppTableOfContentsProps
> = props => {
    const collections = props.collections.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    const [activeIndex, setActiveIndex] = React.useState(0)
    const findActiveIndex = React.useCallback(() => {
        let active = 0
        // Old fashon loop cause we want break feature + index!
        for (let i = collections.length - 1; i >= 0; i -= 1) {
            // No hash if we're near the top of the page
            if (document.documentElement.scrollTop < 200) {
                break
            }
            const collection = collections[i]
            const node = document.getElementById(collection.id)

            if (
                node &&
                node.offsetTop <
                    document.documentElement.scrollTop +
                        document.documentElement.clientHeight / 8
            ) {
                active = i
                break
            }
        }
        setActiveIndex(active)
    }, [activeIndex])

    useThrottledOnScroll(collections.length > 0 ? findActiveIndex : null, 200)

    return (
        <StickyBox>
            <MenuHeader>Contenu</MenuHeader>
            <ul style={{ padding: '0px', marginTop: '8px' }}>
                {collections.map((collection, index) => {
                    return (
                        <TableIndex
                            key={collection.id}
                            active={activeIndex === index}
                        >
                            <Anchor
                                href={`#${collection.id}`}
                                style={{ color: 'inherit' }}
                            >
                                {removeMd(collection.name)}
                            </Anchor>
                        </TableIndex>
                    )
                })}
            </ul>
        </StickyBox>
    )
}

export default AppTableOfContents
