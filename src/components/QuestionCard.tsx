import React from "react";

type Props = {
	question: string;
	answers: string[];
	callback: any;
	userAnswer: any;
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
			{answers.map((ans) => (
				<div>
					<button disabled={userAnswer} onClick={callback}>
						<span dangerouslySetInnerHTML={{ __html: ans }} />
					</button>
				</div>
			))}
		</div>
	</div>
);

export default QuestionCard;
