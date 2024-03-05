import styles from './Footer.module.scss'
import FeedbackFormFooter from './feedbackFormInput/FeedbackFormFooter'
const Footer = () => {
	return (
		<div className={styles.wrapperFooter}>
			<div className={styles.container}>
				<div className={styles.containerBlock}>
					<div className={styles.containerFeedback}>
						<div className={styles.feedbackBlockQuestion}>
							<div className={styles.feedbackQuestion}>
								<div className={styles.feedbackQuestionTitle}>
									{' '}
									ОСТАЛИСЬ ВОПРОСЫ
								</div>
								<div className={styles.feedbackQuestionSubtitle}>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								</div>
							</div>
							<div className={styles.feedbackQuestion}>
								<div className={styles.feedbackQuestionTitle}>
									ОСТАЛИСЬ ВОПРОСЫ
								</div>
								<div className={styles.feedbackQuestionSubtitle}>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								</div>
							</div>
							<div className={styles.feedbackQuestion}>
								<div className={styles.feedbackQuestionTitle}>
									ОСТАЛИСЬ ВОПРОСЫ
								</div>
								<div className={styles.feedbackQuestionSubtitle}>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								</div>
							</div>
						</div>
						<FeedbackFormFooter />
					</div>
				</div>
				<div className={styles.containerBasement}>
					<div className={styles.containerBasementBorders}>
						<div className={styles.basementNavigation}>
							<div className={styles.navigationURL}>
								{/* <ul> */}
								<li>УСЛУГИ</li>
								<li>ПРИМЕРЫ РАБОТ</li>
								<li>ОПЛАТА</li>
								<li>КАЛЬКУЛЯТОР</li>
								<li>О НАС</li>
								<li>КОНТАКТЫ</li>
								{/* </ul> */}
							</div>
							<div className={styles.navigationInfoCampania}>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							</div>
							<div className={styles.navigationInfoSocialLink}>
								<div className={styles.socialLink}></div>
								<div className={styles.socialLink}></div>
								<div className={styles.socialLink}></div>
							</div>
						</div>
						<div className={styles.basementInfo}>
							<div className={styles.infoAdress}>Адресс</div>
							<div className={styles.infoContact}>Контакты</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
