import styles from './WrapperReviews.module.scss'
import Carousel from './carousel/Carousel'

const WrapperReviews = () => {
	const items = [
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad maxime maiores explicabo alias. Officiis soluta nemo excepturi atque voluptates reprehenderit itaque perferendis illum quam, voluptas tempora enim veritatis fuga doloribus!',
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad maxime maiores explicabo alias. Officiis soluta nemo excepturi atque voluptates reprehenderit itaque perferendis illum quam, voluptas tempora enim veritatis fuga doloribus!',
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad maxime maiores explicabo alias. Officiis soluta nemo excepturi atque voluptates reprehenderit itaque perferendis illum quam, voluptas tempora enim veritatis fuga doloribus!',
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad maxime maiores explicabo alias. Officiis soluta nemo excepturi atque voluptates reprehenderit itaque perferendis illum quam, voluptas tempora enim veritatis fuga doloribus!',
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad maxime maiores explicabo alias. Officiis soluta nemo excepturi atque voluptates reprehenderit itaque perferendis illum quam, voluptas tempora enim veritatis fuga doloribus!'
	]

	return (
		<div className={styles.wrapperReviews}>
			<div className={styles.container}>
				<div className={styles.containerBlock}>
					<div className={styles.containerHeader}>
						<div className={styles.containerContent}>
							<div className={styles.contentHeaderTitle}>ОТЗЫВЫ</div>
						</div>
					</div>
					<Carousel items={items} />
				</div>
			</div>
		</div>
	)
}

export default WrapperReviews
