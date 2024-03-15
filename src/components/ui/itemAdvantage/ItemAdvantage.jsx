/* eslint-disable react/prop-types */
import styles from './ItemAdvantage.module.scss'

const ItemAdvantage = ({ item }) => {
	return (
		<div className={styles.containerItem}>
			<div className={styles.itemBlock}>
				<img src={item.iconImg} alt='icon' />
				<div className={styles.ItemTitle}>{item.title}</div>
			</div>
			<div className={styles.BlockSubtitle}>{item.subTitle}</div>
		</div>
	)
}

export default ItemAdvantage
