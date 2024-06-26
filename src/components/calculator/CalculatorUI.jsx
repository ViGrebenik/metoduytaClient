/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from 'react'
import FeedbackForm from '../ui/formFeedback/FormFeedback'
import styles from './CalculatorUI.module.scss'
import CheckboxButtons from './checkBoxButton/CheckBoxButton'
import TypeOfRepair from './typeOfRepair/TypeOfRepair'

const CalculatorUI = ({ handleSubmit }) => {
	// тип помещения
	const [typeOfRepair, setTypeOfRepair] = useState(1)
	// Площадь помещения
	const [roomArea, setRoomArea] = useState(40)
	const handleRoomAreaChange = event => {
		setRoomArea(event.target.value)
	}
	// тип жилья
	const [buildingType, setBuildingType] = useState('')

	const handleBuildingTypeChange = type => {
		if (buildingType === type) {
			setBuildingType('')
		} else {
			setBuildingType(type)
		}
	}

	// колличество комнат
	const [numberOfRooms, setNumberOfRooms] = useState(1)
	const [numberOfBathroom, setNumberOfBathroom] = useState(1)

	const RoomsPlus = useCallback(
		type => {
			setNumberOfRooms(prevRooms =>
				type === 'Комнаты' ? prevRooms + 1 : prevRooms
			)
			setNumberOfBathroom(prevBathroom =>
				type === 'Санузлы' ? prevBathroom + 1 : prevBathroom
			)
		},
		[setNumberOfRooms, setNumberOfBathroom]
	)

	const RoomsMinus = useCallback(
		type => {
			if (type === 'Комнаты' && numberOfRooms > 1) {
				setNumberOfRooms(prevRooms => prevRooms - 1)
			} else if (type === 'Санузлы' && numberOfBathroom > 1) {
				setNumberOfBathroom(prevBathroom => prevBathroom - 1)
			}
		},
		[numberOfRooms, numberOfBathroom, setNumberOfRooms, setNumberOfBathroom]
	)

	// Доп услуги
	const [buttonsState, setButtonsState] = useState([
		{ name: 'Выровнять полы', checked: false, coefficient: 1.1 },
		{ name: 'Выровнять стены', checked: false, coefficient: 1.1 },
		{ name: 'Сантехнические работы', checked: false, coefficient: 1.1 },
		{ name: 'Электромонтажные работы', checked: false, coefficient: 1.1 }
	])

	const [result, setResult] = useState(0)

	useEffect(() => {
		const keFbuildingType = buildingType == 'СТАРЫЙ ФОНД' ? 1.3 : 1.1
		const keFroomArea = Number(roomArea) * 7000
		const kefButtonsState = buttonsState
			.filter(button => button.checked)
			.map(button => button.coefficient)
			.reduce((accumulator, currentValue) => accumulator * currentValue, 1)
		setResult(
			Math.round(
				keFroomArea * keFbuildingType * typeOfRepair * kefButtonsState +
					(numberOfRooms * 30000 + numberOfBathroom * 30000)
			)
		)
	}, [
		buildingType,
		buttonsState,
		numberOfBathroom,
		numberOfRooms,
		roomArea,
		typeOfRepair
	])

	return (
		<div className={styles.containerCalculator}>
			<div className={styles.calculatorBlock}>
				<div className={styles.calculatorForm}>
					<form>
						<div className={styles.blockTypeServices}>
							<label htmlFor='buildingType'>Тип ремонта</label>
							<div className={styles.typeServices}>
								<TypeOfRepair setTypeOfRepair={setTypeOfRepair} />
							</div>
						</div>
						<div className={styles.blockTypeServices}>
							<label htmlFor='buildingType'>Тип жилья:</label>
							<div className={styles.typeServices}>
								<div className={styles.checkBoxBlock}>
									<label className={styles.checkBox}>
										<input
											onChange={() => handleBuildingTypeChange('новостройка')}
											type='checkbox'
											checked={buildingType === 'новостройка'}
										/>
										<div className={styles.transition}></div>
									</label>
									<span>НОВОСТРОЙКА</span>
								</div>
								<div className={styles.checkBoxBlock}>
									<label className={styles.checkBox}>
										<input
											onChange={() => handleBuildingTypeChange('СТАРЫЙ ФОНД')}
											type='checkbox'
											checked={buildingType === 'СТАРЫЙ ФОНД'}
										/>
										<div className={styles.transition}></div>
									</label>
									<span>СТАРЫЙ ФОНД</span>
								</div>
							</div>
						</div>
						{/* Блок range */}
						<div className={styles.rangeOfRoomBlock}>
							<label htmlFor='roomArea'>
								Площадь помещения: <span>{roomArea}m²</span>
							</label>
							<div className={styles.customRange}>
								<input
									type='range'
									min={0} // Set the minimum value
									max={100} // Set the maximum value
									value={roomArea}
									onChange={handleRoomAreaChange}
									className={styles.input}
								/>
								<div
									className={styles.fill}
									style={{ width: `${roomArea}%` }}
								></div>
							</div>
						</div>
						{/* Блок комнаты */}
						<div className={styles.numberOfRoomsBlock}>
							<div className={styles.containerNumberOfRooms}>
								<div className={styles.numberOfRoomsItem}>
									<label>Комнаты</label>
									<div className={styles.roomsItemButton}>
										<button type='button' onClick={() => RoomsMinus('Комнаты')}>
											<img src='/static/minus.svg' alt='plus' />
										</button>
										<span>{numberOfRooms}</span>
										<button type='button' onClick={() => RoomsPlus('Комнаты')}>
											<img
												src='/static/plus.svg'
												alt='plus'
												className={styles.plusSvg}
											/>
										</button>
									</div>
								</div>
								<div className={styles.numberOfRoomsItem}>
									<label>Санузлы</label>
									<div className={styles.roomsItemButton}>
										<button type='button' onClick={() => RoomsMinus('Санузлы')}>
											<img src='/static/minus.svg' alt='plus' />
										</button>
										<span>{numberOfBathroom}</span>
										<button type='button' onClick={() => RoomsPlus('Санузлы')}>
											<img src='/static/plus.svg' alt='plus' />
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className={styles.dopRadots}>
							<label>Доп. работы</label>
							<div>
								<CheckboxButtons
									buttonsState={buttonsState}
									setButtonsState={setButtonsState}
								/>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div className={styles.calculatorActionFormBlock}>
				<div className={styles.co}>
					<div className={styles.containerHeaderForm}>
						<div className={styles.contentHeaderTitleForm}>
							Предварительный расчет
						</div>
						<div className={styles.contentHeaderTitleForm}>
							<span>{result} руб.</span>
						</div>
						<div className={styles.contentHeaderSubtitleForm}>
							Сумма сметы является примерной. Для получения более точной
							информации оставьте заявку на замер и расчет сметы.
						</div>
					</div>
				</div>
				<FeedbackForm
					questionForm={false}
					result={result}
					handleSubmit={handleSubmit}
				/>
			</div>
		</div>
	)
}

export default CalculatorUI
