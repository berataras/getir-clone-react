import React from 'react';
import {BsFacebook} from 'react-icons/bs'

function Button(props) {
    const {styles, text, icon} = props;
    return (
        <button className={'flex items-center rounded-lg p-2 w-full h-[48px] text-sm transition-all ' + styles}>
            {icon === 'facebook' && <BsFacebook className="ml-2" size="23" />}
            <span className="mx-auto">
                {text}
            </span>
        </button>
    );
}

export default Button;