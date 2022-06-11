import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { fetchQuizQuesions, Difficulty, QuestionState } from "./API";
import { GlobalStyle } from "./styles/App.styles";
import QuizTypeSelection from "./components/QuizTypeSelection";

export type AnswerObject = {
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: string;
};

export type QuizType = {
	category: number;
	difficulty: string;
};

const TOTAL_QUESTIONS: number = 10;

const initialState = {
	category: 9,
	difficulty: Difficulty.EASY,
};

function App() {
	const [quizType, setQuizType] = useState<QuizType>(initialState);
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState<QuestionState[]>([]);
	const [questionNumber, setQuestionNumber] = useState(0);
	const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);
	const [showResult, setShowResult] = useState(false);

	const fetchQuestions = async () => {
		setLoading(true);
		setGameOver(false);

		const newQuestions = await fetchQuizQuesions(TOTAL_QUESTIONS, quizType);

		setQuestions(newQuestions);
		setScore(0);
		setUserAnswers([]);
		setQuestionNumber(0);
		setLoading(false);
	};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
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
		if (questionNumber === TOTAL_QUESTIONS - 1) {
			setShowResult(true);
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

	const handleRestart = () => {
		setGameOver(true);
		setShowResult(false);
		setQuizType(initialState);
	};

	return (
		<>
			<GlobalStyle />

			<div className="app">
				<div className="phone-container">
					<div className="quiz-content">
						{(gameOver || userAnswers.length === TOTAL_QUESTIONS) &&
						!showResult ? (
							<>
								<QuizTypeSelection
									quizType={quizType}
									setQuizType={setQuizType}
								/>
								<button
									className="btn start-btn mt-4"
									onClick={fetchQuestions}
								>
									START
								</button>
							</>
						) : null}
						{loading && <div>...Loading Questions</div>}

						{!loading && !gameOver && (
							<QuestionCard
								questionNumber={questionNumber + 1}
								totalQuestions={TOTAL_QUESTIONS}
								question={questions[questionNumber]?.question}
								answers={questions[questionNumber]?.answers}
								userAnswer={
									userAnswers
										? userAnswers[questionNumber]
										: undefined
								}
								callback={checkAnswer}
							/>
						)}

						{!gameOver &&
							!loading &&
							userAnswers.length === questionNumber + 1 &&
							questionNumber !== TOTAL_QUESTIONS - 1 && (
								<button
									className="btn next-btn"
									onClick={nextQuestions}
								>
									NEXT QUESTION
								</button>
							)}

						{showResult && (
							<div className="result">
								<div className="score">
									YOUR SCORE IS: {score}
								</div>

								<button className="btn" onClick={handleRestart}>
									RESTART
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
