import './App.css';
import axios from 'axios';
import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function App() {
  const [data, setData] = useState(null);
  useEffect(()=>{
    axios.get("https://my-json-server.typicode.com/codegym-vn/mock-api-books/books")
      .then(response => {
        setData(response.data);
      })
  },[data])
  const handleDelete = async (id) =>{
    const result = await axios.delete(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`)
    alert(result.status);

  }
  return (
    <div className="container p-2 mx-auto">
      <h2 className='font-bold text-2xl'>Library</h2>
      <Link to="/newbook" className='float-right border bg-green-600
      text-white font-medium py-2 px-4 rounded'>
        Add a new book
      </Link>
      {data ? <table className='w-full my-3 text-center'>
        <thead className='border-b-2 border-black'> 
          <tr>
            <th>Title</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index)=>(
            <tr className='border-b-2' key={index}>
              <td className='py-2'>{item.title}</td>
              <td>{item.quantity}</td>
              <td>
                <Link
                  to={`/editbook/${item.id}`} 
                  className='border px-2 rounded mx-1 bg-orange-600 text-white py-1'>Edit</Link>
                <button
                  onClick={()=> handleDelete(item.id)}
                 className='border px-2 rounded mx-1 bg-red-600 text-white py-1'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>:
      <p>Loadding...</p>
      }
    </div>
  );
}

export default App;
