/* eslint-disable react/prop-types */
import { useCallback } from 'react'
import styles from './CheckBoxButton.module.scss'

const CheckboxButtons = ({ buttonsState, setButtonsState }) => {
	const handleButtonClick = useCallback(
		index => {
			setButtonsState(prevState => {
				const newState = [...prevState]
				newState[index] = {
					...newState[index],
					checked: !newState[index].checked
				}
				return newState
			})
		},
		[setButtonsState]
	)

	return (
		<div className={styles.buttonsBlock}>
			{buttonsState.map((button, index) => (
				<div key={index} className={styles.buttonWrapper}>
					<input
						type='checkbox'
						checked={button.checked}
						onChange={() => handleButtonClick(index)}
					/>
					<button
						type='button'
						className={button.checked ? styles.checked : ''}
						onClick={() => handleButtonClick(index)}
					>
						{button.name}
					</button>
				</div>
			))}
		</div>
	)
}

export default CheckboxButtons
