import React from 'react';

class Scholar extends React.Component {
  render () {
    return(
      <div>
      <nav>
      <button onClick={this.props.queueMethod} value="CA"> Социальные стипендии </button>
      <button onClick={this.props.queueMethod} value="CB"> Именные стипендии </button>
      <button onClick={this.props.queueMethod} value="CC"> Обычная стипендия </button>
      </nav>
      <nav>
      <button onClick={this.props.queueMethod} value=""> Назад </button>
      </nav>
      </div>
    );
  }
}

export default Scholar;
