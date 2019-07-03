import React, { PureComponent } from 'react'
import './App.css'

class App extends PureComponent {
  state = {
      city: '',
  }

  getRestaurantsList = (city) => {
    console.log('The city is ', city)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.getRestaurantsList(this.state.city)
  }

  handleChange = (event) => {
    this.setState({ city: event.target.value })
  }
  render () {
    return (
      <div className="app-container">
        <h2> Welcome! </h2>
        <h4> Please enter a city to check for the avaiable restaurants.</h4>
        <form onSubmit={this.handleSubmit} className="app-form">
          <label>
            <input
              placeholder="City"
              type="text"
              name="name"
              value={this.state.city}
              onChange={this.handleChange}
              className="app-form__input"
            />
          </label>
          <input
            type="submit"
            value="Search"
            onSubmit={this.handleSubmit}
            className="app-form__submit-button"
          />
        </form>
        <div className="app-result">
          The city you entered is {this.state.city}
        </div>
      </div>
    );
  }
}

export default App
