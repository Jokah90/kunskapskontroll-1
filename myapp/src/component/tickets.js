import React from 'react';
import Style from './styles/tickets.module.css'


function Tickets(props) {
    return (
        <div>
            <section className={Style.tickets}>
                <article>
                    <p className={Style.ticketNum}>Antal biljetter</p>
                    <select className={Style.myTickets}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>

                </article>
            </section>
        </div>
    )
};

export default Tickets;