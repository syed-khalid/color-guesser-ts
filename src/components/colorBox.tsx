import React from "react";

type Props = {
	color: string;
};

const ColorBox = ({ color }: Props) => {
	return <div className='colorBox' style={{ background: color }}></div>;
};

export default ColorBox;
