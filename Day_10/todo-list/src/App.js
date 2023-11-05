import './App.css';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
        setData(response.data);
      })
  }, [])
  const { register, handleSubmit } = useForm()
  console.log("render");
  const handleSubmitFrom = (formData) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos",formData)
      .then(response => {
        alert(response.status)
      })
  }
  return (
    <div className="lg:w-3/4 w-full px-2 mx-auto">
      <h2 className="font-bold text-2xl text-center uppercase">
        Todo List
      </h2>
      <form
        onSubmit={handleSubmit(handleSubmitFrom)}
        className='grid grid-cols-1 gap-2 p-2'>
        <input
          className='border px-4 rounded py-2'
          type="text"
          placeholder='ID'
          {...register("id")}
        />
        <input
          className='border px-4 rounded py-2'
          type="text"
          placeholder='User ID'
          {...register("userId")}
        />
        <input
          className='border px-4 rounded py-2'
          type="text"
          placeholder='Title'
          {...register("title")}

        />
        <div className='flex gap-2'>
          <input
            id='true'
            value={"true"}
            checked
            name='comp'
            {...register("completed")}
            type="radio" />
          <label htmlFor='true'>True</label>
          <input
            id='false'
            value={"false"}
            name='comp'
            {...register("completed")}
            type="radio" />
          <label htmlFor='false'>False</label>
        </div>
        <button
          className='w-1/4 bg-green-700 py-3 rounded
          font-medium mx-auto'>
          Submit
        </button>
      </form>
      {data ? <table className='w-full text-center my-3'>
        <thead>
          <tr className='py-2 border-b-2'>
            <th>ID</th>
            <th>User ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody >
          {data.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((val, ind) => (
                <td className='py-2 border-b'
                  key={ind}>{String(val)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> : <p>Loadding...</p>}
    </div>
  );
}

export default App;
