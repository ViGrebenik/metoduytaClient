import { createSelector } from '@reduxjs/toolkit'

const selectCalculatorState = state => state.calculator

export const selectTotalCost = createSelector(
	[selectCalculatorState],
	calculator => calculator.totalCost
)
