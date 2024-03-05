import styles from './WrapperTeam.module.scss'
import CarouselTeam from './carousel/CarouselTeam'

const WrapperTeam = () => {
	const items = [
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad maxime maiores explicabo alias. Officiis soluta nemo excepturi atque voluptates reprehenderit itaque perferendis illum quam, voluptas tempora enim veritatis fuga doloribus!',
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad maxime maiores explicabo alias. Officiis soluta nemo excepturi atque voluptates reprehenderit itaque perferendis illum quam, voluptas tempora enim veritatis fuga doloribus!',
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad maxime maiores explicabo alias. Officiis soluta nemo excepturi atque voluptates reprehenderit itaque perferendis illum quam, voluptas tempora enim veritatis fuga doloribus!',
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad maxime maiores explicabo alias. Officiis soluta nemo excepturi atque voluptates reprehenderit itaque perferendis illum quam, voluptas tempora enim veritatis fuga doloribus!',
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad maxime maiores explicabo alias. Officiis soluta nemo excepturi atque voluptates reprehenderit itaque perferendis illum quam, voluptas tempora enim veritatis fuga doloribus!',
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad maxime maiores explicabo alias. Officiis soluta nemo excepturi atque voluptates reprehenderit itaque perferendis illum quam, voluptas tempora enim veritatis fuga doloribus!'
	]
	return (
		<div className={styles.WrapperTeam}>
			<div className={styles.container}>
				<div className={styles.containerBlock}>
					<div className={styles.containerHeader}>
						<div className={styles.containerContentHeader}>
							<div className={styles.contentHeaderTitle}>Команда</div>
						</div>
						<div className={styles.contentHeaderSubtitle}>
							Вы можете доверить нам любое помещение и проект любой сложности.
						</div>
					</div>
					<div className={styles.containerSubtitleTeam}>
						<div className={styles.SubtitleTeamTitle}>Картинка + описание</div>
						<div className={styles.SubtitleTeamSubtitle}>
							Картинка + описание
						</div>
						<div className={styles.SubtitleTeamDiscription}>Описание</div>
					</div>
					<CarouselTeam items={items} />
				</div>
			</div>
		</div>
	)
}

export default WrapperTeam
