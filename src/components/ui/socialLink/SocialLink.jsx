import styles from './SocialLink.module.scss'

// eslint-disable-next-line react/prop-types, no-unused-vars
const SocialLink = ({ urlLink = '', logoSvg }) => {
	return (
		<div className={styles.itemSocialLink}>
			<img src={logoSvg} alt='logo' />
		</div>
	)
}

export default SocialLink
