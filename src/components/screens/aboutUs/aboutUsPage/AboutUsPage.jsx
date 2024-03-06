import Breadcrumbs from '../../../ui/breadCrumbs/BreadCrumbs'
import WrapperReviews from '../../../wrapperReviews/WrapperReviews'
import WrapperServices from '../../../wrapperServices/WrapperServices'
import styles from './AboutUsPage.module.scss'
import { dataQualities, dataText } from './DataText'

const AboutUsPage = () => {
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
							CТРОИТЕЛЬНО-РЕМОНТНАЯ КОМПАНИЯ
						</div>
					</div>
					<div className={styles.containerCompanyDescription}>
						<div className={styles.companyDescriptionBlock}>
							<div className={styles.blockTagline}>
								<span>Метод уюта</span> - гарантия вашего счастья в каждой
								комнате!
							</div>
							<div className={styles.blockDescription}>
								<span>{dataText.itemRight[0]}</span>
								<span>{dataText.itemRight[1]}</span>
								<span>{dataText.itemRight[2]}</span>
								<br />
								<span>{dataText.itemLeft[0]}</span>
								<span>{dataText.itemLeft[1]}</span>
								<span>{dataText.itemLeft[2]}</span>
								<span>{dataText.itemLeft[3]}</span>
							</div>
						</div>
						<div className={styles.companyDescriptionBlock}>
							<div className={styles.blockQualities}>
								{dataQualities.map((item, index) => (
									<div className={styles.qualities} key={index}>
										<img src={item.svg} alt='svg' />
										<div className={styles.qualitiesBlock}>
											<div className={styles.qualitiesTitle}>{item.title}</div>
											<div className={styles.qualitiesSubtitle}>
												{item.subTitle}
											</div>
										</div>
									</div>
								))}
							</div>
							<div className={styles.blockAction}>
								<div className={styles.headerText}>
									Выезд замерщика и составление <br />
									сметы
									<span> БЕСПЛАТНО</span>
								</div>
								<div className={styles.buttonAction}>
									<button>РАСЧИТАТЬ СМЕТУ</button>
								</div>
							</div>
						</div>
					</div>
					<WrapperReviews />
					<WrapperServices />
				</div>
			</div>
		</div>
	)
}

export default AboutUsPage
