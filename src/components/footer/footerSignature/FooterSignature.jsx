import styles from './FooterSignature.module.scss'

const FooterSignature = () => {
	return (
		<div className={styles.wrapperFooter}>
			<div className={styles.container}>
				<div className={styles.containerBasement}>
					<div className={styles.containerBasementBorders}>
						<div className={styles.containerInfoRights}>
							<div className={styles.InfoRights}>
								CК «МЕТОД УЮТА» 2018 - 2024
								<br />
								<span>
									<a
										href='https://metod-yuta.ru/policy'
										target='_blank'
										rel='noopener noreferrer'
									>
										Политика конфиденциальности
									</a>
								</span>
							</div>
						</div>
						<div className={styles.containerDeveloper}></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FooterSignature
