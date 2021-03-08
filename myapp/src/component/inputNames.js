import React from 'react';
import Style from './styles/inputName.module.css';

function InputName(props) {
    return (
        <div>
            <form>
                <label>
                    Name: 
                <input className={Style.input} type="text" name="name" />
                </label>
                <label>
                    Name: 
                <input className={Style.inputTwo} type="text" name="name" />
                </label>
            </form>
        </div>
    )
};

export default InputName;