import React, { Component } from 'react'
import Month from './Month'

class MonthContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedDate: props.selectedDate,
            selectedMonth: props.selectedMonth
        }
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps != this.props) {
            let { selectedDate, selectedMonth } = this.props
            this.setState({
                ...this.state,
                selectedDate,
                selectedMonth
            })
        }
    }

    render() {
        return (
            <div>
                <Month selectedMonth={this.state.selectedMonth} handleMonthSelection={this.props.handleMonthSelection} />
            </div>
        )
    }
}

export default MonthContainer