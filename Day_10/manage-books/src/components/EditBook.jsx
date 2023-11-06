import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {useForm} from "react-hook-form"
import axios from 'axios';
function EditBook() {
    const chocoNext = useNavigate();
    const {register, handleSubmit, setValue} = useForm();
    const id = useParams();
    useEffect(() =>{
        axios.get(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id.id}`)
            .then(response => {
                setValue("title",response.data.title);
                setValue("quantity",response.data.quantity);
            })
    },[])
    const handleAddBook = async (data) =>{
        const result = await axios.put(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id.id}`,data);
        alert(result.status);
        chocoNext("/");
    }
    return (<form onSubmit={handleSubmit(handleAddBook)}
        className='container grid w-96 gap-y-2 mx-auto p-2'>
        <h2 className='text-2xl font-medium'>Edit</h2>
        <p>Title</p>
        <input {...register("title")} className='border px-4 py-2 rounded' type="text" />
        <p>Quantity</p>
        <input {...register("quantity")} className='border px-4 py-2 rounded' type="text" />
        <div>
            <button className='px-4 me-2 py-1 bg-green-600 text-white w-fit border rounded'>Add</button>
            <Link to="/">Quay lại</Link>
        </div>

    </form>);
}

export default EditBook;