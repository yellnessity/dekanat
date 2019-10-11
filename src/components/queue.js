import React from 'react';


class Queue extends React.Component {


  render () {
    return(
      <div>
    {  this.props.request &&
      <div>
      <p>{this.props.request}</p>
      <p>Ваш номер очереди: {this.props.number}</p>
      <button onClick={this.props.queueMethod} value=""> Назад </button>
      </div>
     }
      </div>
    );
  }
}

export default Queue;
