import React from 'react';

class Student extends React.Component {
  render () {
    return(
        <div>
        <nav>
        <button onClick={this.props.queueMethod} value="BA"> Заказать </button>
        <button onClick={this.props.queueMethod} value="BB"> Получить </button>
        <button onClick={this.props.queueMethod} value="BC"> Вопросы </button>
        </nav>
        <nav>
        <button onClick={this.props.queueMethod} value=""> Назад </button>
        </nav>
        </div>
    );
  }
}

export default Student;
