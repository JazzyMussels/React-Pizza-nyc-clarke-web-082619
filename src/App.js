import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizza: [],
    formData: {id: null, topping: null, size: null, vegetarian: null}
  }

  fetchPizzas = () => {
    fetch("http://localhost:3000/pizzas")
    .then(res => res.json())
    .then(data => this.setState({pizza: data}))
  }

  componentDidMount(){
    this.fetchPizzas()
  }

  handleChange = (form) => {
    this.setState({
      formData: form
    })
  }

  handleSubmit = () => {
    fetch(`http://localhost:3000/pizzas/${this.state.formData.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(this.state.formData)
    })
    .then(res => res.json())
    .then(data => this.fetchPizzas())
  }

  handleClick = (form) => {
    this.setState({
      formData: form
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} {...this.state.formData}/>
        <PizzaList pizza={this.state.pizza} handleClick={this.handleClick}/>
      </Fragment>
    );
  }
}

export default App;
