import plakat from "./Plakat_SaM-2020.jpg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={plakat} alt="plakat" className="App-logo img-fluid" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
