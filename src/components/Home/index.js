import {Component} from 'react'
import Header from '../Header'
import Footer from '../Footer'

import './index.css'

class Home extends Component {
  state = {booksList: []}

  componentDidMount() {
    this.getBooks()
  }

  getBooks = async () => {
    const url = 'https://apis.ccbp.in/book-hub/top-rated-books'
  }

  render() {
    return (
      <div>
        <Header active="Home" />
        <div className="home-container">
          <div>
            <h1>Find Your Next Favorite Books?</h1>
            <p>
              You are in the right place. Tell us what titles or genres you have
              enjoyed in the past, and we will give you surprisingly insightful
              recommendations.
            </p>
            <div className="slider-container">
              <div className="slider-head">
                <p>Top Rated Books</p>
                <button type="button">Find Books</button>
              </div>
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
