import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addRestaurants, clearList } from './state/actions'
import './App.css'

class App extends PureComponent {
  state = {
      city: '',
      restaurants: [],
      list: [],
      filter: '',
  }

  clearList = () => {
    this.props.clearList()
  }

  saveToStore = (list) => {
    this.clearList()
    list.map(restaurant => {
      this.props.addRestaurants({
        name: restaurant.name,
        address: restaurant.address,
        area: restaurant.area,
      })
      return undefined
    })
  }

  refineSearch = (list, filteredItem) => {
    const refinedResult = this.props.storedList.filter( list => list.address.toLowerCase().includes(filteredItem) || list.name.toLowerCase().includes(filteredItem) || list.area.toLowerCase().includes(filteredItem) )
    this.setState({ list: refinedResult })
  }

  citySearch = (restaurants) => {
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

  displayRestaurants = (restaurants) => {
    if (!this.state.filter) {
      this.citySearch(restaurants)
    } else {
      this.refineSearch(restaurants, this.state.filter)
    }
  }

  fetchData = (city) => {
    fetch(`http://opentable.herokuapp.com/api/restaurants?city=${city}`)
      .then(result => result.json())
      .then((data) => {
        this.setState({
          restaurants: data.restaurants,
        })
        this.saveToStore(data.restaurants)
        this.displayRestaurants(data.restaurants)
      })
      .catch(console.log)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.fetchData(this.state.city)
  }

  handleChange = (event) => {
    this.setState({ city: event.target.value })
  }

  handleFilter = (event) => {
    this.setState({ filter: event.target.value.toLowerCase() })
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
            <input
              placeholder="Optional refine"
              type="text"
              name="name"
              value={this.state.filter}
              onChange={this.handleFilter}
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

const mapStateToProps = ({ restaurants }) => ({
  storedList: restaurants.list,
})

const mapDispatchToProps = { addRestaurants, clearList }

export default connect(mapStateToProps, mapDispatchToProps)(App)
