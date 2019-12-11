import { BulletList } from 'react-content-loader'
export default () => {
    return (
        <div className="leading-none font-medium w-64 p-4 bg-gray-200 text-gray-900 flex flex-col">
            <BulletList className="mt-20" />
            <BulletList className="mt-20" />
            <BulletList className="mt-20" />
        </div>
    )
}
