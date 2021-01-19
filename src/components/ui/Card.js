import React from 'react'

function Card(props) {
    return (
        <div className="ui card">
            <div className="content">
                {props.children}


            </div>
        </div>
    )
}

export default Card
