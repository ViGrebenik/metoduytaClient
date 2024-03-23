/* eslint-disable react/prop-types */
import { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useMediaQuery } from 'react-responsive'
import ViewObject from '../../ui/popup/viewObject/ViewObject'
import { mockData } from '../mocData'
import styles from './SliderMain.module.scss'

const SliderMain = ({ arrow = true, objectID, portfolioPage }) => {
	const isMobile = useMediaQuery({ maxWidth: 726 })
	const imageHeight = isMobile ? 350 : portfolioPage ? 350 : 500

	const [isModalOpen, setIsModalOpen] = useState(false)
	const openModal = () => {
		setIsModalOpen(true)
	}
	const closeModal = () => {
		setIsModalOpen(false)
	}

	const { photos } = mockData.find(item => item.id === +objectID)
	const [currentSlide, setCurrentSlide] = useState(0)
	const nextSlide = () => {
		setCurrentSlide(currentSlide === photos.length - 1 ? 0 : currentSlide + 1)
	}

	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? photos.length - 1 : currentSlide - 1)
	}

	return (
		<div className={styles.sliderContainer}>
			<div className={styles.mainItemBlockSlider}>
				<LazyLoadImage
					height={imageHeight}
					effect='blur'
					key={photos[currentSlide]}
					src={photos[currentSlide]}
					alt={`Slide ${currentSlide}`}
				/>
				{isModalOpen && <ViewObject objectID={objectID} onClose={closeModal} />}
			</div>
			<div onClick={openModal} className={styles.browseIcon}></div>
			{arrow && (
				<>
					<button className={styles.arrowSlider} onClick={prevSlide}>
						<img src='/static/slider/arrowSliderLeft.svg' alt='arrow' />
					</button>
					<button className={styles.arrowSlider} onClick={nextSlide}>
						<img src='/static/slider/arrowSliderRight.svg' alt='arrow' />
					</button>
				</>
			)}
		</div>
	)
}

export default SliderMain
