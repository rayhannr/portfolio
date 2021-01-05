import RectTitle from './RectTitle'

const Title = props => (
    <div className="flex flex-col lg:flex-row items-center">
        <h1 className="text-gray-900 font-bold text-3xl md:text-4xl text-center lg:text-left">{props.children}</h1>
        <RectTitle />
    </div>
)

export default Title