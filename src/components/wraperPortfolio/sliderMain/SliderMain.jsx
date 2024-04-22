/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import ViewObject from '../../ui/popup/viewObject/ViewObject'
import { mockData } from '../mocData'
import styles from './SliderMain.module.scss'

const SliderMain = ({ objectID, portfolioPage }) => {
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
	return (
		<div className={styles.sliderContainer}>
			<div className={styles.mainItemBlockSlider}>
				<img
					height={imageHeight}
					key={photos[0]}
					src={photos[0]}
					alt={`Slide ${0}`}
				/>
				{isModalOpen && <ViewObject objectID={objectID} onClose={closeModal} />}
			</div>
			<div onClick={openModal} className={styles.browseIcon}></div>
		</div>
	)
}

export default SliderMain
