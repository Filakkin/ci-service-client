const Text = ({ text, className }) => {
    return !!text && (
        <div className={className}>
            {text}
        </div>
    )
}


export default Text;