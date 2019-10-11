import React from 'react';

class Form extends React.Component {
  render () {
    return(
        <div>
        <nav>
        <button onClick={this.props.queueMethod} value="A"> Хвостовки </button>
        <button onClick={this.props.queueMethod} value="B"> Справка студента </button>
        <button onClick={this.props.queueMethod} value="C"> Стипендии </button>
        </nav>
        <nav>
        <button onClick={this.props.queueMethod} value="D"> Заочное отделение </button>
        <button onClick={this.props.queueMethod} value="E"> Документы </button>
        <button onClick={this.props.queueMethod} value="F"> Общежитие </button>
        </nav>
        <nav>
        <button onClick={this.props.queueMethod} value="G"> На консультации </button>
        </nav>
        </div>
    );
  }
}

export default Form;
