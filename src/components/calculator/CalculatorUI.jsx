import { useDispatch, useSelector } from 'react-redux'
import FeedbackForm from '../ui/formFeedback/FormFeedback'
import styles from './CalculatorUI.module.scss'
import {
	setBuildingType,
	setNumberOfBathrooms,
	setNumberOfRooms,
	setRoomArea
} from './state/useCalculatorStore'
import YourComponent from './yourComponent/YourComponent'
import { selectTotalCost } from './state/totalCost'

const CalculatorUI = () => {
	const dispatch = useDispatch()

	const roomArea = useSelector(state => state.calculator.roomArea)
	const buildingType = useSelector(state => state.calculator.buildingType)
	const numberOfRooms = useSelector(state => state.calculator.numberOfRooms)
	const numberOfBathrooms = useSelector(
		state => state.calculator.numberOfBathrooms
	)
	const totalCost = useSelector(selectTotalCost)
	console.log('totalCost', totalCost)

	const handleRoomAreaChange = newArea => {
		dispatch(setRoomArea({ ...roomArea, value: Number(newArea) }))
	}

	const handleBuildingTypeChange = type => {
		dispatch(setBuildingType(type))
	}

	const RoomsPlus = type => {
		if (type === 'Комнаты') {
			dispatch(
				setNumberOfRooms({
					value: numberOfRooms.value + 1,
					costPerUnit: numberOfRooms.costPerUnit
				})
			)
		} else if (type === 'Санузлы') {
			dispatch(
				setNumberOfBathrooms({
					value: numberOfBathrooms.value + 1,
					costPerUnit: numberOfBathrooms.costPerUnit
				})
			)
		}
	}

	const RoomsMinus = type => {
		if (type === 'Комнаты') {
			dispatch(
				setNumberOfRooms({
					value:
						numberOfRooms.value > 1
							? numberOfRooms.value - 1
							: numberOfRooms.value,
					costPerUnit: numberOfRooms.costPerUnit
				})
			)
		} else if (type === 'Санузлы') {
			dispatch(
				setNumberOfBathrooms({
					value:
						numberOfBathrooms.value > 1
							? numberOfBathrooms.value - 1
							: numberOfBathrooms.value,
					costPerUnit: numberOfBathrooms.costPerUnit
				})
			)
		}
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
							<YourComponent />
						</div>
						<div className={styles.blockTypeServices}>
							<label htmlFor='buildingType'>Тип жилья:</label>
							<div className={styles.typeServices}>
								<div className={styles.checkBoxBlock}>
									<label className={styles.checkBox}>
										<input
											onChange={() => handleBuildingTypeChange('новостройка')}
											checked={buildingType === 'новостройка'}
											type='checkbox'
										/>
										<div className={styles.transition}></div>
									</label>
									<span>НОВОСТРОЙКА</span>
								</div>
								<div className={styles.checkBoxBlock}>
									<label className={styles.checkBox}>
										<input
											type='checkbox'
											onChange={() => handleBuildingTypeChange('ВТОРИЧКА')}
											checked={buildingType === 'ВТОРИЧКА'}
										/>
										<div className={styles.transition}></div>
									</label>
									<span>ВТОРИЧКА</span>
								</div>
							</div>
						</div>
						{/* Блок range */}
						<div className={styles.rangeOfRoomBlock}>
							<label htmlFor='roomArea'>
								Площадь помещения: <span>{roomArea.value}m²</span>
							</label>
							<div className={styles.customRange}>
								<input
									type='range'
									min={0} // Set the minimum value
									max={100} // Set the maximum value
									value={roomArea.value}
									onChange={e => handleRoomAreaChange(e.target.value)}
									className={styles.input}
								/>
								<div
									className={styles.fill}
									style={{ width: `${roomArea.value}%` }}
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
										{numberOfRooms.value}
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
										<span>{numberOfBathrooms.value}</span>
										<button type='button' onClick={() => RoomsPlus('Санузлы')}>
											<img src='/static/plus.svg' alt='plus' />
										</button>
									</div>
								</div>
							</div>
						</div>
						<div>
							<label>Доп. работы</label>
							<div>{/* <CheckboxButtons /> */}</div>
						</div>
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
					<div className={styles.contentHeaderTitleForm}>{totalCost}</div>
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
