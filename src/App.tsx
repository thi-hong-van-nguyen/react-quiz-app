import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { fetchQuizQuesions, Difficulty, QuestionState } from "./API";

export type AnswerObject = {
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: string;
};

const TOTAL_QUESTIONS: number = 10;

function App() {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState<QuestionState[]>([]);
	const [questionNumber, setQuestionNumber] = useState(0);
	const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

	const fetchQuestions = async () => {
		setLoading(true);
		setGameOver(false);

		const newQuestions = await fetchQuizQuesions(
			TOTAL_QUESTIONS,
			Difficulty.EASY
		);

		setQuestions(newQuestions);
		setScore(0);
		setUserAnswers([]);
		setQuestionNumber(0);
		setLoading(false);
	};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!gameOver) {
			const answer = e.currentTarget.value;
			const correct = questions[questionNumber].correct_answer === answer;
			if (correct) setScore((prev) => prev + 1);
			const answerObject = {
				question: questions[questionNumber].question,
				answer,
				correct,
				correctAnswer: questions[questionNumber].correct_answer,
			};
			setUserAnswers((prev) => [...prev, answerObject]);
		}
	};

	const nextQuestions = () => {
		const nextQuestion = questionNumber + 1;

		if (nextQuestion === TOTAL_QUESTIONS) {
			setGameOver(true);
		} else {
			setQuestionNumber(nextQuestion);
		}
	};

	return (
		<div className="app">
			<h1>Quiz Your Knowledge</h1>

			{gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
				<button className="start-btn" onClick={fetchQuestions}>
					Start
				</button>
			) : null}
			{!gameOver && <div className="score">Score:{score}</div>}
			{loading && <div>...Loading Questions</div>}

			{!loading && !gameOver && (
				<QuestionCard
					questionNumber={questionNumber + 1}
					totalQuestions={TOTAL_QUESTIONS}
					question={questions[questionNumber].question}
					answers={questions[questionNumber].answers}
					userAnswer={
						userAnswers ? userAnswers[questionNumber] : undefined
					}
					callback={checkAnswer}
				/>
			)}

			{!gameOver &&
				!loading &&
				userAnswers.length === questionNumber + 1 &&
				questionNumber !== TOTAL_QUESTIONS - 1 && (
					<button className="next-btn" onClick={nextQuestions}>
						Next Question
					</button>
				)}
		</div>
	);
}

export default App;
