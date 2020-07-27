import React, { Component } from 'react'
import './Search.css';


class Search extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
            
    //     };
    // }

    render() {
        return(
            <div className='container'>
                <form className="container__form">
                    <label htmlFor="search">Search:</label>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Title/Author"
                        //   value = {this.state.search}
                        onChange={(e) => this.searchChanged(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default Search