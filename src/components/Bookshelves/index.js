import {Component} from 'react'

import Header from '../Header'

import './index.css'

class Bookshelves extends Component {
  render() {
    return (
      <>
        <Header active="Shelf" />
        <div>
          <h1>Bookshelves</h1>
        </div>
      </>
    )
  }
}

export default Bookshelves
