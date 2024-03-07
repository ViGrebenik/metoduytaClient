/* eslint-disable react/prop-types */
import classNames from 'classnames'
import { useState } from 'react'
// import CallRequestButton from '../CallRequestButton'
import styles from './ViewObject.module.scss'
import SliderObject from './sliderObject/SliderObject'

const ViewObject = ({ onClose }) => {
	const [isVisible, setIsVisible] = useState(false)

	const onClosePopUP = () => {
		setIsVisible(true)
		onClose()
	}

	return (
		// <div className={`${styles.modal} ${isVisible ? styles.visible : ''}`}></div>
		<div className={classNames(styles.modal, { [styles.visible]: isVisible })}>
			<div className={styles.modalContent}>
				<span className={styles.close} onClick={onClosePopUP}>
					&times;
				</span>
				<div className={styles.containerObject}>
					<SliderObject />
					<div className={styles.objectDescription}>
						<div className={styles.descriptionTitle}>Тут какой ремонт</div>
						<div className={styles.descriptionInfoObject}>
							Тут данные о обьекте
						</div>
						<div className={styles.descriptionWorkBeenDone}>
							Тут какие работы были сделаны списком
							<br />
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
							magnam recusandae doloremque! Minima odio numquam quae, autem
							iste, omnis vitae dolorem perspiciatis officiis iusto est,
							repudiandae reiciendis debitis corrupti distinctio!
						</div>
						<div className={styles.descriptionContainerButton}>
							<div className={styles.descriptionButton}>
								РАССЧИТАТЬ СВОЮ СМЕТУ/ПЕРЕХОД
							</div>
							<div className={styles.descriptionButton}>
								ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ/POPUP
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ViewObject