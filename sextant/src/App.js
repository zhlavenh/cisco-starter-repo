// This is what compents to display
import './App.css';
import {clickCollaspse} from './interaction';

export default function App() {
  return (
    <div className="App">
    </div>
  );
}

export function Banner(){
  return(
    <div className="Banner">
      <h1>Sextant</h1>
      <button type="button" className="banner-collapse" onClick={clickCollaspse}>
        <span className="material-icons banner-opened">
          keyboard_arrow_down
        </span>
      </button>
    </div>
  );
}

export function Exhibit(){
  return(
    <div className="Exhibit">
      {/* Location of card components */}
    </div>
  );
}

function cardContainer(props){
  return(
    <div className="card">
      <h2 className="cardHeader">{props.header}</h2>
      <div className="cardInfo">
        <p className="userIP">{props.userIP}</p>
        <p className="plyonInfo">{props.pylonInfo}</p>
      </div>
    </div>
  );
}