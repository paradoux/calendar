import React, {Component} from "react"
import "./App.css"

import Calendar from "./Calendar"
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container centerer">
          <div className="row">
            <div className="col-6 offset-3">
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
