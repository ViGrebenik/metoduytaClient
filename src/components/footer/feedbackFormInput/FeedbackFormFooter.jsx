import styles from './FeedbackFormFooter.module.scss'

const FeedbackFormFooter = () => {
	return (
		<div className={styles.feedbackBlockForm}>
			<div className={styles.feedbackFormInput}>
				<input type='text' placeholder='Введите текст...' />
			</div>
			<div className={styles.feedbackFormInput}>
				<input type='text' placeholder='Введите текст...' />
			</div>
			<div className={styles.feedbackFormInput}>
				<input type='text' placeholder='Введите текст...' />
			</div>
			<div className={styles.feedbackFormInput}>
				<input type='text' placeholder='Введите текст...' />
			</div>
			<div className={styles.feedbackBlockFormButton}>
				<div className={styles.feedbackButton}>Загрузить файл</div>
				<div className={styles.feedbackButton}>Отправить</div>
			</div>
		</div>
	)
}

export default FeedbackFormFooter
