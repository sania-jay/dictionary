import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <header className="App-header">Dictionary</header>

      <main className="App-Main">
        <Dictionary defaultKeyword="Coffee" />
      </main >
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
