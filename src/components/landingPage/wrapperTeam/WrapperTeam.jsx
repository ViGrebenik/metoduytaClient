import styles from './WrapperTeam.module.scss'
import CarouselTeam from './carousel/CarouselTeam'

const WrapperTeam = () => {
	const items = [
		{ name: 'Максим', post: 'Директор', discription: 'описание' },
		{ name: 'Максим', post: 'Директор', discription: 'описание' },
		{ name: 'Максим', post: 'Директор', discription: 'описание' },
		{ name: 'Максим', post: 'Директор', discription: 'описание' },
		{ name: 'Максим', post: 'Директор', discription: 'описание' },
		{ name: 'Максим', post: 'Директор', discription: 'описание' }
	]
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
							<img src='/public/static/construction.svg' alt='icon' />У нас 5 У
							нас 5 бригад укомплектованых мастерами
						</div>
						<div className={styles.SubtitleTeamSubtitle}>
							<img src='/public/static/construction.svg' alt='icon' />
							Cредний стаж – 8 лет
						</div>
						<div className={styles.SubtitleTeamDiscription}>
							<img src='/public/static/construction.svg' alt='icon' />
							Каждый ремонт выполняют специализированные бригады. В комплексном
							ремонте квартиры участвуют от 2 до 6 мастеров разного профиля и
							прораб.
						</div>
					</div>
					<CarouselTeam items={items} />
				</div>
			</div>
		</div>
	)
}

export default WrapperTeam
