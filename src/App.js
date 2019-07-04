import React, { PureComponent } from 'react'
import './App.css'

class App extends PureComponent {
  state = {
      city: '',
      restaurants: [],
      list: [],
  }

  displayRestaurants = (restaurants) => {
    let list = []
    restaurants.map((restaurant, index) => {
      list[index] = {
        name: restaurant.name,
        address: restaurant.address,
        price: restaurant.price,
      }
      return list
    })
    this.setState({ list: list})
  }

  fetchData = (city) => {
    fetch(`http://opentable.herokuapp.com/api/restaurants?city=${city}`)
      .then(result => result.json())
      .then((data) => {
        this.setState({
          restaurants: data.restaurants,
        })
        this.displayRestaurants(data.restaurants)
      })
      .catch(console.log)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchData(this.state.city)
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
        {
          this.state.list.length !== 0 &&
            <ul className="app-result">
              {
                this.state.list.map((item, index) =>
                  <li key={index}>
                    <div className="name">
                      { item.name } <br />
                    </div>
                    { item.address } <br />
                    price: { item.price } <br />
                    <br />
                  </li>)
              }
            </ul>
        }
      </div>
    );
  }
}

export default App
