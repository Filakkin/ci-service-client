import './Button.scss';
import 'classnames';
import classNames from 'classnames';
import Icons from './Icons/Icons.js';

const Button = ({ text, icon, size, isPrimary, disabled }) => {
    const buttonClass = classNames({
        'Button': true,
        [`Button-${size}`]: true,
        'Button-primary': isPrimary
    });
    var Icon = Icons[icon];

    return <button className={buttonClass} disabled={disabled}>
        {Icon && <Icon />}
        {!!text && <div className='Button_text'>
            {text}
        </div>
        }
    </button>
}

export default Button;