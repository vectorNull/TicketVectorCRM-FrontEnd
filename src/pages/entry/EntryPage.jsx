import React, { useState } from 'react';
import './EntryPage.css';
import { Jumbotron } from 'react-bootstrap';
import { LoginForm } from '../../components/login/LoginForm';

export const EntryPage = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const handleOnChange = (event) => {
		const { name, value } = event.target;

		switch(name){
			case 'email':
				setEmail(value)
				break
			case 'password':
				setPassword(value)
				break
			default:
				break
		}

		console.log('name: ', name);
		console.log('value: ', value);
	};

	return (
		<div className='entry-page bg-info'>
			<Jumbotron className='form-box'>
				<LoginForm handleOnChange={() => handleOnChange} email={email} password={password} />
			</Jumbotron>
		</div>
	);
};
