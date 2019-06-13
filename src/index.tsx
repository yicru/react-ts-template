import * as React from 'react'
import { Component } from 'react'
import { render } from 'react-dom'
import 'bulma'

class App extends Component {
  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">React Template</h1>
            <h2 className="subtitle">using parcel</h2>
          </div>
        </div>
      </section>
    )
  }
}

render(<App />, document.getElementById('root'))
