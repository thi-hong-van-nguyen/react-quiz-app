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
}) => (
	<div>
		<div className="question-number">
			Question: {questionNumber}/ {totalQuestions}
		</div>

		<div dangerouslySetInnerHTML={{ __html: question }} />

		<div>
			{answers?.map((ans) => (
				<div key={ans}>
					<button
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

export default QuestionCard;
