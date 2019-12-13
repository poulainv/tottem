import * as React from 'react'
import plusIcon from '@iconify/icons-ic/baseline-plus'
import { InlineIcon } from '@iconify/react'
import { Menu, Dropdown, Icon } from 'antd'

interface IAddButtonProps {}

const AddButton: React.FunctionComponent<IAddButtonProps> = props => {
    const menu = (
        <Menu className="bg-brand-800">
            <Menu.Item key="0" className="hover:bg-brand-600 text-white">
                Add from link
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="1" className="hover:bg-brand-600 text-white">
                Search movie
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="2" className="hover:bg-brand-600 text-white">
                Search book
            </Menu.Item>
        </Menu>
    )

    return (
        <Dropdown overlay={menu} placement="bottomCenter">
            <div className="h-8 w-8 rounded-full text-brand-700 border border-brand-700 hover:bg-brand-50 flex justify-center items-center">
                <InlineIcon height={24} width={24} icon={plusIcon} />
            </div>
        </Dropdown>
    )
}

export default AddButton
