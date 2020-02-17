import React, { useState } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';

const GLobalStyle = createGlobalStyle`
	html {
		height: 100%;
	}

	body {
		font-family: Arial, Helvetica, sans-serif;
		background: linear-gradient(to bottom, #f05053, #e1eec3);
		height: 100%;
		margin: 0;
		color: #555;
	}
`;

const sharedStyles = css`
	background-color: #eee;
	height: 40px;
	border-radius: 5px;
	border: 1px solid #ddd;
	margin: 10px 0 20px 0;
	padding: 20px;
	box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	/* background-color: red; */
	padding: 0 20px;
`;

const StyledForm = styled.form`
	width: 100%;
	max-width: 700px;
	padding: 40px;
	background-color: #fff;
	border-radius: 10px;
	box-sizing: border-box;
	box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input``;

const StyledTextArea = styled.textarea``;

const StyledButton = styled.button``;

const StyledFieldset = styled.fieldset``;

const StyledError = styled.div``;

function App() {
	return (
		<>
			<GLobalStyle />
			<StyledFormWrapper>
				<StyledForm>
					<h2>Contact Form</h2>
					<label htmlFor='name'></label>
					<StyledInput type='text' name='name' />
					<label htmlFor='email' name='email'></label>
					<StyledInput type='email' name='email' />
					<StyledFieldset>
						<legend>Gender</legend>
						<lable>
							<input type='radio' value='female' name='gender' />
						</lable>
						<lable>
							<input type='radio' name='gender' value='male' />
							male
						</lable>
					</StyledFieldset>
					<label htmlFor='message'>Message</label>
					<StyledTextArea name='mesage' />
					<StyledError>
						<p>Erorr Message here</p>
					</StyledError>
					<StyledButton type='submit'>Send message</StyledButton>
				</StyledForm>
			</StyledFormWrapper>
		</>
	);
}

export default App;
