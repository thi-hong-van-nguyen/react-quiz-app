import { shuffleArray } from "./utils";
import axios from "axios";
import { QuizType } from "./App";

export type Question = {
	category: string;
	correct_answer: string;
	difficulty: string;
	incorrect_answers: string[];
	question: string;
	type: string;
};

export type QuestionState = Question & { answers: string[] };

type GetResponse = {
	results: Question[];
	response_code: number;
};

export enum Difficulty {
	EASY = "easy",
	MEDIUM = "medium",
	HARD = "hard",
}

export const fetchQuizQuesions = async (amount: number, quizType: QuizType) => {
	const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=${quizType.category}&difficulty=${quizType.difficulty}&type=multiple`;
	const { data } = await axios.get<GetResponse>(endpoint);

	return data.results.map((question: Question) => ({
		...question,
		answers: shuffleArray([
			...question.incorrect_answers,
			question.correct_answer,
		]),
	}));
};
