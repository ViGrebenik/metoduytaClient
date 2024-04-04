import styles from './WrapperReviews.module.scss'
import Carousel from './carousel/Carousel'

const WrapperReviews = () => {
	const items = [
		['/static/archive/reviews/1.jpg'],
		['/static/archive/reviews/2.jpg'],
		['/static/archive/reviews/3.jpg'],
		['/static/archive/reviews/4.jpg'],
		['/static/archive/reviews/5.jpg'],
		['/static/archive/reviews/6.jpg'],
		['/static/archive/reviews/7.jpg']
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
