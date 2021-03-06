import React, { Component } from 'react'
import './Header.css';
import Search  from '../Search/Search';

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
        };
    }

    render() {

        return(
            <div className='container'>
                <h1>Google Book Search</h1>
               <Search
               searchChanged = {this.props.searchChanged}
               value = {this.props.value}
               />
            </div>
        );
    }
}

export default Header