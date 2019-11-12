import { brand700, grey300, grey600, brand900 } from '../../constants/colors'
import styled from 'styled-components'

interface IMenuItemProps {
    active?: boolean
}

export const Menu = styled.ul`
    overflow-x: auto;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0px;
    border-bottom: 1px ${grey300} solid;
    margin: 0px;
    list-style: none;

    ::-webkit-scrollbar {
        display: none;
    }
`

export const MenuItem = styled.li`
    text-decoration: none;
    line-height: 160%;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.3s;
    font-weight: 500;
    font-size: 14px;
    color: ${(props: IMenuItemProps) => (props.active ? brand700 : grey600)};
    padding: 8px 16px 8px 16px;
    margin-left: 0px;
    border-bottom: 2px
        ${(props: IMenuItemProps) => (props.active ? brand900 : 'transparent')}
        solid;
    :hover {
        border-bottom: 2px ${brand900} solid;
        color: ${brand700};
    }
`
