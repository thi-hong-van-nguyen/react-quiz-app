import React from "react";
import { QuizType } from "../App";

type Props = {
	quizType: QuizType;
	setQuizType: any;
};

const QuizTypeSelection: React.FC<Props> = ({ quizType, setQuizType }) => {
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setQuizType((prev: any) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<div className="quizTypeSelection">
			<div className="mb-4">
				<label htmlFor="category">Category</label>
				<br />
				<select
					id="category"
					name="category"
					value={quizType.category}
					onChange={handleChange}
				>
					<option value="9">General Knowledge</option>
					<option value="27">Animals</option>
					<option value="10">Entertainment: Books</option>
					<option value="11">Entertainment: Film</option>
					<option value="12">Entertainment: Music</option>
					<option value="14">Entertainment: Television</option>
					<option value="17">Science and Nature</option>
					<option value="18">Science: Computers</option>
					<option value="19">Science: Mathematics</option>
					<option value="21">Sports</option>
					<option value="22">Geography</option>
					<option value="23">History</option>
					<option value="24">Politics</option>
					<option value="25">Art</option>
					<option value="28">Vehicles</option>
					<option value="29">Entertainment: Comics</option>
					<option value="29">
						Entertainment: Japanese and Manga
					</option>
					<option value="31">
						Entertainment: Catoons and Animations
					</option>
				</select>
			</div>

			<div className="mb-4">
				<label htmlFor="difficulty">Difficulty</label>
				<br />
				<select
					value={quizType.difficulty}
					id="difficulty"
					name="difficulty"
					onChange={handleChange}
				>
					<option value="easy">Easy</option>
					<option value="medium">Medium</option>
					<option value="hard">Hard</option>
				</select>
			</div>
		</div>
	);
};

export default QuizTypeSelection;
