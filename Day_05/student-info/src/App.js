import logo from './logo.svg';
import './App.css';

const studentInfo= [
  {
    Id: 1,
    Name: "Lessin",
    Age: 23,
    Address:"Hà Nội"
  },
  {
    Id: 2,
    Name: "Yasua",
    Age: 25,
    Address:"Hồ Chí Minh"
  },
  {
    Id: 3,
    Name: "Valhein",
    Age: 16,
    Address:"Bình Nguyên Vô Tận"
  }
]
function getTable(arr){
  let html = [];
  for(let item of arr){
    html.push(
      <tr key={item.Id}>
          <td>{item.Id}</td>
          <td>{item.Name}</td>
          <td>{item.Age}</td>
          <td>{item.Address}</td>
      </tr>
    );
  }
  return(
    <table border='1'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
			{html}
      </tbody>
    </table>
  );
}
function App() {
  return (
    <div className="App">
      {getTable(studentInfo)}
    </div>
  );
}

export default App;
