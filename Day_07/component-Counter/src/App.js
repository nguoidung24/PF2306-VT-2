import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";
function App() {

	const [counterOne, setCounterOne] = useState(1);
	const [counterTwo, setCounterTwo] = useState(2)
	return (
		<div className="App">
			Counter: {counterOne} <br/>
			<button
				onClick={()=>setCounterOne(counterOne + 1)}
			>add 1</button> <br/>
			Counter: {counterTwo} <br/>
			<button
				onClick={()=>setCounterTwo(counterTwo + 2)}
			>add 2</button>
		</div>
	);
}

export default App;
