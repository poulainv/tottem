import range from 'lodash.range'
import throttle from 'lodash.throttle'
import * as React from 'react'
import { BulletList } from 'react-content-loader'
import ReactGA from 'react-ga'
import styled from 'styled-components'
import { Collection, useGetSectionQuery } from '../../generated/types'

interface IAppTableOfContentsProps {
    sectionId: string
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
    padding: 4px 16px 4px 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-left: 1px
        ${(props: ITableIndexProps) => (props.active ? brand900 : grey300)}
        solid;
    :hover {
        color: ${brand900};
        padding-left: 18px;
    }
`

const MenuHeader = styled.p`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    margin: 0px;
`

const StickyBox = styled.nav`
    top: 80px;
    margin: 120px 0px 0px 0px;
    width: 240px;
    flex-shrink: 0;
    position: sticky;
    height: calc(100vh - 70px);
    overflow-y: auto;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`
const TableDate = styled.p`
    font-size: 14px;
    line-height: 180%;
    margin: 4px 0px 4px 0px;
    padding: 0px;
`

const trackTableOfContent = () => {
    ReactGA.initialize('UA-149517534-1')
    ReactGA.event({
        category: 'Table of Content',
        action: 'Click on content menu item',
    })
}

const AppTableOfContents: React.FunctionComponent<IAppTableOfContentsProps> = props => {
    const { loading, data } = useGetSectionQuery({
        variables: {
            sectionId: props.sectionId,
        },
    })
    let collections: Array<Pick<
        Collection,
        'id' | 'slug' | 'name' | 'createdAt' | 'detail'
    >> = []

    if (
        loading ||
        data === undefined ||
        data?.section?.collections === undefined
    ) {
        collections = []
    } else {
        collections = data?.section?.collections.filter(
            x => x.items.length // TODO filter in query
        )
    }

    const sortedCollections = collections.sort(
        (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    const [activeIndex, setActiveIndex] = React.useState(0)
    const findActiveIndex = React.useCallback(() => {
        let active = 0
        // Old fashon loop cause we want break feature + index!
        for (let i = sortedCollections.length - 1; i >= 0; i -= 1) {
            // No hash if we're near the top of the page
            if (document.documentElement.scrollTop < 200) {
                break
            }
            const collection = sortedCollections[i]
            const node = document.getElementById(collection.slug)
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
    }, [props.sectionId])

    useThrottledOnScroll(collections.length > 0 ? findActiveIndex : null, 200)
    let lastDate: string

    return (
        <StickyBox>
            <MenuHeader>Contenu</MenuHeader>
            <ul style={{ padding: '0px', marginTop: '8px' }}>
                {loading
                    ? range(4).map(x => <BulletList key={x} height={40} />)
                    : collections.map((collection, index) => {
                          const newDate = new Date(
                              collection.createdAt
                          ).toLocaleDateString('fr-FR', { year: 'numeric' })
                          const hasDateChanged = newDate !== lastDate
                          lastDate = newDate
                          return (
                              <React.Fragment key={collection.slug}>
                                  {hasDateChanged && (
                                      <TableDate>{newDate}</TableDate>
                                  )}
                                  <TableIndex
                                      key={collection.slug}
                                      active={activeIndex === index}
                                  >
                                      <a
                                          href={`#${collection.slug}`}
                                          style={{ color: 'inherit' }}
                                          onClick={() => trackTableOfContent()}
                                      >
                                          {!collection.name
                                              ? 'New Collection'
                                              : collection.name}
                                      </a>
                                  </TableIndex>
                              </React.Fragment>
                          )
                      })}
            </ul>
        </StickyBox>
    )
}

export default AppTableOfContents
