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

const divStyle = {
  display: 'inline-block',
  padding: '20px',
}

const headerStyle = {
  display: 'block',
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



class App extends React.Component {
  constructor() {
    super()
    this.state = { serverData: {} }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ serverData: fakeServerData });
    }, 1000);
  }

  render() {


    return (
      <div className="App">
        {this.state.serverData.user ?
          <div>
            <h1>{this.state.serverData.user.name}'s Music</h1>
            <header style={headerStyle} className="App-header">
              {this.state.serverData.user.playlists.map(playlist =>
                <SickoMode playlist={playlist} />
              )}
            </header>
          </div> : <h1>Loading...</h1>

        }


      </div>
    );
  }
}
export default App;
