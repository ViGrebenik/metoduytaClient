/* eslint-disable react/prop-types */
import { useState } from 'react'
import CheckboxButtons from '../../calculator/checkBoxButton/CheckBoxButton'
import styles from './FormFeedback.module.scss'

const FeedbackForm = ({ questionForm = true, handleSubmit }) => {
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [question, setQuestion] = useState('')

	const [buttonsState, setButtonsState] = useState([
		{ name: 'Telegram', checked: false },
		{ name: 'Whatsapp', checked: false },
		{ name: 'По телефону', checked: false }
	])

	return (
		<div className={styles.feedbackForm}>
			<div className={styles.headerTitle}>Форма обратной связи</div>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						type='text'
						placeholder='Ваше имя'
						id='name'
						value={name}
						onChange={event => setName(event.target.value)}
					/>
				</div>
				<div>
					<input
						type='tel'
						placeholder='Ваш телефон'
						id='phone'
						value={phone}
						onChange={event => setPhone(event.target.value)}
					/>
				</div>
				{questionForm && (
					<div className={styles.question}>
						<label htmlFor='question'>Опишите свой вопрос</label>
						<textarea
							id='question'
							value={question}
							onChange={event => setQuestion(event.target.value)}
						/>
					</div>
				)}
				<div className={styles.headerCheckBox}>
					<label>Как удобно связаться ?</label>
					<CheckboxButtons
						buttonsState={buttonsState}
						setButtonsState={setButtonsState}
					/>
				</div>
				<button className={styles.postData} type='submit'>
					Получить rонсультация
				</button>
			</form>
		</div>
	)
}

export default FeedbackForm
