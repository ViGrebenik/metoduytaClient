/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react'

const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const [type, setType] = useState(null)

	const openModal = type => {
		setType(type)
		setIsModalOpen(true)
	}
	const closeModal = () => setIsModalOpen(false)

	const toggleMenu = () => {
		setIsOpen(prev => !prev)
	}

	return (
		<ModalContext.Provider
			value={{
				isModalOpen,
				openModal,
				closeModal,
				toggleMenu,
				isOpen,
				setIsOpen,
				type
			}}
		>
			{children}
		</ModalContext.Provider>
	)
}

export const useModal = () => useContext(ModalContext)
