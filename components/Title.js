import RectTitle from './RectTitle'

const Title = props => (
    <div className="flex flex-col md:flex-row md:items-center">
        <h1 className="text-content font-bold text-3xl md:text-4xl text-left">{props.children}</h1>
        <RectTitle />
    </div>
)

export default Title