import { useLocation } from 'react-router-dom'
import CalculatorUI from '../../../calculator/CalculatorUI'
import Breadcrumbs from '../../../ui/breadCrumbs/BreadCrumbs'
import FeedbackEstimate from '../../../wrappers/feedbackEstimate/FeedbackEstimate'
import styles from './CalculatorPage.module.scss'
import { dataText, services } from './DataText'
import { useMediaQuery } from 'react-responsive'

const CalculatorPage = () => {
	const location = useLocation()
	const currentPath = location.pathname
	const isMobile = useMediaQuery({ maxWidth: 767 })
	return (
		<div className={styles.calculatorPage}>
			<div className={styles.container}>
				<div className={styles.containerBlock}>
					<div className={styles.containerBreadCrumbs}>
						<Breadcrumbs
							breadcrumbs={[
								{ name: 'Главная', url: '/' },
								{ name: 'Калькулятор', url: currentPath }
							]}
						/>
					</div>
					<div className={styles.containerHeader}>
						<div className={styles.contentHeaderTitle}>
							Калькулятор расчета ремонта
						</div>
						<div className={styles.contentHeaderSubtitle}>
							Рассчитайте примерную стоимость работ по ремонту вашей квартиры
						</div>
					</div>
					<div className={styles.containerDescription}>
						<div className={styles.descriptionItem}>{dataText.textO1}</div>
						<div className={styles.descriptionItem}>
							Обязательными исходными данными являются:
							<br />
							<br />
							Тип жилья (новостройка или вторичка)
							<br />
							Общая площадь квартиры
							<br />
							Число комнат
							<br />
							Количество санузлов
							<br />
							<br />
							На основании введенных данных сервис произведет расчет стоимости
							всех ремонтных работ в сумме. Результат отобразится сразу же, как
							только эти сведения будут заданы. Если вы рассчитываете ремонт для
							вторичного жилья, смета увеличится на стоимость работ по
							демонтажу.
						</div>
					</div>
					{!isMobile && (
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
					)}
					<div className={styles.containerCalculator}>
						<CalculatorUI />
					</div>
					<FeedbackEstimate />
				</div>
			</div>
		</div>
	)
}

export default CalculatorPage
