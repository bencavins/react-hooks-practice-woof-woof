import React, {useState, useEffect} from "react";
import Doggo from "./Doggo";
import NavBar from "./NavBar";

function App() {
  const [doggos, setDoggos] = useState([])
  const [selected, setSelected] = useState({})
  const [isFilterOn, setIsFilterOn] = useState(false)

  function handleClick(event) {
    setIsFilterOn(prev => !prev)
  }

  useEffect(() => {
    fetch('http://localhost:3001/pups')
      .then(resp => resp.json())
      .then(data => setDoggos(data))
  }, [])

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter" onClick={handleClick}>
          Filter good dogs: {isFilterOn ? "ON" : "OFF"}
        </button>
      </div>
      <div id="dog-bar">
        <NavBar doggos={doggos} setSelected={setSelected} />
      </div>
      <div id="dog-summary-container">
        <h1>{selected.name}</h1>
        <div id="dog-info">
          <Doggo {...selected} />
        </div>
      </div>
    </div>
  );
}

export default App;
