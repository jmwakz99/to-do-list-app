import React from 'react'

function ListItem(props) {
    const { description, handleDelete } = props
    return (
        <div className="item">
            <div className="right floated content">
                <i className="delete icon" onClick={handleDelete}></i>
            </div>

            <div className="content">
                {description}
            </div>
        </div>
    )
}

export default ListItem
