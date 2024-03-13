/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react'

const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	// const [isDarkTheme, setIsDarkTheme] = useState(false)

	const openModal = () => setIsModalOpen(true)
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
				isOpen
				// toggleTheme,
				// isDarkTheme
			}}
		>
			{children}
		</ModalContext.Provider>
	)
}

// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => useContext(ModalContext)
