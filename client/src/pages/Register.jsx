import { useState } from 'react';
import { onRegistration } from '../api/auth';
import Layout from '../components/Layout';

const Register = () => {
	const [values, setValues] = useState({
		email: '',
		password: '',
	});

	const [error, setErorr] = useState(false);

	const [success, setSuccess] = useState(false);

	const onChange = event => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	const onSubmit = async event => {
		event.preventDefault();

		try {
			const response = await onRegistration(values);
			console.log(response);
		} catch (err) {
			console.log(err.response);
			setErorr(err.response);
			console.log(error);
		}
	};

	return (
		<Layout>
			<form onSubmit={onSubmit} className='container mt-3'>
				<h1>Register</h1>
				<div className='mb-3'>
					<label htmlFor='email' className='form-label'>
						Email address
					</label>
					<input
						onChange={onChange}
						type='email'
						className='form-control'
						id='email'
						name='email'
						value={values.email}
						placeholder='Enter your email'
						required
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='password' className='form-label'>
						Password
					</label>
					<input
						onChange={onChange}
						type='password'
						className='form-control'
						id='password'
						name='password'
						value={values.password}
						placeholder='Enter a password'
						required
					/>
				</div>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</Layout>
	);
};
export default Register;
