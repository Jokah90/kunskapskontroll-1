import Style from './styles/radioButton.module.css';
import React, { Component } from "react";

//class component
class RadioButton extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    console.log(event.target.value);
  }

  render() {
    return (
        <section className={Style.radioContainer}>
          <article onChange={this.onChangeValue} className={Style.radioButtons}>
            <input  type="radio" value="Male" name="gender" />
            <input type="radio" value="Female" name="gender" />
          </article>
        </section>
    );
  }
}

export default RadioButton;