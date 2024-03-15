/* eslint-disable react/prop-types */
import Breadcrumbs from '../../../ui/breadCrumbs/BreadCrumbs'
import FeedbackEstimate from '../../../wrappers/feedbackEstimate/FeedbackEstimate.jsx'
import { advantages, dataText, services } from './DataText.js'
import styles from './PaymentPage.module.scss'

const PaymentPage = () => {
	return (
		<div className={styles.wrapperDesigner}>
			<div className={styles.container}>
				<div className={styles.containerBlock}>
					<div className={styles.containerBreadCrumbs}>
						<Breadcrumbs
							breadcrumbs={[
								{ name: 'Главная', url: '/' },
								{ name: 'Категория', url: '/category' },
								{ name: 'Страница', url: '/page' }
							]}
						/>
					</div>
					<div className={styles.containerHeader}>
						<div className={styles.contentHeaderTitle}>
							Cколько стоит ремонт квартиры
						</div>
					</div>
					<div className={styles.containerDescription}>
						<div className={styles.descriptionItem}>{dataText.textO1}</div>
						<div className={styles.descriptionItem}>{dataText.textO1}</div>
					</div>
					<div className={styles.containerPricesServices}>
						{services.map((service, index) => (
							<div className={styles.pricesServices} key={index}>
								<div className={styles.servicesTitle}>{service.title}</div>
								<div className={styles.servicesSubtitle}>
									{service.price} руб.
								</div>
							</div>
						))}
					</div>
					<div className={styles.containerAdvantages}>
						{advantages.map((service, index) => (
							<div className={styles.advantagesBlock} key={index}>
								<img src={service.iconImg} alt='icon' />
								<div className={styles.advantagesBlockTitle}>
									{service.title}
								</div>
								<div className={styles.advantagesBlockSubtitle}>
									{service.subTitle}
								</div>
							</div>
						))}
					</div>
					<FeedbackEstimate />
				</div>
			</div>
		</div>
	)
}

export default PaymentPage
