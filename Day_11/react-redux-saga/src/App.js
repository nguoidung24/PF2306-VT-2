import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserThunkAction } from './Redux-Slice/UserSlice';
import axios from 'axios';

function App() {
	const dispatch = useDispatch();
	const userInfo = useSelector(state => state.userReducer);
	const info = (userInfo.userInfo);
	const handleClick = () => {
		dispatch(fetchUserThunkAction());
	}
	const handleDelete = async (id) => {
		let response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
		alert(response.status);
	}
	return (
		<div style={{ padding: "20px"}}>
			<h2>UserList</h2>
			<button onClick={handleClick}>Get user</button>
			{ info.length != 0 &&
				<table style={{ width: " 100%", textAlign:"left" }}>
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Email</th>
							<th>Website</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{
							info.map((item, index) => (
								<tr key={index}>
									<td>{item.id}</td>
									<td>{item.name}</td>
									<td>{item.email}</td>
									<td>{item.website}</td>
									<td>
										<button
											onClick={() => handleDelete(item.id)}
											>
												Delete
										</button>
									</td>
								</tr>
							))
						}
					</tbody>
				</table>
			}
		</div>
	);
}

export default App;
