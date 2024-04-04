import { useMediaQuery } from 'react-responsive'
import NavBar from '../header/navigation/NavBar'
import SocialLink from '../ui/socialLink/SocialLink'
import styles from './Footer.module.scss'
const Footer = () => {
	const isMobile = useMediaQuery({ maxWidth: 767 })
	return (
		<div className={styles.wrapperFooter}>
			<div className={styles.container}>
				<div className={styles.containerBasement}>
					<div className={styles.containerBasementBorders}>
						<div className={styles.basementNavigation}>
							{!isMobile && <NavBar />}
							<div className={styles.navigationInfoCampania}>
								<span>Метод Уюта </span>- комплексный ремонт и дизайн.
								<br />
								Санкт-Петербург, Москва.
							</div>

							<div className={styles.containerNumber}>
								<div className={styles.number}>+7 993 490-41-06</div>
								<div className={styles.description}>
									с 9:00 до 22:00 (Пн-Вс)
								</div>
							</div>
							<div className={styles.navigationInfoSocialLink}>
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
						<div className={styles.basementInfo}>
							<div className={styles.infoAdress}>
								м. Пионерская Проспект Королёва, 7, Санкт-Петербург, 197349, БЦ
								... , офис ...
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
