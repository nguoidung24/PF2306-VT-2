import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

function App() {
	const addAttr = useEffect(() => {
		let html = document.querySelector("html");
		html.setAttribute("data-theme", "luxury");
	})
	const schema = yup
		.object({
			email: yup.string().email("Email không hợp lệ").required("Email không được để trống"),
			title: yup.string().required("Title không được để trống"),
			mess: yup.string().required("Message không được để trống"),
			fileUp: yup
			.mixed()
			.required('Chọn file là bắt buộc') 
		})
		.required()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	})
	const onSubmit = (data) => {
		console.log(data)
		alert("“Add contact successfully!!!”")
	}

	return (
		<form
			className='w-80 mx-auto grid grid-cols-1 p-2'
			onSubmit={handleSubmit(onSubmit)}
		>
			<h4 className='font-bold text-center text-2xl'>Mail Form</h4>
			<div className="form-control w-full max-w-xs">
				<div className='form-control'>
					<label className="label">
						<span className="label-text">To</span>
					</label>
					<input {...register("email")} type="text" className={`input input-bordered w-full max-w-xs ${errors.email?.message && "border-red-700"}`} />
					<label className="label">
						<span className="label-text-alt text-red-700">{errors.email?.message}</span>
					</label>
				</div>
				<div className='form-control'>
					<label className="label">
						<span className="label-text">Title</span>
					</label>
					<input {...register("title")} type="text" className={`input input-bordered w-full max-w-xs ${errors.title?.message && "border-red-700"}`} />
					<label className="label">
						<span className="label-text-alt text-red-700">{errors.title?.message}</span>
					</label>
				</div>
				<div className='form-control'>
					<label className="label">
						<span className="label-text">Message</span>
					</label>
					<input type="text" {...register("mess")} className={`input input-bordered w-full max-w-xs ${errors.mess?.message && "border-red-700"}`} />
					<label className="label">
						<span className="label-text-alt text-red-700">{errors.mess?.message}</span>
					</label>
				</div>

				<div className="form-control">
					<input type="file" {...register("fileUp")} className="file-input file-input-bordered w-full max-w-xs" />
					<label className="label">
						<span className="label-text-alt text-red-700">{errors.fileUp?.message}</span>
					</label>
				</div>
			</div>
			<button className='btn mt-2'>Submit</button>
		</form>
	);
}

export default App;
