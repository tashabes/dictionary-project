import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary App</h1>
        </header>
        <main>
          <Dictionary defaultKeywork="sunset" />
        </main>
        <footer className="App-footer">
          <small>Coded by Natasha Abel</small>
        </footer>
      </div>
    </div>
  );
}
