import React from 'react';


class Queue extends React.Component {


  render () {
    return(
      <div>
    {  this.props.category &&
      <div>
      <p>Вы обратились по поводу: {this.props.category}</p>
      <p>Ваш номер очереди: {this.props.number}</p>
      </div> }
      </div>
    );
  }
}

export default Queue;
