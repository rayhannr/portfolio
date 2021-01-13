const Template = props => (
    <a href={props.link} target="_blank" className={`svg opacity-70 hover:opacity-100 transform scale-75 origin-top-left ${props.className || ''}`}>
        {props.children}
    </a>
)

export default Template