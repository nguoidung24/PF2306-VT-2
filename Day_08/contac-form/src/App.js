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
			name: yup.string().required("Tên không được để trống"),
			email: yup.string().email("Email không hợp lệ").required("Email không được để trống"),
			phone: yup.string().matches("^0[0-9]{9}$","Số điện thoại không hợp lệ").required("Số điện thoại khôn được để chống")
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
			<h4 className='font-bold text-center text-2xl'>CONTAC FORM</h4>
			<div className="form-control w-full max-w-xs">
				<div className='form-control'>
					<label className="label">
						<span className="label-text">Name</span>
					</label>
					<input {...register("name")} type="text" className={`input input-bordered w-full max-w-xs ${errors.name?.message && "border-red-700"}`} />
					<label className="label">
						<span className="label-text-alt text-red-700">{errors.name?.message}</span>
					</label>
				</div>
				<div className='form-control'>
					<label className="label">
						<span className="label-text">Email</span>
					</label>
					<input {...register("email")} type="text" className={`input input-bordered w-full max-w-xs ${errors.email?.message && "border-red-700"}`} />
					<label className="label">
						<span className="label-text-alt text-red-700">{errors.email?.message}</span>
					</label>
				</div>
				<div className='form-control'>
					<label className="label">
						<span className="label-text">Phone</span>
					</label>
					<input type="text" {...register("phone")} className={`input input-bordered w-full max-w-xs ${errors.phone?.message && "border-red-700"}`} />
					<label className="label">
						<span className="label-text-alt text-red-700">{errors.phone?.message}</span>
					</label>
				</div>

				<div className="form-control">
					<label className="label">
						<span className="label-text">Message</span>
					</label>
					<textarea className="textarea textarea-bordered h-24"></textarea>
				</div>
			</div>
			<button className='btn mt-2'>Submit</button>
		</form>
	);
}

export default App;
