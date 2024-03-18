import Breadcrumbs from '../../../ui/breadCrumbs/BreadCrumbs'
import FeedbackForm from '../../../ui/formFeedback/FormFeedback'
import SocialLink from '../../../ui/socialLink/SocialLink'
import styles from './ContactsPage.module.scss'
import { dataContacts, dataEmail } from './DataText'

const ContactsPage = () => {
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
						<div className={styles.contentHeaderTitle}>КОНТАКТЫ</div>
					</div>
					<div className={styles.containerContacts}>
						<div className={styles.containerContactsDescription}>
							<div className={styles.contactsDescription}>
								<div className={styles.blockTagline}>
									<span>Свяжись с нами</span>
									<br />
									Наши контакты
								</div>
								<div className={styles.blockDescription}>
									Время работы менеджеров <br />
									Ежедневно, с 9:00 до 22:00
								</div>
							</div>
							<div className={styles.contactsDescription}>
								{dataContacts.map((item, index) => (
									<div className={styles.blockQualities} key={index}>
										<div className={styles.qualities}>
											<div className={styles.qualitiesBlock}>
												<div className={styles.qualitiesTitle}>
													{item.title}
												</div>
												<div className={styles.qualitiesSubtitle}>
													{item.element}
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
							<div className={styles.contactsDescription}>
								<div className={styles.blockQualities}>
									<div className={styles.qualities}>
										<div className={styles.qualitiesBlock}>
											<div className={styles.qualitiesTitle}>
												{dataEmail.title}
											</div>
											<div className={styles.qualitiesSubtitle}>
												{dataEmail.element}
											</div>
										</div>
									</div>
								</div>
								<SocialLink logoSvg={'/static/socialyoutube.svg'} />
								<SocialLink logoSvg={'/static/socialTelegram.svg'} />
								<SocialLink logoSvg={'/static/socialInstagram.svg'} />
							</div>
						</div>
						<div className={styles.containerContactsFormAction}>
							<FeedbackForm />
						</div>
						<div className={styles.containerContactsFormCart}>
							<img src='/static/cart.png' alt='cart' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactsPage
