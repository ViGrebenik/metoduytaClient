/* eslint-disable react/prop-types */
import { useState } from 'react'
import styled from 'styled-components'
import CallRequestForm from './CallRequestForm'
import styles from './styles.module.scss'

const CallRequestButton = ({ title, arrow = false, bgC = null }) => {
	const CustomButton = styled.div`
		background-color: ${bgC};
		button {
			background-color: ${bgC};
		}
	`
	const [isModalOpen, setIsModalOpen] = useState(false)
	const openModal = () => {
		setIsModalOpen(true)
	}
	const closeModal = () => {
		setIsModalOpen(false)
	}

	return (
		<CustomButton className={styles.containerButton}>
			{arrow && <img src='/public/arrow.svg' alt='arrow' />}
			<button onClick={openModal}>{title}</button>
			{isModalOpen && <CallRequestForm onClose={closeModal} />}
		</CustomButton>
	)
}

export default CallRequestButton
