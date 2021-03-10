
import Style from './styles/titelDropDown.module.css'


function Titel(props) {

    const titleNames = (e) => {props.titleName(e.target.value)}

    return (
        <div>
            <section className={Style.titel}>
                <article>
                    <p className={Style.titelName}>Titel</p>
                    <select onClick={titleNames}>
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