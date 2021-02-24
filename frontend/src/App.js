import './App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
//import * as d3 from "d3";
import logo from './logo.png';

import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';

function App() {
  const localizer = momentLocalizer(moment)

  const myEventsList = [
    {
      title: "Test!!",
      start: "2021-02-18",
      end: "2021-02-19"
    }
  ];
  /*
  const data1 = {
    chart: {
      type: 'heatmap',
      inverted: true
    },

    title: {
      text: 'Highcharts heat map',
      align: 'left'
    },

    subtitle: {
      text: 'Temperature variation by day and hour through May 2017',
      align: 'left'
    },

    xAxis: {
      tickPixelInterval: 50,
      min: Date.UTC(2017, 4, 1),
      max: Date.UTC(2017, 4, 5),
      type: 'datetime'
    },

    yAxis: {
      title: {
        text: null
      },
      labels: {
        format: '{value}:00'
      },
      minPadding: 0,
      maxPadding: 0,
      startOnTick: false,
      endOnTick: false,
      tickPositions: [0, 1, 2, 3, 4],
      tickWidth: 1,
      min: 0,
      max: 4
    },

    colorAxis: {
      stops: [
        [0, '#3060cf'],
        [0.5, '#fffbbc'],
        [0.9, '#c4463a']
      ],
      min: -5
    },

    series: [{
      borderWidth: 0,
      colsize: 24 * 36e5, // one day
      tooltip: {
        headerFormat: 'Temperature<br/>',
        pointFormat:  '{point.x:%e %b, %Y} {point.y}:00: <b>{point.value} ℃</b>'
      },
      data: [
        [1493596800000, 0, 1.4],
        [1493596800000, 1, 0.9],
        [1493596800000, 2, 0.3],
        [1493596800000, 3, -0.5],
        [1493596800000, 4, -0.5],
        [1493683200000, 0, 3.6],
        [1493683200000, 1, 2.6],
        [1493683200000, 2, 1.8],
        [1493683200000, 3, 1.4],
        [1493683200000, 4, 1.1],
        [1493769600000, 0, 3.8],
        [1493769600000, 1, 3.4],
        [1493769600000, 2, 2.2],
        [1493769600000, 3, 1.7],
        [1493769600000, 4, 2.1],
        [1493856000000, 0, 5.9],
        [1493856000000, 1, 4.7],
        [1493856000000, 2, 5.0],
        [1493856000000, 3, 4.7],
        [1493856000000, 4, 3.6],
        [1493942400000, 0, 6.3],
        [1493942400000, 1, 5.8],
        [1493942400000, 2, 5.3],
        [1493942400000, 3, 6.9],
        [1493942400000, 4, 6.4],
      ],
    }],
  };*/
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Gecko Portal22</h1>
      </header>
        <table>
          <tr>
            <td>
              <div>
                <h2>Calendar</h2>
                <Calendar
                  localizer={localizer}
                  events={myEventsList}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 500 }}
                />
              </div>
            </td>
            <td valign="top">
              <h2>Data</h2>
              <br />
              <img src={logo} width="30px" height="30px" />
            </td>
          </tr>
        </table>
    </div>
  );
}

export default App;
