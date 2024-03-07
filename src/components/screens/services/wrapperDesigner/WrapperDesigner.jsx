import Breadcrumbs from '../../../ui/breadCrumbs/BreadCrumbs'
import WrapperReviews from '../../../wrapperReviews/WrapperReviews'
import WrapperServices from '../../../wrapperServices/WrapperServices'
import styles from './WrapperDesigner.module.scss'
import DesignerItem from './designerItem/DesignerItem'

const WrapperDesigner = () => {
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
							ДИЗАЙН ИНТЕРЬЕРА В САНКТ - ПЕТЕРБУРГЕ И МОСКВЕ
						</div>
						<div className={styles.contentHeaderSubtitle}>
							Дизайнерский ремонт от А до Я с гарантией качества
						</div>
					</div>
					<div className={styles.containerAdvantages}>
						<div className={styles.advantagesItem}>
							<img src='/static/construction.svg' alt='logo' />
							<div className={styles.itemTitle}>Преимущество</div>
							<div className={styles.itemSubtitle}>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem
								ipsum dolor sit amet consectetur, adipisicing elit.
							</div>
						</div>
						<div className={styles.advantagesItem}>
							<img src='/static/construction.svg' alt='logo' />
							<div className={styles.itemTitle}>Преимущество</div>
							<div className={styles.itemSubtitle}>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem
								ipsum dolor sit amet consectetur, adipisicing elit.
							</div>
						</div>
						<div className={styles.advantagesItem}>
							<img src='/static/construction.svg' alt='logo' />
							<div className={styles.itemTitle}>Преимущество</div>
							<div className={styles.itemSubtitle}>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem
								ipsum dolor sit amet consectetur, adipisicing elit.
							</div>
						</div>
						<div className={styles.advantagesItem}>
							<img src='/static/construction.svg' alt='logo' />
							<div className={styles.itemTitle}>Преимущество</div>
							<div className={styles.itemSubtitle}>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem
								ipsum dolor sit amet consectetur, adipisicing elit.
							</div>
						</div>
					</div>
					<div className={styles.containerDescription}>
						<span>ПРИМЕРЫ РАБОТ</span>
						<img src='/static/arrowService.svg' alt='arrow' />
					</div>
					<div className={styles.containerExamples}>
						<DesignerItem />
					</div>
					<div className={styles.containerExamples}>
						<DesignerItem />
					</div>
					<WrapperReviews />
					<WrapperServices />
				</div>
			</div>
		</div>
	)
}

export default WrapperDesigner