import React, { useState } from 'react';
import './EntryPage.css';
import { Jumbotron } from 'react-bootstrap';
import { Login } from '../../components/login/Login';

export const EntryPage = () => {
	const [ email, setemail ] = useState('');
	const [ password, setpassword ] = useState('');

	const handleOnChange = (event) => {
		const { name, value } = event.target;
		console.log('name: ', name);
        console.log('value: ', value);

	};

	return (
		<div className='entry-page bg-info'>
			<Jumbotron className='form-box'>
				<Login handleOnChange={() => handleOnChange} email={email} password={password} />
			</Jumbotron>
		</div>
	);
};
