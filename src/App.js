import React from 'react';
import Form from "./components/form.js";
import Queue from "./components/queue.js";
import './App.css';

var i=0;

class App extends React.Component {

  state = {
    category: undefined,
    number: undefined,
    error: undefined
  }



  generateQueue = async (e) => {
    e.preventDefault();
    const category = e.target.elements.category.value;
    const categoriesName = {
      1: "Категория 1",
      2: "Категория 2",
      3: "Категория 3",
      4: "Категория 4",
    }
    console.log(category);
    console.log(categoriesName[category]);


    var number = "0"+category+i;
    i=i+1;

    this.setState({
      category: categoriesName[category],
      number: number,
      error: ""
    });

  }

  render () {
    return(
      <div>
      <h1> Электронный деканат </h1>
        <Form queueMethod={this.generateQueue}/>
        <Queue category={this.state.category} number={this.state.number} error={this.state.error}/>
      </div>
    );
  }
}

export default App;
