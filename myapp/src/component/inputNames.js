import Style from './styles/inputName.module.css';
import React from 'react';

function InputName(props) {

    function handleChange(e) {
        props.setInputname(e.target.value);
    }
    function handleChange2 (e) {
        props.setLast(e.target.value); 
    }

    return (
        <div className={Style.input}>
            <form>
                <input className={Style.inputOne}
                    type="text"
                    name="Username"
                    value={props.name}
                    onChange={handleChange}
                />
            </form>
            <form>
            <label htmlFor="username">username</label>
                <input className={Style.inputTwo}
                    type="text"
                    name="Lastname"
                    value={props.LastName}
                    onChange={handleChange2}
                />
            </form>
        </div>
    )
};

export default InputName;


