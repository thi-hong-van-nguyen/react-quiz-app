import { createGlobalStyle } from "styled-components";
import quiz from "../images/quiz.jpg";

export const GlobalStyle = createGlobalStyle`
html{
	height: 100%;
}

body {
	width: 100%;
	background: #219ebc;
	// font-family: "Lato" , sans-serif;
	font-family: 'Patrick Hand', cursive;
	font-size: 18px;
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

.mb-4 {
	margin-bottom: 20px
}

.mt-4 {
	margin-top: 20px
}

.fw-bold {
	font-weight: bold !important;
}

.phone-container {
	margin-top: 20px;
	width: 380px;
	min-height: 650px;
	box-shadow: -3px 4px 10px 3px rgba(0 0 0 / 30%);
	border: solid 3px black;
	background: #FFDE21;
	border-radius: 8px;
	padding: 1rem;
	border-width: 5px 3px; 
	background-image: url(${quiz});
	background-size: 380px 250px;
	background-repeat: no-repeat;
	background-position: top;

}

.quizTypeSelection {
	margin-top: 30px;
}

.quiz-content {
	margin-top: 230px;
	display: flex;
	flex-direction: column;
	justify-content:center;
	align-items:center;
	width: 100%;

}

.btn {
	background: #ffffff;
	border: none;
	border-radius: 8px;
	padding: 0.5rem 1rem;
	font-size: 20px;
	font-weight: bold;
	font-family: 'Patrick Hand', cursive;
	cursor: pointer;
	box-shadow: 1px 3px 13px 3px rgba(0 0 0 / 20%)
}


.question-card, 	.answer {
	width: 100%;
}


select, .answer {
	min-height: 30px;
	border-radius: 6px; 
	padding: 0.5rem;
	border: none;
	box-shadow: 1px 3px 13px 3px rgba(0 0 0 / 20%)
}

.score {
	font-size: 30px;
	font-weight: bold;
}

.answer {
	margin-bottom: 1rem;
	font-family: 'Patrick Hand', cursive !important;
	font-size: 18px !important;
	cursor: pointer
}

.correct{
	background: green;
	color: white

}
.wrong{
	background: red;
	color: white
}

.result {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

`;
