import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Results from './components/results/results'
import Header from './components/header/header'
import AppForm from './components/form/form'
import './App.css'

class App extends PureComponent {
  render () {
    return (
      <div className="app-container">
        <Header />
        <AppForm />
        {
          this.props.displayList.length !== 0 &&
            <Results list={this.props.displayList} />
        }
      </div>
    )
  }
}

const mapStateToProps = ({ restaurants }) => ({
  displayList: restaurants.displayList,
})

export default connect(mapStateToProps, undefined)(App)
