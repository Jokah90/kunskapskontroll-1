


const Checkbox = (props) => {
    const Check = (e) => {props.checkBox(e.target.checked)}
    
    return (
        <form >
            <input type="checkbox"  onChange={Check}/>
            <label>Godkänner villkoren</label>
        </form>
    )
}

export default Checkbox;