import { useLocation } from 'react-router-dom'
import Breadcrumbs from '../../../ui/breadCrumbs/BreadCrumbs'
import FeedbackForm from '../../../ui/formFeedback/FormFeedback'
import SocialLink from '../../../ui/socialLink/SocialLink'
import styles from './ContactsPage.module.scss'
import { dataContacts, dataEmail } from './DataText'

const ContactsPage = () => {
	const location = useLocation()
	const currentPath = location.pathname

	// const handleSubmit = e => {
	// 	e.preventDefault()
	// }
	return (
		<div className={styles.wrapperDesigner}>
			<div className={styles.container}>
				<div className={styles.containerBlock}>
					<div className={styles.containerBreadCrumbs}>
						<Breadcrumbs
							breadcrumbs={[
								{ name: 'Главная', url: '/' },
								{ name: 'Контакты', url: currentPath }
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
							</div>
							<div className={styles.contactsSocialLink}>
								<SocialLink
									urlLink={'https://t.me/metod_uyta'}
									logoSvg={'/static/socialLink/telegramV3.svg'}
								/>
								<SocialLink
									urlLink={'https://vk.com/metod_uyta'}
									logoSvg={'/static/socialLink/vk.svg'}
								/>
								<SocialLink
									urlLink={'https://api.whatsapp.com/send?phone=89819470547'}
									logoSvg={'/static/socialLink/whatsapp.svg'}
								/>
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
