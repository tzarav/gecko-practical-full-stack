import './App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import React, { Component } from 'react';
import logo from './logo.png';

import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import ThicknessMap from './ThicknessMap';
import ColorScale from './ColorScale';
import axios from 'axios'

const localizer = momentLocalizer(moment)

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cal_events: [],
    }
  }

  componentDidMount() {
    Promise.all([
      axios.get('http://localhost:8000/maintenance'),
      axios.get('http://localhost:8000/inspections')
    ])
    .then(([r1, r2]) => {
      var joinem = []
      console.log(r1.data)
      let maintenance = r1.data
      let inspections = r2.data

      for (let i = 0 ; i < maintenance.length; i++) {
        maintenance[i].start = maintenance[i].start_date
        maintenance[i].end = maintenance[i].start_date
        joinem.push(maintenance[i])
      }
      for (let j = 0 ; j < inspections.length; j++) {
        inspections[j].start = inspections[j].start_date
        inspections[j].end = inspections[j].end_date
        joinem.push(inspections[j])
      }
      this.setState({
        cal_events: joinem
      })
    })
  }

  render() {
    const {cal_events} = this.state;
    /*<img src={logo} className="App-logo" alt="logo" />*/
    
    return (
      <div className="App">
        <header>

          <h1>Gecko Portal</h1>
        </header>
          <table style={{ border: 'none'}}>
            <tbody>
              <tr>
                <td>
                  <div>
                    <h2>Calendar</h2>
                    <Calendar
                      localizer={localizer}
                      events={cal_events }
                      startAccessor="start"
                      endAccessor="end"
                      style={{ height: 750 }}
                    />
                  </div>
                </td>
                <td id="datablock">
                  <div>
                    <h2>Data</h2>
                    <ThicknessMap />
                  </div>
                </td>
              </tr>
              <tr>
                <td></td>
                <td id="colorscale"></td>
                  <ColorScale />
              </tr>
            </tbody>
          </table>
      </div>

    );
  }
}

export default App;
