import React, { useEffect, useState } from "react";
import "./App.css";

//Component Imports
import ColorBox from "./components/colorBox";
import Buttons from "./components/buttons";

function App() {
	const [color, setColor] = useState("red");
	const [answers, setAnswers] = useState<string[]>([]);
	const [isCorrectAnswer, setCorrectAnswer] = useState(false);

	function getRandomColor() {
		return (
			"#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")
		);
	}

	useEffect(() => {
		//Todo: Generate Random color
		const actualColor = getRandomColor();
		setColor(actualColor);
		setAnswers(
			[actualColor, getRandomColor(), getRandomColor()].sort(() => {
				return Math.random() - 0.5;
			})
		);
		setCorrectAnswer(false);
	}, [isCorrectAnswer]);

	return (
		<div className='App'>
			<h1>Color Guesser Game</h1>

			<ColorBox color={color} />

			<Buttons
				answers={answers}
				color={color}
				setCorrectAnswer={setCorrectAnswer}
			/>
		</div>
	);
}

export default App;

