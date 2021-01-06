const Template = props => (
    <a href={props.link} target="_blank" className={`svg transform scale-75 origin-top-left ${props.className || ''}`}>
        {props.children}
    </a>
)

export default Template