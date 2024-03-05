import { useState } from 'react'
import styles from './SliderMain.module.scss'
import ViewObject from '../../ui/popup/viewObject/ViewObject'

const SliderMain = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}
	const [currentSlide, setCurrentSlide] = useState(0)
	const slides = [
		'../../../public/archive/item01.jpg',
		'../../../public/archive/item02.jpg',
		'../../../public/archive/item03.jpg'
	]
	const nextSlide = () => {
		setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)
	}

	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)
	}

	return (
		<div className={styles.sliderContainer}>
			<div className={styles.mainItemBlockSlider}>
				<img
					onClick={openModal}
					src={slides[currentSlide]}
					alt={`Slide ${currentSlide}`}
				/>
				{isModalOpen && <ViewObject onClose={closeModal} />}
			</div>
			<button onClick={prevSlide}>Previous</button>
			<button onClick={nextSlide}>Next</button>
		</div>
	)
}

export default SliderMain
