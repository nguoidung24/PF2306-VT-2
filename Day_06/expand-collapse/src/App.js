import './App.css';
import React, {useState} from 'react';

function App() {
	const [display, setDisplay] = useState(false);
	const [title, setTitle] = useState("Show");

	const handleClick = () =>{
		setDisplay(!display)
		display ?	setTitle("Show") : setTitle("Close") 
	}

	return (
		<div className="App">
			<header style={{height:"100px",width:"100vw",backgroundColor:"green"}}>
				HEADER
			</header>
			<button onClick={handleClick}>
				{title}
			</button>
			{display == true && 
				<p>noi dung</p>
			}
		</div>
	);
}

export default App;
