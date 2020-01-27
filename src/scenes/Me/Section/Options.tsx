import { Dropdown, Menu } from 'antd'
import OptionIcon from '../../../../public/pictograms/options.svg'
import DeleteIcon from '../../../../public/pictograms/delete.svg'
import classNames from 'classnames'
import { useDeleteSection } from './hooks'

interface IOptionsProps {
    className?: string
    sectionId: string
    collectionCount: number
}

const Options: React.FunctionComponent<IOptionsProps> = ({
    className,
    sectionId,
    collectionCount,
}) => {
    const { handleDeleteSection } = useDeleteSection(sectionId, collectionCount)

    const menu = (
        <Menu className="bg-gray-700 font-semibold">
            <Menu.Item
                key="0"
                data-cy="delete-space"
                onClick={handleDeleteSection}
                className="hover:bg-brand-600 text-white font-medium flex items-center"
            >
                <DeleteIcon className="inline fill-current mr-2" />
                Delete Space
            </Menu.Item>
        </Menu>
    )

    return (
        <Dropdown overlay={menu} placement="bottomCenter" trigger={['click']}>
            <div
                data-cy="option-space"
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
