
function Alert(props) {
    const {text} = props;
    return (
        <div className="alert alert-warning" role="alert">
            {text}
        </div>
    );
}

export default Alert;