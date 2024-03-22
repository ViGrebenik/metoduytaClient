/* eslint-disable react/prop-types */
import styles from './Advantage.module.scss'

const Advantage = ({ advantage }) => {
	return (
		<div className={styles.advantageItem}>
			<img src={advantage.urlSvg} alt={advantage.altSvg} />
			<div className={styles.advantageBlock}>
				<div className={styles.advantageDescriptionMain}>{advantage.title}</div>
				<div className={styles.advantageDescription}>
					{advantage.description}
				</div>
			</div>
		</div>
	)
}

export default Advantage
