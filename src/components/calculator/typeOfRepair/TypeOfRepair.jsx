/* eslint-disable react/prop-types */
import { useState } from 'react'
import styles from './TypeOfRepair.module.scss'

const TypeOfRepair = ({ setTypeOfRepair }) => {
	const [selectedTypeIndex, setSelectedTypeIndex] = useState(null)

	const typeOfRepair = [
		{ name: 'Косметический', coefficient: 1.5 },
		{ name: 'Капитальный', coefficient: 1.3 },
		{ name: 'Дизайнерский', coefficient: 1.4 }
	]

	const handleTypeClick = index => {
		setSelectedTypeIndex(index)
		setTypeOfRepair(typeOfRepair[index].coefficient)
	}

	return (
		<div className={styles.typeServices}>
			{typeOfRepair.map(({ name }, index) => (
				<button
					key={index}
					type='button'
					onClick={() => handleTypeClick(index)}
					className={selectedTypeIndex === index ? styles.selected : ''}
				>
					{name}
				</button>
			))}
		</div>
	)
}

export default TypeOfRepair
