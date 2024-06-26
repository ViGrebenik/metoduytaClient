import FAQ from './FAQ'
import { faqData } from './FAQData'
import styles from './WrapperFAQ.module.scss'

const WrapperFAQ = () => {
	return (
		<div className={styles.WrapperFAQ}>
			<div className={styles.container}>
				<div className={styles.containerBlock}>
					<div className={styles.containerHeader}>
						<div className={styles.containerContentHeader}>
							<div className={styles.contentHeaderTitle}>
								Часто задаваемые вопросы
							</div>
						</div>
						<div className={styles.contentHeaderSubtitle}>
							Если же у вас еще остались сомнения, то мы подготовили ответы на
							самые популярные вопросы:
						</div>
					</div>
					<FAQ faqData={faqData} />
				</div>
			</div>
		</div>
	)
}

export default WrapperFAQ
