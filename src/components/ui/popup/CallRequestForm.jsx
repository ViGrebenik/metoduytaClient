/* eslint-disable react/prop-types */
import classNames from 'classnames'
import { useState } from 'react'
import { useModal } from '../../../assets/services/ModalContext'
import CalculatorUI from '../../calculator/CalculatorUI'
import FeedbackForm from '../formFeedback/FormFeedback'
import styles from './styles.module.scss'

const CallRequestForm = ({ onClose }) => {
	const [isVisible, setIsVisible] = useState(false)
	const { type } = useModal()

	const handleSubmit = e => {
		e.preventDefault()
		setIsVisible(true)
		onClose()
		alert('Вам перезвонят')
	}

	return (
		<div className={classNames(styles.modal, { [styles.visible]: isVisible })}>
			<div className={`${styles.modalContent} ${type ? styles.type : ''}`}>
				<span className={styles.close} onClick={onClose}>
					&times;
				</span>
				{type === 'calculator' ? (
					<CalculatorUI />
				) : (
					<>
						<div className={styles.feedbackFormTitle}>
							Закажи обратную связь
						</div>
						<div className={styles.feedbackFormSubtitle}>мы вам перезвоним</div>
						<FeedbackForm questionForm={false} handleSubmit={handleSubmit} />
					</>
				)}
			</div>
		</div>
	)
}

export default CallRequestForm
