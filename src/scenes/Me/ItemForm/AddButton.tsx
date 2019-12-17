import plusIcon from '@iconify/icons-ic/baseline-plus'
import { InlineIcon } from '@iconify/react'
import { Dropdown, Menu } from 'antd'
import { Dispatch } from 'react'

export type AddActions = 'url' | 'search-book' | 'search-movie'

interface IAddButtonProps {
    onSelect: Dispatch<AddActions>
}

const AddButton: React.FunctionComponent<IAddButtonProps> = ({ onSelect }) => {
    const Plus = require(`../../../../public/pictograms/plus.svg`)

    const menu = (
        <Menu className="bg-brand-800">
            <Menu.Item
                key="0"
                className="hover:bg-brand-600 text-white"
                onClick={() => onSelect('url')}
            >
                Add from link
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item
                key="1"
                className="hover:bg-brand-600 text-white"
                onClick={() => onSelect('search-movie')}
            >
                Search movie
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item
                key="2"
                className="hover:bg-brand-600 text-white"
                onClick={() => onSelect('search-book')}
            >
                Search book
            </Menu.Item>
        </Menu>
    )

    return (
        <Dropdown overlay={menu} placement="bottomCenter">
            <div className="h-8 w-8 rounded-full text-red-700 border border-brand-700 hover:bg-brand-50 flex justify-center items-center">
                <Plus className="fill-current" />
            </div>
        </Dropdown>
    )
}

export default AddButton
