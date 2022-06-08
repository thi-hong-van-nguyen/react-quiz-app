import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { fetchQuizQuesions, Difficulty } from "./API";

const TOTAL_QUESTIONS: number = 10;

function App() {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [questionNumber, setQuestionNumber] = useState(0);
	const [userAnswers, setUserAnswers] = useState([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

	console.log(fetchQuizQuesions(TOTAL_QUESTIONS, Difficulty.EASY));

	const fetchQuestions = async () => {};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

	const nextQuestions = () => {};

	return (
		<div className="app">
			<h1>Quiz Your Knowledge</h1>

			<button className="start-btn" onClick={fetchQuestions}>
				Start
			</button>
			<div className="score">Score:</div>
			<div>...Loading Questions</div>

			{/* <QuestionCard
				questionNumber={questionNumber + 1}
				totalQuestions={TOTAL_QUESTIONS}
				question={questions[questionNumber].question}
				answers={questions[questionNumber].answers}
				userAnswer={
					userAnswers ? userAnswers[questionNumber] : undefined
				}
				callback={checkAnswer}
			/> */}

			<button className="next-btn" onClick={nextQuestions}>
				Next Question
			</button>
		</div>
	);
}

export default App;
