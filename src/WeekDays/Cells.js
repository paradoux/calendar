import React, { Component } from 'react'


const Cells = (props) => {

    return props.correspondingDates.map((date) => {
        return (
            <div className="cell"  >
                <p id={date} onClick={() => props.handleDateSelection(date)}> {date.getDate()}</p>
            </div>
        )
    })
}

export default Cells