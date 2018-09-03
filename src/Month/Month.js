import React, { Component } from 'react'

const Month = (props) => {
    return (
        <div>
            <button onClick={(e) => props.handleMonthSelection("back", e)}> Mois précédent  </button>
            <div>{props.selectedMonth}</div>
            <button onClick={(e) => props.handleMonthSelection("further", e)}> Mois suivant  </button>
        </div>
    )
}

export default Month