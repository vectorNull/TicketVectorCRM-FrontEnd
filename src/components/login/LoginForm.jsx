import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types'

export const LoginForm = ({ handleOnChange, email, password }) => {
	return (
		<Container>
			<Row>
				<Col>
					<h1 className='text-info text-center'>Client Login</h1>
					<hr />
					<Form>
						<Form.Group>
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								type='email'
								name='email'
								value={email}
								onChange={handleOnChange}
								placeholder='Enter Email'
								required
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								name='password'
								value={password}
								onChange={handleOnChange}
								placeholder='Enter password'
								required
							/>
						</Form.Group>
						<Button type='submit'>Login</Button>
					</Form>
					<hr />
				</Col>
			</Row>
			<Col>
				<a href='#!'>Forgot Password?</a>
			</Col>
		</Container>
	);
};

LoginForm.propTypes = {
	handleOnChange: PropTypes.func.isRequired,
	email: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
}

export default LoginForm;

//video 3; 46 mintutes