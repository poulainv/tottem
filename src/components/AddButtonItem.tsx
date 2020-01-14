import { Dropdown, Menu } from 'antd'
import { Dispatch } from 'react'
import PlusIcon from '../../public/pictograms/plus.svg'
import LinkIcon from '../../public/pictograms/link.svg'
import BookIcon from '../components/PictogramItems/book.svg'
import MovieIcon from '../components/PictogramItems/movie.svg'

export type AddActions = 'url' | 'search-book' | 'search-movie'

interface IAddButtonProps {
    onSelect: Dispatch<AddActions>
}

const AddButton: React.FunctionComponent<IAddButtonProps> = ({ onSelect }) => {
    const menu = (
        <Menu className="bg-gray-700 font-semibold">
            <Menu.Item
                key="0"
                className="hover:bg-brand-600 text-white font-medium flex items-center"
                onClick={() => onSelect('url')}
            >
                <LinkIcon className="inline fill-current mr-2" />
                Add from link
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item
                key="1"
                className="hover:bg-brand-600 text-white font-medium flex items-center"
                onClick={() => onSelect('search-movie')}
            >
                <MovieIcon className="inline fill-current mr-2" />
                Search movie
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item
                key="2"
                className="hover:bg-brand-600 text-white font-medium flex items-center"
                onClick={() => onSelect('search-book')}
            >
                <BookIcon className="inline fill-current mr-2" />
                Search book
            </Menu.Item>
        </Menu>
    )

    return (
        <Dropdown overlay={menu} placement="bottomCenter">
            <div className="h-8 w-8 text-gray-600 rounded-full border border-gray-600 hover:border-gray-900 hover:text-gray-900 flex justify-center items-center cursor-pointer">
                <PlusIcon height={16} width={16} className="fill-current" />
            </div>
        </Dropdown>
    )
}

export default AddButton
