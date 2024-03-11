/* eslint-disable react/prop-types */
import { useState } from 'react'
import ViewObject from '../../ui/popup/viewObject/ViewObject'
import styles from './SliderMain.module.scss'

const SliderMain = ({ arrow = true }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}
	const [currentSlide, setCurrentSlide] = useState(0)
	const slides = [
		'/static/archive/item01.jpg',
		'/static/archive/item02.jpg',
		'/static/archive/item03.jpg'
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
				<img src={slides[currentSlide]} alt={`Slide ${currentSlide}`} />
				{isModalOpen && <ViewObject onClose={closeModal} />}
			</div>
			<div onClick={openModal} className={styles.browseIcon}></div>
			{arrow && (
				<>
					<button className={styles.arrowSlider} onClick={prevSlide}>
						<img src='/public/static/slider/arrowSliderLeft.svg' alt='arrow' />
					</button>
					<button className={styles.arrowSlider} onClick={nextSlide}>
						<img src='/public/static/slider/arrowSliderRight.svg' alt='arrow' />
					</button>
				</>
			)}
		</div>
	)
}

export default SliderMain
