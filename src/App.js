import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <main>
        <Dictionary />
      </main>
      <footer className="App-Footer">
        <small>
          Coded by Sania, open sourced on{" "}
          <a
            href="https://github.com/sania-jay/dictionary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </small>
      </footer>
    </div>
  );
}

export default App;
