import styles from './WrapperTeam.module.scss'
// import CarouselTeam from './carousel/CarouselTeam'

const WrapperTeam = () => {
	// const items = [
	// 	{
	// 		name: 'Максим',
	// 		post: 'Директор',
	// 		discription: 'описание',
	// 		backgroundUrl: '/static/DSC08377.jpg'
	// 	},
	// 	{
	// 		name: 'Максим',
	// 		post: 'Директор',
	// 		discription: 'описание',
	// 		backgroundUrl: '/static/DSC08377.jpg'
	// 	},
	// 	{
	// 		name: 'Максим',
	// 		post: 'Директор',
	// 		discription: 'описание',
	// 		backgroundUrl: '/static/DSC08377.jpg'
	// 	}
	// ]
	return (
		<div className={styles.WrapperTeam}>
			<div className={styles.container}>
				<div className={styles.containerBlock}>
					<div className={styles.containerHeader}>
						<div className={styles.containerContentHeader}>
							<div className={styles.contentHeaderTitle}>Персонал компании</div>
						</div>
						<div className={styles.contentHeaderSubtitle}>
							Вы доверяете нам, мы – оправдываем ваши ожидания.
						</div>
					</div>
					<div className={styles.containerSubtitleTeam}>
						<div className={styles.SubtitleTeamSubtitle}>
							<img src='/static/advantage/v1/people.svg' alt='icon' />У нас 5
							бригад укомплектованых мастерами разного профиля.
						</div>
						<div className={styles.SubtitleTeamSubtitle}>
							<img src='/static/advantage/v1/statistics.svg' alt='icon' />
							Cредний стаж – 8 лет
						</div>
						<div className={styles.SubtitleTeamSubtitle}>
							<img src='/static/advantage/telephone.svg' alt='icon' />
							За каждым объектом закреплен отдельный бригадир, с которым вы
							можете связаться 24/7.
						</div>
						<div className={styles.SubtitleTeamSubtitle}>
							<img src='/static/advantage/v1/teamwork.svg' alt='icon' />
							Каждый ремонт выполняют специализированные бригады. В составе от
							2-6 мастеров разного профиля и прораба.
						</div>
					</div>
					{/* <CarouselTeam items={items} /> */}
				</div>
			</div>
		</div>
	)
}

export default WrapperTeam
