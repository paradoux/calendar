import React, {Component} from "react"

const Month = props => {
  return (
    <div className="months">
      <button onClick={e => props.handleMonthSelection("back", e)}>
        <i class="fas fa-angle-left" />
      </button>
      <div className="month__name"> {props.selectedMonth} </div>
      <button onClick={e => props.handleMonthSelection("further", e)}>
        <i class="fas fa-angle-right" />
      </button>
    </div>
  )
}

export default Month
