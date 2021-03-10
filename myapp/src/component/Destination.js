import React from 'react';
import Style from './styles/Destination.module.css';

const Destination = () => {
    return (
        <div>
            <section className={Style.Destination}>
                <article>
                    <select className={Style.clickedCity}>
                        <option>STOCKHOLM</option>
                        <option>GÖTEBORG</option>
                        <option>MALMÖ</option>
                    </select>
                    <p className={Style.timeOne}>Tid: 10:35</p>
                </article>
                <article>
                    <select className={Style.clickedCityTwo}>
                        <option>GÖTEBORG</option>
                        <option>MALMÖ</option>
                        <option>STOCKHOLM</option>
                    </select>
                    <p className={Style.timeTwo}>Tid: 14:35</p>
                </article>
            </section>
        </div>
    )
};

export default Destination;