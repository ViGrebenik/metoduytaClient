import styles from './SocialLink.module.scss'

// eslint-disable-next-line react/prop-types, no-unused-vars
const SocialLink = ({ urlLink = '', logoSvg }) => {
	return (
		<div className={styles.socialLink}>
			<div className={styles.container}>
				<a href={urlLink} target='_blank' rel='noopener noreferrer'>
					<img src={logoSvg} alt='intagramSocialLink' />
				</a>
			</div>
		</div>
	)
}

export default SocialLink
