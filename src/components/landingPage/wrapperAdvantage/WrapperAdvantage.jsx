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
							<div className={styles.containerItem} key={index}>
								<div className={styles.itemBlock}>
									<img src={service.iconImg} alt='icon' />
									<div className={styles.ItemTitle}>{service.title}</div>
								</div>
								<div className={styles.BlockSubtitle}>{service.subTitle}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default WrapperAdvantage
