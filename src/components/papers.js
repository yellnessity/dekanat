import React from 'react';

class Papers extends React.Component {
  render () {
    return(
        <div>
        <nav>
        <button onClick={this.props.queueMethod} value="EA"> Зачётка </button>
        <button onClick={this.props.queueMethod} value="EB"> Студ. билет </button>
        <button onClick={this.props.queueMethod} value="EC"> Журналы </button>
        </nav>
        <nav>
        <button onClick={this.props.queueMethod} value="ED"> Обходной лист </button>
        <button onClick={this.props.queueMethod} value=""> Назад </button>
        </nav>
        </div>
    );
  }
}

export default Papers;
