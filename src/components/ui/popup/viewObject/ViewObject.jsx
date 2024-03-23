/* eslint-disable react/prop-types */
import classNames from 'classnames'
import { useState } from 'react'
import PortfolioCart from '../../portfolioCart/PortfolioCart'
import styles from './ViewObject.module.scss'

const ViewObject = ({ onClose, objectID }) => {
	const [isVisible, setIsVisible] = useState(false)

	const onClosePopUP = () => {
		setIsVisible(true)
		onClose()
	}

	return (
		<div className={classNames(styles.modal, { [styles.visible]: isVisible })}>
			<div className={styles.modalContent}>
				<PortfolioCart objectID={objectID} onClosePopUP={onClosePopUP} />
			</div>
		</div>
	)
}

export default ViewObject
