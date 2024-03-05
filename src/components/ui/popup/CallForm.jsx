import { useState } from 'react'
import CallRequestForm from './CallRequestForm'
const CallForm = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const openModal = () => {
		console.log()
		setIsModalOpen(true)
	}
	const closeModal = () => {
		setIsModalOpen(false)
	}
	return (
		<>
			<div onClick={() => openModal()}></div>
			{isModalOpen && <CallRequestForm onClose={closeModal} />}
		</>
	)
}

export default CallForm
