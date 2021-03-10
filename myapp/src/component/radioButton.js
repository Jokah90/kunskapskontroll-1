const RadioBtn = (props) => {

  const chosenClass = (e) => { props.chooseClass(e.target.value) }


  return (
    <section>
      <article onChange={chosenClass}>
        <input type="radio" value="1: Klass" name="Klass" />
        <label>1: Klass</label>
        <input type="radio" value="2: Klass" name="Klass" />
        <label>2: Klass</label>
      </article>
    </section>
  );
}








export default RadioBtn;