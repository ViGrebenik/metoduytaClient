import ItemAdvantage from '../../ui/itemAdvantage/ItemAdvantage'
import styles from './WrapperAdvantage.module.scss'
import { advantages } from './dataAdvantage'

const WrapperAdvantage = () => {
	return (
		<div className={styles.wrapperAdvantage}>
			<div className={styles.container}>
				<div className={styles.containerBlock}>
					<div className={styles.containerHeader}>
						<div className={styles.containerContentHeader}>
							<div className={styles.contentHeaderTitle}>Наши преимущества</div>
							<div className={styles.contentHeaderSubtitle}>
								Вы можете доверить нам любое помещение и проект любой сложности.
							</div>
						</div>
					</div>

					<div className={styles.containerWrapper}>
						{advantages.map((service, index) => (
							<ItemAdvantage item={service} key={index} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default WrapperAdvantage
