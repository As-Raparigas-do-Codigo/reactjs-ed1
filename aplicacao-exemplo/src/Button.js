function Button(props) {
    return (
        <button onClick={props.onClickHandler}>{ props.title }</button>
    );
}

export default Button;