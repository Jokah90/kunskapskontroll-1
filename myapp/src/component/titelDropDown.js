
import Style from './styles/titelDropDown.module.css'


function Titel(props) {

    const titleNames = (e) => {props.titleName(e.target.value)}

    return (
        <div>
            <section className={Style.titel}>
                <article>
                    <p className={Style.titelName}>Title</p>
                    <select onClick={titleNames}>
                    <option>Title</option>

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