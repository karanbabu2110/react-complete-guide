import './Card.css';

function Card(props) {
    const classes ="card " + props.className;
    return <div className={classes}>{props.children}</div>
    //childern is an reserved name and the value will always 
    //be your close and open tag of your component
}

export default Card;