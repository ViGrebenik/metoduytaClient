import FAQ from './FAQ'
import styles from './WrapperFAQ.module.scss'
import { faqData } from './FAQData'

const WrapperFAQ = () => {
	return (
		<div className={styles.WrapperFAQ}>
			<div className={styles.container}>
				<div className={styles.containerBlock}>
					<div className={styles.containerHeader}>
						<div className={styles.containerContentHeader}>
							<div className={styles.contentHeaderTitle}>
								Часто зававемые вопросы
							</div>
						</div>
					</div>
					<FAQ faqData={faqData} />
				</div>
			</div>
		</div>
	)
}

export default WrapperFAQ
