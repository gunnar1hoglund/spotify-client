import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { NONAME } from "dns";
// import SickoMode from "./components/SickoMode"; // playlist component for some reason
// import { ReactComponent } from "*.svg";

let fakeServerData = {
  user: {
    name: 'Gunnar',
    playlists: [
      {
        name: 'Good Songs',
        songs: [{ name: 'neat song' }, { name: 'My Cell' }, { name: 'sunflower' }]
      },
      {
        name: 'Release Radar',
        songs: [{ name: 'cool guy' }, { name: 'fireworks' }, { name: 'alright alright alright' }]
      },
      {
        name: 'Discover Weekly',
        songs: [{ name: 'Le song' }, { name: 'The song' }, { name: 'el songo' }]
      },
      {
        name: 'Discover Monthly',
        songs: [{ name: 'REDBULL' }, { name: 'Jimmy Sparks' }, { name: 'fun' }]
      }
    ]
  }
}

let defaultStyle = {
  color: '#fff',
  'font-family': 'monospace'
}

const divStyle = {
  display: 'inline-block',
  padding: '20px',
}

let playlistWrap = {
  display: 'block'
}


class SickoMode extends React.Component {
  render() {
    let playlist = this.props.playlist
    return (
      <div style={divStyle} className="album">
        <img />
        <p>{playlist.name}</p>
        <ul>
          {playlist.songs.map(song =>
            <li>{song.name}</li>
          )}
        </ul>
      </div>
    );
  }
}


class Filter extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <img />
        <input type="text" onKeyUp={event =>
          this.props.onTextChange(event.target.value)}
          style={{
            ...defaultStyle,
            color: 'black',
            'font-size': '20px'
          }} />
      </div>
    );
  }
}



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      serverData: {},
      filterString: ''
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ serverData: fakeServerData });
    }, 1000)
  }

  render() {


    return (
      <div className="App">
        {this.state.serverData.user ?
          <div>
            <h1>{this.state.serverData.user.name}'s Music</h1>

            <header className="App-header">
              <Filter onTextChange={text => this.setState({ filterString: text })} />
              <div style={playlistWrap} className="playlistWrap">
                {this.state.serverData.user.playlists.filter(playlist =>
                  playlist.name.toLowerCase().includes(this.state.filterString.toLowerCase())
                ).map(playlist =>
                  <SickoMode playlist={playlist} />
                )}
              </div>
            </header>
          </div> : <h1>Loading...</h1>

        }


      </div>
    );
  }
}
export default App;
