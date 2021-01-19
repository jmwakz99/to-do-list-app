import React from 'react'

function Search(props) {
    const { handleChange } = props

    return (
        <div className="ui search">
            <div className="ui icon input">
                <input className="prompt" type="text" name="search" onChange={handleChange} placeholder="Search..." />
                <i className="search icon"></i>
            </div>
            <div className="results"></div>
        </div>
    )
}

export default Search
