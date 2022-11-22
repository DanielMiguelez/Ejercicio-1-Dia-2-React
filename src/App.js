import './App.css';
import Counter from "./components/Counter/Counter"
import Greeting from "./components/Greeting/Greeting"

const user = {
  name: "Euralio"
}

function App() {
  return (
    <div className="App">
     < Counter value = {5} />
     < Greeting user = {user}/>
    </div>
  );
}

export default App;
