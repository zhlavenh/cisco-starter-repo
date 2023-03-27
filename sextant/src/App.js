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
    </div>
  );
}

export function Exhibit(props){
  return(
    <div className="exhibit">
      <h2 className="exhibitHeadng">{props.heading}</h2>
      <div className="exhibitInfo">
        {props.info}
      </div>
    </div>
  );
}

