import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleRoomOption } from '../state/useCalculatorStore'
import styles from './CheckBoxButton.module.scss'

const CheckboxButtons = () => {
	const dispatch = useDispatch()
	const roomOptions = useSelector(state => state.calculator.roomOptions)

	const handleButtonClick = useCallback(
		index => {
			dispatch(toggleRoomOption({ index }))
		},
		[dispatch]
	)

	return (
		<div className={styles.buttonsBlock}>
			{roomOptions.map((button, index) => (
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
