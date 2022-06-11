import React from "react";

import { AnswerObject } from "../App";

type Props = {
	question: string;
	answers: string[];
	callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
	userAnswer: AnswerObject | undefined;
	questionNumber: number;
	totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
	question,
	answers,
	callback,
	userAnswer,
	questionNumber,
	totalQuestions,
}) => {
	return (
		<div className="question-card">
			<div className="question-number">
				Question: {questionNumber}/ {totalQuestions}
			</div>

			<div
				dangerouslySetInnerHTML={{ __html: question }}
				className="fw-bold mb-4"
			/>

			<div>
				{answers?.map((ans) => (
					<div key={ans}>
						<button
							className={`answer ${
								userAnswer && ans === userAnswer?.correctAnswer
									? " correct"
									: ""
							} ${
								userAnswer &&
								userAnswer?.answer !==
									userAnswer?.correctAnswer &&
								ans === userAnswer?.answer
									? " wrong"
									: ""
							}`}
							disabled={!!userAnswer}
							value={ans}
							onClick={callback}
						>
							<span dangerouslySetInnerHTML={{ __html: ans }} />
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default QuestionCard;
