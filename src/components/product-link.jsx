import './ProductLink.css'

export function ProductLink(props) {
    return (
        <p>
            <a href={props.href}>
                <img src={props.image} alt={props.title} />
                {props.title}
            </a>
        </p>
    )
}
