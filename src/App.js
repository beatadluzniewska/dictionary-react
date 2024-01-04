import plakat from "./Plakat_SaM-2020.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
    return (
        <div className="App">
            <div className="container">
                <header className="App-header">
                    <img
                        src={plakat}
                        alt="plakat"
                        className="App-logo img-fluid"
                    />
                </header>
                <main>
                    <Dictionary />
                </main>
                <footer className="App-footer">
                    <small>Coded by Beata Dluzniewska</small>
                </footer>
            </div>
        </div>
    );
}

export default App;
