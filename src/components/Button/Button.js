import classNames from 'classnames';

import './Button.scss';
import Icons from './Icons/Icons.js';

const Button = ({ text, icon, size, isPrimary, disabled, onClick, type }) => {
    const buttonClass = classNames({
        'Button': true,
        [`Button-${size}`]: true,
        'Button-primary': isPrimary
    });
    var Icon = Icons[icon];

    return <button className={buttonClass} disabled={disabled} onClick={onClick} type={type || 'button'}>
        {Icon && <Icon />}
        {!!text && <div className='Button_text'>
            {text}
        </div>
        }
    </button>
}

export default Button;