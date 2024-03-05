import { useState } from 'react'
import ViewObject from './ViewObject'

const ViewObjectButton = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	return (
		<div>
			<button onClick={openModal}></button>
			{isModalOpen && <ViewObject onClose={closeModal} />}
		</div>
	)
}

export default ViewObjectButton
