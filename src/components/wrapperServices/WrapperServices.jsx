import styles from './WrapperServices.module.scss'
import ServiceCard from './serviceCard/ServiceCard'

const WrapperServices = () => {
	return (
		<div className={styles.wrapperServices}>
			<div className={styles.container}>
				<div className={styles.containerBlock}>
					<div className={styles.containerHeader}>
						<div className={styles.containerContentHeader}>
							<div className={styles.contentHeaderTitle}>
								Услуги по ремонту и дизайну квартир в СПб
							</div>
							<div className={styles.contentHeaderSubtitle}>
								Вы можете доверить помещение и проект любой сложности. Мы делаем
								ремонт предсказуемым, доступным и комфортным.
							</div>
							<img src='/static/arrowService.svg' alt='arrow' />
						</div>
					</div>
					<div className={styles.containerWrapper}>
						<div className={styles.containerItem}>
							<ServiceCard
								title='УСЛУГИ ДИЗАЙНЕРА ИНТЕРЬЕРА'
								description='Изменить интерьер квартиры максимально быстро и с минимальными затратами – это реально.'
								price='От 800 руб. м2'
								imageUrl='/static/stoke/item01.jpg'
								serviceUrl='/servicesDesigner'
							/>
							<ServiceCard
								title='РЕМОНТ КВАРТИР ПОД КЛЮЧ'
								description='Выполняем все виды работ, включая дизайн-проект!'
								price='От 9500 руб. м2'
								imageUrl='/static/stoke/item02.jpg'
								serviceUrl='/servicesComplex'
							/>
							<ServiceCard
								title='Ремонт квартир в новостройке'
								description='Для тех, кто недавно переехал в новое жилье и мечтает поскорее оформить свой уютный уголок'
								price='От 7000 ₽/м2'
								imageUrl='/static/stoke/item03.jpg'
								serviceUrl='/servicesDesigner'
							/>
							<ServiceCard
								title='Услуга 2'
								description='Описание услуги 2'
								price='Цена 2'
								imageUrl='/static/stoke/item04.jpg'
								serviceUrl='/servicesComplex'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WrapperServices
