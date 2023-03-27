// This is what compents to display
import './App.css';
import clickCollaspse from './interaction';

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

