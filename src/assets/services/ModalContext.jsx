/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from 'react'

const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => setIsModalOpen(true)
	const closeModal = () => setIsModalOpen(false)

	return (
		<ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
			{children}
		</ModalContext.Provider>
	)
}

// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => useContext(ModalContext)
