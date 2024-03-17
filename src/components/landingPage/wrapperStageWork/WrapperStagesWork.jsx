import { useEffect, useState } from 'react'
import { useModal } from '../../../assets/services/ModalContext'
import styles from './WrapperStagesWork.module.scss'
import { stages } from './dataStageWork'

const WrapperStagesWork = () => {
	const { openModal } = useModal()
	const [hoveredCircle, setHoveredCircle] = useState(stages[0])
	const [hoveredText, setHoveredText] = useState(stages[0])

	const handleHover = circle => {
		setHoveredCircle(circle)
		setHoveredText(circle)
	}

	const handleMouseLeave = () => {
		setHoveredCircle(stages[0])
		setHoveredText(stages[0])
	}

	useEffect(() => {
		setHoveredText(hoveredCircle)
	}, [hoveredCircle])

	return (
		<div className={styles.wrapperStagesWork}>
			<div className={styles.container}>
				<div className={styles.containerBlock}>
					<div className={styles.containerHeader}>
						<div className={styles.containerContentHeader}>
							<div className={styles.contentHeaderTitle}>Процесс работы</div>
						</div>
					</div>
					<div className={styles.containerWrapper}>
						{stages.map((stage, index) => (
							<div className={styles.containerStageWork} key={index}>
								<div
									className={
										stage === hoveredCircle ? styles.circleShow : styles.circle
									}
									onMouseEnter={() => handleHover(stage)}
									onMouseLeave={handleMouseLeave}
								>
									<img src='/public/static/advantage/garantiy.svg' alt='logo' />
									<p>{stage.title}</p>
								</div>
							</div>
						))}
					</div>
					<div className={styles.containerWrapperDescription}>
						<div className={styles.WrapperDescription}>
							<div
								className={`${styles.descriptionTitle} ${
									hoveredText !== 'Этап 01' ? styles.hide : ''
								}`}
							>
								{hoveredText.description}
							</div>
							<div
								className={`${styles.descriptionSubtitle} ${
									hoveredText !== 'Этап 01' ? styles.hide : ''
								}`}
							></div>
						</div>
						<div
							onClick={() => openModal()}
							className={styles.WrapperDescriptionButton}
						>
							<div>Получить консультацию</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WrapperStagesWork
