/* eslint-disable react/prop-types */
import axios from 'axios'
import { useState } from 'react'
import CheckboxButtons from '../../calculator/checkBoxButton/CheckBoxButton'
import styles from './FormFeedback.module.scss'

const FeedbackForm = ({ questionForm = true, handleSubmit, result }) => {
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [question, setQuestion] = useState('')

	const [buttonsState, setButtonsState] = useState([
		{ name: 'Telegram', checked: false },
		{ name: 'Whatsapp', checked: false },
		{ name: 'По телефону', checked: false }
	])
	const handleForm = async () => {
		const selectedContactMethods = buttonsState
			.filter(button => button.checked)
			.map(button => button.name)
			.join(', ')

		const formData = {
			name,
			phone,
			question,
			result: String(result),
			contactMethods: selectedContactMethods
		}

		try {
			await axios.post(
				'https://www.formbackend.com/f/dad5703b24377d95',
				formData
			)
		} catch (error) {
			// Опционально: Добавьте здесь любую логику для обработки ошибки отправки формы
		}
	}

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
				<button onClick={handleForm} className={styles.postData} type='submit'>
					Получить rонсультация
				</button>
			</form>
		</div>
	)
}

export default FeedbackForm
