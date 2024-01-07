import plakat from "./6108e353f9714b68e544a01803778ea8.jpg";
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
                    <h2>Search for a definition:</h2>
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
