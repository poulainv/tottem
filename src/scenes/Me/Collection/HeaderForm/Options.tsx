import { Dropdown, Menu } from 'antd'
import OptionIcon from '../../../../../public/pictograms/options.svg'
import DeleteIcon from '../../../../../public/pictograms/delete.svg'
import classNames from 'classnames'
import { useDeleteCollection } from './hooks'

interface IOptionsProps {
    className?: string
    collectionId: string
}

const Options: React.FunctionComponent<IOptionsProps> = ({
    className,
    collectionId,
}) => {
    const { handleDelete } = useDeleteCollection()

    const menu = (
        <Menu className="bg-gray-700 font-semibold">
            <Menu.Item
                key="0"
                onClick={() => handleDelete(collectionId)}
                className="hover:bg-brand-600 text-white font-medium flex items-center"
            >
                <DeleteIcon className="inline fill-current mr-2" />
                Delete Collection
            </Menu.Item>
        </Menu>
    )

    return (
        <Dropdown overlay={menu} placement="bottomCenter" trigger={['click']}>
            <div
                className={classNames(
                    'cursor-pointer w-6 rounded h-8 flex justify-center items-center hover:bg-gray-100',
                    className
                )}
            >
                <OptionIcon className="text-gray-500" height={4} width={16} />
            </div>
        </Dropdown>
    )
}

export default Options
