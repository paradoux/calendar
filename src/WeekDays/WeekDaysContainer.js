import React, { Component } from 'react'
import WeekDays from './WeekDays'

import { startOfMonth, endOfMonth, startOfWeek, lastDayOfWeek, eachDay } from 'date-fns'


class WeekDaysContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dates: []
        }
    }

    componentDidMount = () => {
        let monthStart = startOfMonth(this.props.selectedDate)
        let monthEnd = endOfMonth(this.props.selectedDate)
        let startofWeek = startOfWeek(monthStart, { weekStartsOn: 1 })
        let lastdayOfWeek = lastDayOfWeek(monthEnd, { weekStartsOn: 1 })
        let dates = eachDay(startofWeek, lastdayOfWeek)
        this.setState({
            ...this.state,
            dates
        })
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps != this.props) {
            let monthStart = startOfMonth(this.props.selectedDate)
            let monthEnd = endOfMonth(this.props.selectedDate)
            let startofWeek = startOfWeek(monthStart, { weekStartsOn: 1 })
            let lastdayOfWeek = lastDayOfWeek(monthEnd, { weekStartsOn: 1 })
            let dates = eachDay(startofWeek, lastdayOfWeek)
            this.setState({
                ...this.state,
                dates
            })
        }
    }

    render() {
        if (this.state.dates.length != 0) {
            return <WeekDays dates={this.state.dates} selectedDate={this.state.selectedDate} handleDateSelection={this.props.handleDateSelection} />
        }
        else { return (null) }
    }
}

export default WeekDaysContainer