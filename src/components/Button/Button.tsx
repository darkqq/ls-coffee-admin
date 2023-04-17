import React, {FC} from 'react';

type ButtonProps = {
	text: string,
	size: string,
	variant: string
}

const Button: FC<ButtonProps> = ({text, size, variant}) => {
	return (
		<button className={`btn btn-${size} btn-${variant}`}>
			{text}
		</button>
	);
};

export default Button;
