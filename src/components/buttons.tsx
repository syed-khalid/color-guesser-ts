import React, { Dispatch, MouseEvent, SetStateAction, useState } from "react";

type Props = {
	answers: string[];
	color: string;
	setCorrectAnswer: Dispatch<SetStateAction<boolean>>;
};

const Buttons = ({ answers, color, setCorrectAnswer }: Props) => {
	function onClickHandler(answer: string) {
		if (answer === color) {
			setCorrectAnswer(true);
		}
	}

	return (
		<div className='buttons-container'>
			{answers.map((answer) => (
				<button key={answer} onClick={() => onClickHandler(answer)}>
					{answer}
				</button>
			))}
		</div>
	);
};

export default Buttons;
