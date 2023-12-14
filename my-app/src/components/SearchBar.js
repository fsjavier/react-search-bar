import React, { Component } from 'react'
import importedNames from '../names'

export class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            names: importedNames
        }
    }

    handleChange = (event) => {
        let inputText = event.target.value.toLowerCase();
        let filteredNames = importedNames.filter(name => name.toLowerCase().includes(inputText))
        this.setState({
            names: filteredNames
        })
    }
    
    render() {
        return (
            <div style={{margin: 'auto'}}>
                <h1>Name search</h1>
                <p>Matching names found: {this.state.names.length}</p>
                <form>
                    <input
                        type='text'
                        placeholder='search names...'
                        onChange={this.handleChange}
                    />
                </form>
                <div>
                    {this.state.names.map(name => {
                        return <p key={name}>{name}</p>
                    })}
                </div>
            </div>
        )
    }
}

export default SearchBar
