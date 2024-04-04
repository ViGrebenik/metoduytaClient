import { useLocation } from 'react-router-dom'
import { useModal } from '../../../../assets/services/ModalContext'
import Breadcrumbs from '../../../ui/breadCrumbs/BreadCrumbs'
import Advantage from '../../../ui/itemAdvantage/advantage/Advantage'
import styles from './AboutUsPage.module.scss'
import { advantages, dataText } from './DataText'

const AboutUsPage = () => {
	const location = useLocation()
	const currentPath = location.pathname
	const { openModal } = useModal()
	const type = 'calculator'
	return (
		<div className={styles.wrapperDesigner}>
			<div className={styles.container}>
				<div className={styles.containerBlock}>
					<div className={styles.containerBreadCrumbs}>
						<Breadcrumbs
							breadcrumbs={[
								{ name: 'Главная', url: '/' },
								{ name: 'О компании', url: currentPath }
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
								<span>{dataText.itemLeft[0]}</span>
								<span>{dataText.itemLeft[1]}</span>
								<span>{dataText.itemLeft[2]}</span>
							</div>
						</div>
						<div className={styles.companyDescriptionBlock}>
							<div className={styles.blockQualities}>
								{advantages.map((advantage, index) => (
									<Advantage advantage={advantage} key={index} />
								))}
							</div>
							<div className={styles.blockAction}>
								<div className={styles.headerText}>
									Выезд замерщика и составление <br />
									сметы
									<span> БЕСПЛАТНО</span>
								</div>
								<div className={styles.buttonAction}>
									<button onClick={() => openModal(type)}>
										РАСЧИТАТЬ СМЕТУ
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutUsPage
