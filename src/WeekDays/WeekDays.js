import React, { Component } from 'react'
import Cells from './Cells.js'

var format = require('date-fns/format')
var frLocale = require('date-fns/locale/fr')

const WeekDays = (props) => {
    let weekDays = [1, 2, 3, 4, 5, 6, 0]
    return weekDays.map((weekDay) => {
        let { dates } = props
        let correspondingDates = dates.filter((date) => {
            return (date.getDay() === weekDay)
        })
        return (
            <div>
                <h2>{format(correspondingDates[0], "dddd", { locale: frLocale })}</h2>
                <div className="cells">
                    <Cells correspondingDates={correspondingDates} handleDateSelection={props.handleDateSelection} />
                </div>
            </div>
        )
    })
}

export default WeekDays