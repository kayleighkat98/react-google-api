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
                <form className="container__form"
                value = {this.props.value}
                onChange={this.props.searchChanged}>
                
                <label htmlFor="search">Search:</label>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Title/Author"
                        />
                        
                        
                    
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default Search