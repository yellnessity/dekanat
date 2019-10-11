import React from 'react';
import Form from "./components/form.js";
import Debts from "./components/debts.js";
import Student from "./components/student.js";
import Scholar from "./components/scholar.js";
import Papers from "./components/papers.js";
import Dorm from "./components/dormitory.js";
import Queue from "./components/queue.js";
import Header from "./components/header.js";
import './App.css';

var i=0;

class App extends React.Component {

  state = {
    page: undefined,
    request: undefined,
    number: undefined,
    error: undefined
  }

  getBack = async (e) => {
    e.preventDefault();
    console.log(1);
    this.setState({
      page: undefined,
      request: undefined,
      number: "",
      error: ""
    });

  }

  generateQueue = async (e) => {
    e.preventDefault();
    const page = e.target.value;
    const request = {
      AA: "Хвостовки - Заказать",
      AB: "Хвостовки - Получить",
      AC: "Хвостовки - Вопросы",
      AD: "Справка об обучении",
      BA: "Справка студента - Заказать",
      BB: "Справка студента - Получить",
      BC: "Справка студента - Вопросы",
      CA: "Социальные стипендии",
      CB: "Именные стипендии",
      CC: "Обычная стипендия",
      D: "Заочное отделение",
      EA: "Зачётка",
      EB: "Студенческий билет",
      EC: "Журналы",
      ED: "Обходной лист",
      FA: "Получить ордер, договор",
      FB: "Общежитие - вопросы",
      G: "На консультации"
    }

    console.log(page);
    console.log(this.state.request);

    this.setState({
      page: page,
      request: undefined,
      error: ""
    });

    if (request[page]) {
    var number = page+" - "+i;
    i=i+1;
    this.setState({
      page: page,
      request: request[page],
      number: number,
      error: ""
    });
    }

  }

  render () {
    return(
      <div>
      <Header />

      <div className="intro">
        <div className="container1">
          <div className="intro__inner">
            <div className="intro__title">
                { !this.state.request &&
                  <a>Выберите функцию</a>
                }
            </div>

        { !this.state.page &&
          <Form queueMethod={this.generateQueue}/>
        }
        { (this.state.page=="A") &&
         <Debts queueMethod={this.generateQueue}/>
        }
        { (this.state.page=="B") &&
         <Student queueMethod={this.generateQueue}/>
        }
        { (this.state.page=="C") &&
         <Scholar queueMethod={this.generateQueue}/>
        }
        { (this.state.page=="E") &&
         <Papers queueMethod={this.generateQueue}/>
        }
        { (this.state.page=="F") &&
         <Dorm queueMethod={this.generateQueue}/>
        }
        <Queue queueMethod={this.generateQueue} request={this.state.request} number={this.state.number} error={this.state.error}/>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
