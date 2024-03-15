import styles from './FeedbackEstimate.module.scss'

const FeedbackEstimate = () => {
	return (
		<div className={styles.containerActions}>
			<div className={styles.actionItem}>
				<div className={styles.actionItemTitle}>
					Оставьте заявку на замер и расчет сметы
				</div>
				<div className={styles.actionItemSubtitle}>
					К вам приедет компетентный специалист. Он грамотно снимет замеры и
					проконсультирует по отделке помещений. На следующий день направим
					подробную смету со всеми расчетами.
				</div>
				<div className={styles.containerButton}>
					<button>ВЫЗВАТЬ ЗАМЕРЩИКА</button>
				</div>
			</div>
			<div className={styles.actionItem}>
				<img src='/static/paper.svg' alt='paper' />
				<div className={styles.actionItemTitle}>
					Уже делали расчет в других компаниях?
				</div>
				<div className={styles.actionItemSubtitle}>
					Отправьте нам файл со сметой, и мы сделаем расчет по нашему прайсу. А
					также проведем аудит на ошибки и скрытые работы.
				</div>
				<div className={styles.containerButtonItem}>
					<button>ОТПРАВИТЬ СВОЮ СМЕТУ</button>
				</div>
			</div>
		</div>
	)
}

export default FeedbackEstimate
