import NavBar from '../header/NavBar'
import SocialLink from '../ui/socialLink/SocialLink'
import styles from './Footer.module.scss'
const Footer = () => {
	return (
		<div className={styles.wrapperFooter}>
			<div className={styles.container}>
				<div className={styles.containerBasement}>
					<div className={styles.containerBasementBorders}>
						<div className={styles.basementNavigation}>
							<NavBar />
							<div className={styles.navigationInfoCampania}>
								<span>Метод Уюта </span>- комплексный ремонт и дизайн.
								<br />
								Санкт-Петербург, Москва.
							</div>
							<div className={styles.navigationInfoSocialLink}>
								<SocialLink logoSvg={'/static/socialyoutube.svg'} />
								<SocialLink logoSvg={'/static/socialTelegram.svg'} />
								<SocialLink logoSvg={'/static/socialInstagram.svg'} />
							</div>
						</div>
						<div className={styles.basementInfo}>
							<div className={styles.infoAdress}>
								м. Пионерская Проспект Королёва, 7, Санкт-Петербург, 197349, БЦ
								... , офис ...
							</div>
							<div className={styles.infoContact}>+ 7 999 999 99 99</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
