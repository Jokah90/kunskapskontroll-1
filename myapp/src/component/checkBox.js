import React, { useState } from 'react';
import Style from './styles/checkBox.module.css';

//REACT HOOKS useState functional component
const Checkbox = ()=>{
    const [isChecked,setIsChecked] = useState(false);
    
    return (
        <form className={Style.checkBox}>
            <input type="checkbox" checked={isChecked} onChange={(e)=>{setIsChecked(e.target.checked)}}/>
            <label>Godkänner villkoren</label>
        </form>
    )
}

export default Checkbox;