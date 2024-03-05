import { useEffect, useState } from 'react'
import styles from './WrapperStagesWork.module.scss'

const stages = [
	{
		number: 'ОБРАЩЕНИЕ',
		title: 'Этап 01',
		description:
			'Записаться можно по номеру телефонa или через форму обратной связи на сайте.'
	},
	{
		number: 'ЗАМЕР',
		title: 'Этап 02',
		description: 'Рассчитаем площадь, объем материалов, стоимость работ.'
	},
	{
		number: 'ДОГОВОР',
		title: 'Этап 03',
		description: 'Установим сроки, заключим договор'
	},
	{ number: '04', title: 'Этап 04', description: 'Описание 04' },
	{ number: '05', title: 'Этап 05', description: 'Описание 05' }
]

const WrapperStagesWork = () => {
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
								<div className={styles.line}></div>
								<div
									className={
										stage === hoveredCircle ? styles.circleShow : styles.circle
									}
									onMouseEnter={() => handleHover(stage)}
									onMouseLeave={handleMouseLeave}
								>
									<p>{stage.number}</p>
								</div>
								<div className={styles.line}></div>
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
							>
								{/* {hoveredText.title} */}
							</div>
						</div>
						<div className={styles.WrapperDescriptionButton}>
							Получить консультацию
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WrapperStagesWork
