import { configureStore } from '@reduxjs/toolkit'
import calculatorReducer from './useCalculatorStore' // Укажите правильный путь до вашего слайса

const store = configureStore({
	reducer: {
		calculator: calculatorReducer
		// Другие слайсы, если они есть
	}
})

export default store
