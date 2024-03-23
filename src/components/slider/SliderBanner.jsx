/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import styles from './SliderBanner.module.scss'

const SliderBanner = ({ slides }) => {
	const [currentSlide, setCurrentSlide] = useState(0)

	useEffect(() => {
		const timerID = setInterval(() => {
			setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)
		}, 10000)

		return () => clearInterval(timerID)
	}, [currentSlide, slides.length])

	const changeSlide = index => {
		setCurrentSlide(index)
	}

	return (
		<div className={styles.sliderContainer}>
			<div className={styles.infoSlider}>
				{slides.map((slide, index) => (
					<LazyLoadImage
						effect='blur'
						key={index}
						src={slide}
						alt={`Slide ${index}`}
						className={index === currentSlide ? styles.active : ''}
					/>
				))}
			</div>
			<div className={styles.indicators}>
				{slides.map((slide, index) => (
					<div
						key={index}
						className={`${styles.indicator} ${
							index === currentSlide ? styles.active : ''
						}`}
						onClick={() => changeSlide(index)}
					/>
				))}
			</div>
		</div>
	)
}

export default SliderBanner
