import { useCallback, useState } from 'react'
import styles from './CheckBoxButton.module.scss'

const CheckboxButtons = () => {
	const [buttonsState, setButtonsState] = useState([
		{ name: 'Выровнять полы', checked: false },
		{ name: 'Выровнять стены', checked: false },
		{ name: 'Сантехнические работы', checked: false },
		{ name: 'Электромонтажные работы', checked: false }
	])

	const handleButtonClick = useCallback(index => {
		setButtonsState(prevState => {
			const newState = [...prevState]
			newState[index] = {
				...newState[index],
				checked: !newState[index].checked
			}
			return newState
		})
	}, [])

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
