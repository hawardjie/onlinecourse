import ReactPlayer from 'react-player';
import './App.css';

function App() {
  return (
    <div>
    <div className="player-wrapper">
      <ReactPlayer className='react-player' controls width='100%' height='100%' url='https://youtu.be/9Tx631VnH40' />
    </div>
    <div className="player-wrapper">
      <ReactPlayer className='react-player' controls width='100%' height='100%' url='https://youtu.be/ajj35CJ4S5E' />
    </div>
    <div className="player-wrapper">
      <ReactPlayer className='react-player' controls width='100%' height='100%' url='https://youtu.be/rTsa8v35PA8' />
    </div>
    </div>
  );
}

export default App;
