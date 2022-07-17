import ReactPlayer from 'react-player';
import './App.css';
import data from './data.json';

function App() {

  const clipItems = data.map((clip) => {
    return (
      <div className="player-wrapper">
        <ReactPlayer className='react-player' controls width='100%' height='100%' url={clip.url} /> 
      </div>)
    })

  return (
    <div>
      {clipItems}
    </div>
  );
}

export default App;
