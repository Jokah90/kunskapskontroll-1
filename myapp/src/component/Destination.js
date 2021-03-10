import React from ('react');
const Destination = (props) => {

    const Dest = (e) => { props.changeTrip(e.target.value) }
    const Arr = (e) => { props.changeArrivalTrip(e.target.value) }
    return (
        <div>
            <section>
                <select onChange={Dest}>
                    <option>GÖTEBORG</option>
                    <option>STOCKHOLM</option>
                    <option>ÖREBRO</option>
                    <option>MALMÖ</option>
                </select>
            </section>

            <section>
                <select onChange={Arr}>
                    <option>GÖTEBORG</option>
                    <option>STOCKHOLM</option>
                    <option>ÖREBRO</option>
                    <option>MALMÖ</option>
                </select>
            </section>
        </div>
    );


}

export default Destination;






// import React, { useState } from 'react';
// import Style from './styles/Destination.module.css';

// const Destination = () => {
//     const [Trip, setTrip] = useState('Avgång');
//     const [Arrive, setArrive] = useState('Ankomst');

//     return (
//         <section className={Style.Destination}>
//             <form>
//                 <label>Avgång</label>
//                 <select value={Trip} onChange={(e) => { setTrip(e.target.value) }}>
//                     <option value="Stockholm">STOCKHOLM</option>
//                     <option value="Göteborg">GÖTEBORG</option>
//                     <option value="Malmö">MALMÖ</option>
//                 </select>
//                 <p className={Style.timeOne}>Tid: 10:35</p>
//             </form>
//             <form>
//                 <label>Ankomst</label>
//                 <select value={Arrive} onChange={(e) => { setArrive(e.target.value) }}>
//                     <option value="Göteborg">GÖTEBORG</option>
//                     <option value="Malmö">MALMÖ</option>
//                     <option value="Stockholm">STOCKHOLM</option>
//                 </select>
//                 <p className={Style.timeTwo}>Tid: 14:35</p>
//             </form>
//         </section>

//     )
// };

// export default Destination;