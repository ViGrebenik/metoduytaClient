/* eslint-disable react/prop-types */
import classNames from 'classnames'
import { useState } from 'react'
import styles from './styles.module.scss'

const CallRequestForm = ({ onClose }) => {
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [isVisible, setIsVisible] = useState(false)

	const handleSubmit = e => {
		e.preventDefault()
		setIsVisible(true)
		onClose()
	}

	return (
		// <div className={`${styles.modal} ${isVisible ? styles.visible : ''}`}></div>
		<div className={classNames(styles.modal, { [styles.visible]: isVisible })}>
			<div className={styles['modal-content']}>
				<span className={styles.close} onClick={onClose}>
					&times;
				</span>
				<div className={styles.feedbackFormTitle}>Закажи обратную связь</div>
				<div className={styles.feedbackFormSubtitle}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</div>
				<form onSubmit={handleSubmit}>
					<label>
						<input
							type='text'
							placeholder='Имя:'
							value={name}
							onChange={e => setName(e.target.value)}
						/>
					</label>
					<label>
						<input
							type='text'
							placeholder='Телефон:'
							value={phone}
							onChange={e => setPhone(e.target.value)}
						/>
					</label>
					<button type='submit'>Отправить</button>
				</form>
			</div>
		</div>
	)
}

export default CallRequestForm
