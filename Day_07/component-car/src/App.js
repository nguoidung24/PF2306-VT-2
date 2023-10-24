import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";

function App() {
	const [car, setCar] = useState("Mercedes 600");
	const [color, setColor] = useState("Black");
	return (
		<div className="App">
			Select a car <br/>
			<select
				value={car}
				onChange={(e)=>{setCar(e.target.value)}}
				>
				<option selected value="Mercedes 600">Mercedes 600</option>
				<option value="Mercedes 500">Mercedes 500</option>
				<option value="Mercedes 400">Mercedes 400</option>

			</select> <br/>
			Select a color <br/>
			<select
				onChange={(e)=>{setColor(e.target.value)}}
				value={color}
				>
				<option selected value="Black1">Black</option>
				<option value="Red">Red</option>
				<option value="White">White</option>
			</select> <br/>
			<label>You selected a {color} - {car}</label>
		</div>
	);
}

export default App;
