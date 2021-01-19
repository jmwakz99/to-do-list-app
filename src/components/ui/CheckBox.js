import React from 'react'

function CheckBox(props) {
    const { name, handleChange, label } = props
    return (
        <div className="ui checkbox">
            <input type="checkbox" name={name} onChange={handleChange} />
            <label>{label}</label>
        </div>
    )
}

export default CheckBox
