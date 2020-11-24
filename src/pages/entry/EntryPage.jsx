import React from 'react';
import './EntryPage.css';
import { Jumbotron } from 'react-bootstrap';
import { Login } from '../../components/login/Login';

export const EntryPage = () => {
	return (
		<div className='entry-page bg-info'>
			<Jumbotron>
                <Login />
            </Jumbotron>
		</div>
	);
};
