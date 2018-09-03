import React, { Component } from 'react'

import MonthContainer from './Month/MonthContainer'
import WeekDaysContainer from './WeekDays/WeekDaysContainer';
var addMonths = require('date-fns/add_months')
var subMonths = require('date-fns/sub_months')

var format = require('date-fns/format')
var frLocale = require('date-fns/locale/fr')

class Calendar extends React.Component {

    constructor() {
        super()
        this.state = {
            selectedDate: new Date(Date.now()),
            selectedDay: format(new Date(Date.now()), "dddd", { locale: frLocale }),
            selectedMonth: format(new Date(Date.now()), "MMMM", { locale: frLocale })
        }
    }

    handleDateSelection = (selectedDate) => {
        let selectedDay = format(selectedDate, "dddd", { locale: frLocale })
        let selectedMonth = format(selectedDate, "MMMM", { locale: frLocale })
        this.setState({
            ...this.state,
            selectedDate,
            selectedDay,
            selectedMonth
        })
    }


    handleMonthSelection = (direction, e) => {
        e.preventDefault()
        var { selectedDate } = this.state
        if (direction === "further") {
            selectedDate = addMonths(selectedDate, 1)
        } else if (direction === "back") {
            selectedDate = subMonths(selectedDate, 1)
        }
        let selectedMonth = format(selectedDate, "MMMM", { locale: frLocale })
        this.setState({
            ...this.state,
            selectedDate,
            selectedMonth
        })
    }

    render() {
        console.log(this.state.selectedDate)
        return (
            <div className="calendar">
                <MonthContainer selectedDate={this.state.selectedDate} handleMonthSelection={this.handleMonthSelection} selectedMonth={this.state.selectedMonth} />
                <WeekDaysContainer selectedDate={this.state.selectedDate} handleDateSelection={this.handleDateSelection} />
            </div>
        )
    }
}

export default Calendar
