import React from 'react'
import Header from './header'
import Main from './main'
import {Footer} from './footer'
import {useState} from 'react'
import ReactDOM from 'react-dom'

// function App() {
//   const loading = true
//   handleLoading() {
//     loading = !loading
//   }

//   componentDidMount() {
//     handleLoading()
//   }

//   return (
//     <React.Fragment>
//       <Header />
//       <Main />
//       <Footer />
//     </React.Fragment>
//   )
// }

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
    }
    this.handleLoading = this.handleLoading.bind(this)
  }

  handleLoading() {
    let isLoading = !this.state.isLoading;
    this.setState( { isLoading: isLoading })
  }

  componentDidMount() {
    setTimeout(this.handleLoading, 2000)
  }

  render() {
    return (
      <React.Fragment>
      { this.state.isLoading ? <h1 style = { {color: 'green'} }>Loading...Please Wait</h1> :
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
      }
      </React.Fragment>
    )
  }
}


export default App;