import { useState } from 'react'
import styles from './YourComponent.module.scss'

const YourComponent = () => {
	const [typeOfRepair, setTypeOfRepair] = useState([
		{ name: 'Косметический', checked: false },
		{ name: 'Капитальный', checked: false },
		{ name: 'Дизайнерский', checked: false }
	])

	const handleButtonClick = index => {
		setTypeOfRepair(prevState =>
			prevState.map((button, i) => ({
				...button,
				checked: i === index ? !button.checked : false
			}))
		)
	}

	return (
		<div className={styles.blockTypeServices}>
			<label htmlFor='buildingType'>Тип ремонта</label>
			<div className={styles.typeServices}>
				{typeOfRepair.map((button, index) => (
					<button
						key={index}
						type='button'
						onClick={() => handleButtonClick(index)}
						className={button.checked ? styles.selected : ''}
					>
						{button.name}
					</button>
				))}
			</div>
		</div>
	)
}

export default YourComponent
