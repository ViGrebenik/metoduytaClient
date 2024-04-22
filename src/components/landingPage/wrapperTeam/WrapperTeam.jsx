import styles from './WrapperTeam.module.scss'
import CarouselTeam from './carousel/CarouselTeam'

const WrapperTeam = () => {
	const items = [
		{
			name: 'Имя Фамилия',
			post: 'Старший прораб',
			discription:
				'Старший прораб с более чем 10-летним опытом в строительстве и ремонте квартир. Ответственен за надзор за объектами и соблюдение строительных норм и правил. Обеспечивает высокое качество работ и соблюдение сроков.',
			backgroundUrl: '/public/static/archive/PhotoTeam/1.jpg'
		},

		{
			name: 'Максим Васильевич',
			post: 'Руководитель',
			discription:
				'Основатель и руководитель компании Метод Уюта. Более 15 лет работы в ремонте квартир и более 300 завершенных проектов, демонстрирующих высокий уровень профессионализма и качества.',
			backgroundUrl: '/public/static/archive/PhotoTeam/3.jpg'
		},
		{
			name: 'Виталий Игоревич',
			post: 'Менеджер по взаимодействию с клиентами и маркетингу',
			discription:
				'Профессионал по маркетингу и взаимодействию с клиентами. Опытный специалист, способный создать успешные маркетинговые кампании и поддерживать долгосрочные отношения с клиентами.',
			backgroundUrl: '/public/static/archive/PhotoTeam/2.jpg'
		},
		{
			name: 'Евгения Викторовна',
			post: 'Дизайнер',
			discription:
				'Дизайнер с фокусом на деталях и стремлением к совершенству. Опыт работы в различных областях дизайна, готовый воплотить любую идею в жизнь.',
			backgroundUrl: '/public/static/archive/PhotoTeam/4.jpg'
		}
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
					<CarouselTeam items={items} />
					<div className={styles.containerSubtitleTeam}>
						<div className={styles.SubtitleTeamSubtitle}>
							<img src='/static/advantage/v1/people.svg' alt='icon' />
							Пять бригад укомплектованых мастерами разного профиля.
						</div>
						<div className={styles.SubtitleTeamSubtitle}>
							<img src='/static/advantage/v1/statistics.svg' alt='icon' />
							Средний стаж мастера: восемь лет.
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
				</div>
			</div>
		</div>
	)
}

export default WrapperTeam
