import { useCallback, useState } from 'react'
import FeedbackForm from '../ui/formFeedback/FormFeedback'
import styles from './CalculatorUI.module.scss'
import CheckboxButtons from './checkBoxButton/CheckBoxButton'

const CalculatorUI = () => {
	const [roomArea, setRoomArea] = useState(0)

	// тип жилья
	const [buildingType, setBuildingType] = useState('')
	const handleBuildingTypeChange = type => {
		if (buildingType === type) {
			setBuildingType('')
		} else {
			setBuildingType(type)
		}
	}

	const handleRoomAreaChange = event => {
		setRoomArea(event.target.value)
	}

	// колличество комнат
	const [numberOfRooms, setNumberOfRooms] = useState(0)
	const [numberOfBathroom, setNumberOfBathroom] = useState(0)

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

	const calculateCost = () => {
		// Calculate the renovation cost based on the form data
	}

	return (
		<div className={styles.containerCalculator}>
			<div className={styles.calculatorBlock}>
				<div className={styles.containerHeader}>
					<div className={styles.contentHeaderTitle}>
						Калькулятор расчета ремонта
					</div>
					<div className={styles.contentHeaderSubtitle}>
						Воспользуйтесь онлайн калькулятором / или более продающий текст
					</div>
				</div>
				<div className={styles.calculatorForm}>
					<form>
						<div className={styles.blockTypeServices}>
							<label htmlFor='buildingType'>Тип ремонта</label>
							<div className={styles.typeServices}>
								<button type='button'>ДИЗАЙНЕРСКИЙ</button>
								<button type='button'>КОСМЕТИЧЕСКИЙ</button>
								<button type='button'>КАПИТАЛЬНЫЙ</button>
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
											onChange={() => handleBuildingTypeChange('ВТОРИЧКА')}
											type='checkbox'
											checked={buildingType === 'ВТОРИЧКА'}
										/>
										<div className={styles.transition}></div>
									</label>
									<span>ВТОРИЧКА</span>
								</div>
							</div>
						</div>
						{/* Блок range */}
						<div>
							<label htmlFor='roomArea'>Площадь помещения</label>
							<input
								type='range'
								id='roomArea'
								min='0'
								max='100'
								value={roomArea}
								onChange={handleRoomAreaChange}
							/>
							<span>{roomArea} m2</span>
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
											<img src='/static/plus.svg' alt='plus' />
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
						<div>
							<label>Доп. работы</label>
							<div>
								<CheckboxButtons />
							</div>
						</div>
						{/* <button type='button' onClick={calculateCost}>
							Calculate cost
						</button> */}
					</form>
				</div>
			</div>
			<div className={styles.calculatorActionFormBlock}>
				<div className={styles.containerHeaderForm}>
					<div className={styles.contentHeaderTitleForm}>
						Предварительный расчет
					</div>
				</div>
				<div className={styles.containerHeaderForm}>
					<div className={styles.contentHeaderTitleForm}>450 058 руб.</div>
				</div>
				<div className={styles.containerHeaderForm}>
					<div className={styles.contentHeaderSubtitleForm}>
						Сумма сметы является примерной. Для получения более точной
						информации оставьте заявку на замер и расчет сметы.
					</div>
				</div>
				<FeedbackForm />
			</div>
		</div>
	)
}

export default CalculatorUI
