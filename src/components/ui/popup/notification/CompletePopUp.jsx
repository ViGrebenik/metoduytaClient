import { useEffect, useRef } from 'react'
import { useModal } from '../../../../assets/services/ModalContext'
import styles from './CompletePopUp.module.scss'

const CompletePopUp = () => {
	const { toggleNotificationModal, isNotification } = useModal()
	const timeoutRef = useRef(null)
	useEffect(() => {
		if (isNotification) {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current)
			}

			timeoutRef.current = setTimeout(() => {
				toggleNotificationModal(false)
			}, 1000)
		}
	}, [isNotification, toggleNotificationModal])
	return (
		<div
			className={styles.container}
			style={{ display: isNotification ? 'block' : 'none' }}
		>
			<div className={styles.popup}>
				<div onClick={toggleNotificationModal} className={styles.close}>
					<img src='/static/close.svg' alt='iconSave' />
				</div>
				<p>
					<span>Спасио за заявку.</span>
					<br /> Мы скоро вам перезвоним!
				</p>
			</div>
		</div>
	)
}

export default CompletePopUp
