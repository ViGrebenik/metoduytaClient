/* eslint-disable react/prop-types */
import classNames from 'classnames'
import { useState } from 'react'
import styles from './ViewObject.module.scss'
import PortfolioCart from '../../portfolioCart/PortfolioCart'

const ViewObject = ({ onClose }) => {
	const [isVisible, setIsVisible] = useState(false)

	const onClosePopUP = () => {
		setIsVisible(true)
		onClose()
	}

	return (
		<div className={classNames(styles.modal, { [styles.visible]: isVisible })}>
			<div className={styles.modalContent}>
				{/* <span className={styles.close} onClick={onClosePopUP}>
					&times;
				</span> */}
				<PortfolioCart onClosePopUP={onClosePopUP} />
			</div>
		</div>
	)
}

export default ViewObject
