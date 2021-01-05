const Button = props => (
    <button className={`flex flex-row items-center font-medium justify-center rounded-3xl ${props.color} ${props.className || ''}`}>
        <a className="py-2 px-16" href={props.link} target="_blank">{props.children}</a>
    </button>
)

export default Button