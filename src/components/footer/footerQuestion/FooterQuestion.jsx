import FeedbackForm from '../../ui/formFeedback/FormFeedback'
import { question } from './DataText'
import styles from './FooterQuestion.module.scss'

const FooterQuestion = () => {
	const handleSubmit = e => {
		e.preventDefault()
	}
	return (
		<div className={styles.wrapperFooter}>
			<div className={styles.container}>
				<div className={styles.containerBlock}>
					<div className={styles.containerFeedback}>
						<div className={styles.feedbackBlockQuestion}>
							{question.map((item, index) => (
								<div className={styles.feedbackQuestion} key={index}>
									<div className={styles.feedbackQuestionTitle}>
										{item.question}
									</div>
									<div className={styles.feedbackQuestionSubtitle}>
										{item.answer}
									</div>
								</div>
							))}
						</div>
						<div className={styles.feedbackBlockQuestion}>
							<FeedbackForm handleSubmit={handleSubmit} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FooterQuestion
