import classNames from 'classnames';


const BuildNumber = ({ buildNumber, buildStatus }) => {
    const componentClass = classNames({
        'BuildNumber': true,
        [`BuildNumber-${buildStatus}`]: true
    });

    return (
        <div className={componentClass}>
            {`#${buildNumber}`}
        </div>
    )
}


export default BuildNumber;