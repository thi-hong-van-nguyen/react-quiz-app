import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html{
	height: 100%;
}

body {
	width: 100%;
	background: #219ebc;
	
}

*{
	box-sizing:border-box;
}

.app{
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}

.phone-container {
	margin-top: 20px;
	width: 380px;
	height: 650px;
	// margin: 0 auto;
	box-shadow: -3px 4px 10px 3px rgba(0 0 0 / 30%);
	border: solid 3px black;
	background: #ffd60a;
	border-radius: 8px;
	padding: 1rem;
	border-width: 5px 3px; 
}
`;
