/* eslint-disable react/prop-types */
import Breadcrumbs from '../../../ui/breadCrumbs/BreadCrumbs'
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
					<div className={styles.containerActions}>
						<div className={styles.actionItem}>
							<div className={styles.actionItemTitle}>
								Оставьте заявку на замер и расчет сметы
							</div>
							<div className={styles.actionItemSubtitle}>
								К вам приедет компетентный специалист. Он грамотно снимет замеры
								и проконсультирует по отделке помещений. На следующий день
								направим подробную смету со всеми расчетами.
							</div>
							<div className={styles.containerButton}>
								<button>ВЫЗВАТЬ ЗАМЕРЩИКА</button>
							</div>
						</div>
						<div className={styles.actionItem}>
							<img src='/public/paper.svg' alt='paper' />
							<div className={styles.actionItemTitle}>
								Уже делали расчет в других компаниях?
							</div>
							<div className={styles.actionItemSubtitle}>
								Отправьте нам файл со сметой, и мы сделаем расчет по нашему
								прайсу. А также проведем аудит на ошибки и скрытые работы.
							</div>
							<div className={styles.containerButtonItem}>
								<button>ОТПРАВИТЬ СВОЮ СМЕТУ</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PaymentPage
