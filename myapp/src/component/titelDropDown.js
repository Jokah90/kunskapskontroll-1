import React from 'react';
import Style from './styles/titelDropDown.module.css'


function Titel(props) {
    return (
        <div>
            <section className={Style.titel}>
                <article>
                    <p className={Style.titelName}>Titel</p>
                    <select className={Style.myTitel}>
                        <option>Mr.</option>
                        <option>Mrs.</option>
                        <option>Ms.</option>
                        <option>Bandicoot.</option>
                        <option>MasterChief.</option>
                    </select>
                    
                </article>
            </section>
        </div>
    )
};

export default Titel;