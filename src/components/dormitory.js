import React from 'react';

class Dorm extends React.Component {
  render () {
    return(
        <div>
        <nav>
        <button onClick={this.props.queueMethod} value="FA"> Получить ордер, договор </button>
        <button onClick={this.props.queueMethod} value="FB"> Вопросы </button>
        <button onClick={this.props.queueMethod} value=""> Назад </button>
        </nav>
        </div>
    );
  }
}

export default Dorm;
