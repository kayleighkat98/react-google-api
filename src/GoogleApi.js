import React, { Component } from 'react'
//import './';
//import  from './';

class GoogleApi extends Component {

   state = {
        loading: false,
        books: [],
        id:[]//added state to referece book
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
    render() {
        // {console.log(this.state.books);
        if (this.state.loading){
            return <div>Loading...</div>;
        }
    const books =this.state.books.map(book=> <li key={book.id}>{book.volumeInfo.title}' '{book.volumeInfo.authors}</li>);
        return(
            <div className='container'>

                <ul>{books}</ul>

            </div>
        );
    }
}

export default GoogleApi;