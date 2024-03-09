import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	roomArea: { value: 45, costPerUnit: 100 },
	buildingType: { value: '', costPerUnit: 20 },
	numberOfRooms: { value: 0, costPerUnit: 20 },
	numberOfBathrooms: { value: 0, costPerUnit: 20 },
	renovationType: { value: '', costPerUnit: 20 },
	roomOptions: [
		{ name: 'Выровнять полы', costPerSquareMeter: 10, checked: false },
		{ name: 'Выровнять стены', costPerSquareMeter: 15, checked: false },
		{ name: 'Сантехнические работы', costPerSquareMeter: 20, checked: false },
		{ name: 'Электромонтажные работы', costPerSquareMeter: 25, checked: false }
	],
	totalCost: 0
}

const calculatorSlice = createSlice({
	name: 'calculator',
	initialState,
	reducers: {
		setRoomArea: (state, action) => {
			state.roomArea = action.payload
			state.totalCost = calculateTotalCost(state, action)
		},
		setBuildingType: (state, action) => {
			console.log('item', state, action)
			state.buildingType = action.payload
			state.totalCost = calculateTotalCost(state, action)
		},
		setNumberOfRooms: (state, action) => {
			state.numberOfRooms = action.payload
			state.totalCost = calculateTotalCost(state, action)
		},
		setNumberOfBathrooms: (state, action) => {
			state.numberOfBathrooms = action.payload
			state.totalCost = calculateTotalCost(state, action)
		},
		toggleRoomOption: (state, action) => {
			const { index } = action.payload
			state.roomOptions[index].checked = !state.roomOptions[index].checked
			state.totalCost = calculateTotalCost(state, action)
		}
	}
})

const calculateTotalCost = (state, action) => {
	console.log(state.buildingType.costPerUnit)
	const roomAreaCost = state.roomArea.value * state.roomArea.costPerUnit
	const buildingTypeCost = action.payload ? roomAreaCost * 1.5 : 0
	const numberOfRoomsCost =
		state.numberOfRooms.value * state.numberOfRooms.costPerUnit
	const numberOfBathroomsCost =
		state.numberOfBathrooms.value * state.numberOfBathrooms.costPerUnit
	const roomOptionsCost = state.roomOptions.reduce((acc, option) => {
		if (option.checked) {
			acc += option.costPerSquareMeter * state.roomArea.value
		}
		return acc
	}, 0)
	return (
		roomAreaCost +
		buildingTypeCost +
		numberOfRoomsCost +
		numberOfBathroomsCost +
		roomOptionsCost
	)
}

export const {
	setRoomArea,
	setBuildingType,
	setNumberOfRooms,
	setNumberOfBathrooms,
	toggleRoomOption
} = calculatorSlice.actions

export default calculatorSlice.reducer
