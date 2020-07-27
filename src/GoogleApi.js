import React, { Component } from 'react'
//import './';
//import  from './';

class GoogleApi extends Component {

   state = {
        loading: false,
        books: [],
        id:[],//added state to referece book
        search: {},
    };
    
    componentDidMount(){
        this.setState({loading:true});
        fetch('https://www.googleapis.com/books/v1/volumes?q=LostHero/')
        .then(res => res.json())
        .then(books => this.setState({
            books: books.items,
            // books: [books.items.title],
            // books,
            loading:false
        }))
        // console.log(books)
    
    }

    searchChanged(search) {
        this.setState({
            search
        }); 
    }

    render() {
        // console.log(this.state.search)
        // {console.log(this.state.books);
        if (this.state.loading){
            return <div>Loading...</div>;
        }
    const books =this.state.books.map(book => <li key={book.id}>{book.volumeInfo.title}' '{book.volumeInfo.authors}</li>);
        return(
            <form className="container__form">
            <div className='container'>
            <label htmlFor="search">Search:</label>
          <input type="text" name="search" id="search" 
          placeholder="Title/Author" 
        //   value = {this.state.search} 
          onChange = {e => this.searchChanged(e.target.value)}/>

                <ul>{books}</ul>

            </div>
            </form>
        );
    }
}

export default GoogleApi;