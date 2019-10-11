import React from 'react';

class Debts extends React.Component {
  render () {
    return(
        <div>
        <nav>
        <button onClick={this.props.queueMethod} value="AA"> Заказать </button>
        <button onClick={this.props.queueMethod} value="AB"> Получить </button>
        <button onClick={this.props.queueMethod} value="AC"> Вопросы </button>
        </nav>
        <nav>
        <button onClick={this.props.queueMethod} value="AD"> Справка об обучении </button>
        <button onClick={this.props.queueMethod} value=""> Назад </button>
        </nav>
        </div>
    );
  }
}

export default Debts;
