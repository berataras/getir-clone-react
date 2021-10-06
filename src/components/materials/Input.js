import React from 'react';

const Input = (props) => {
    const {text} = props;
    return (
        <label className="flex-1 relative">
            <input className="h-14 px-4 focus:pt-2 border-2 border-gray-200 hover:border-primary-color focus:border-primary-color outline-none transition-all rounded w-full text-sm peer" type="text" />
            <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 peer-focus:h-7 transition-all peer-focus:text-xs peer-focus:text-primary-color cursor-text">{text}</span>
        </label>
    );
};

export default Input;
