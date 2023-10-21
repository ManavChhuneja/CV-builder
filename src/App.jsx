import "./App.css";
import LeftPane from "./components/LeftPane/LeftPane";
import Resume from "./components/RightPane/Resume/Resume";

function App() {
  return (
    <div className="app">
      <LeftPane />
      <Resume />
    </div>
  );
}

export default App;
