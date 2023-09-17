import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../../store/counterSlice";
import styles from "./styles.module.css";
import clsx from "clsx";

function CounterFeature(props) {
	/* Lấy state từ redux*/

	const counter = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	const handleIncrease = () => {
		const action = increase();
		dispatch(action);
	};
	const handleDecrease = () => {
		const action = decrease();
		dispatch(action);
	};

	/* Lấy state từ redux*/

	/* Sử dụng clsx để thay đổi className*/

	const [hidden, setHidden] = useState(false);

	const handleClick = () => {
		setHidden(!hidden);
	};

	/* Sử dụng clsx để thay đổi className*/

	return (
		<>
			<div>
				<p>Sử dụng redux</p>
				<p> Couter: {counter}</p>
				<div>
					<button className={styles.button} onClick={handleIncrease}>
						Increase
					</button>
				</div>
				<div>
					<button className={styles.button} onClick={handleDecrease}>
						Decrease
					</button>
				</div>
			</div>
			<hr />
			<div>
				<p>Sử dụng clsx để thay đổi className</p>
				<p className={clsx({ [styles.hidden]: hidden })}>Xin chào!</p>
				<button onClick={handleClick}>Click me</button>
			</div>
		</>
	);
}

export default CounterFeature;
