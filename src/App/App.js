import React, { Component } from "react"
//import './';
import Header from "../Header/Header"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      books: [],
      id: [], //added state to referece book
      search: {},
      value: "",
    }
  }

  //    state = {
  //         loading: false,
  //         books: [],
  //         id:[],//added state to referece book
  //         search: {},
  //     };

  componentDidMount() {
    this.setState({ loading: true })
    fetch("https://www.googleapis.com/books/v1/volumes?q=LostHero/")
      .then((res) => res.json())
      .then((books) =>
        this.setState({
          books: books.items,
          // books: [books.items.title],
          // books,
          loading: false,
        })
      )
    // console.log(books)
  }

  searchChanged(event) {
    this.setState({
      value: event.target.value,
    })
  }

  render() {
    console.log(this.state.value)
    // {console.log(this.state.books);
    if (this.state.loading) {
      return <div>Loading...</div>
    }
    const books = this.state.books.map((book) => (
      <li key={book.id}>
        {book.volumeInfo.title}' '{book.volumeInfo.authors}
      </li>
    ))

    return (
      <div className="container">
        <Header searchChanged={this.searchChanged} value={this.state.value} />

        <ul>{books}</ul>
      </div>
    )
  }
}
export default App
