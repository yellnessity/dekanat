import React from 'react';

class Form extends React.Component {
  render () {
    return(
      <form onSubmit={this.props.queueMethod}>
        <p><select name="category" placeholder="Выберите категорию">
        <option value="1">Опция 1</option>
        <option value="2">Опция 2</option>
        <option value="3">Опция 3</option>
        <option value="4">Опция 4</option>
        </select></p>

        <p><button>Получить номер</button></p>
      </form>
    );
  }
}

export default Form;
