import { useState } from 'react'
import styles from './FormFeedback.module.scss'

const FeedbackForm = () => {
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [question, setQuestion] = useState('')
	const [contactMethods, setContactMethods] = useState([])

	const handleContactMethodChange = event => {
		const method = event.target.value
		if (contactMethods.includes(method)) {
			setContactMethods(contactMethods.filter(m => m !== method))
		} else {
			setContactMethods([...contactMethods, method])
		}
	}

	const handleSubmit = event => {
		event.preventDefault()
		// Submit the form data here
	}

	return (
		<div className={styles.feedbackForm}>
			<form onSubmit={handleSubmit}>
				<div>
					{/* <label htmlFor='name'>Your name:</label> */}
					<input
						type='text'
						placeholder='Ваше имя'
						id='name'
						value={name}
						onChange={event => setName(event.target.value)}
					/>
				</div>
				<div>
					{/* <label htmlFor='phone'>Your phone number:</label> */}
					<input
						type='tel'
						placeholder='Ваш телефон'
						id='phone'
						value={phone}
						onChange={event => setPhone(event.target.value)}
					/>
				</div>
				<div>
					<label htmlFor='question'>Опишите свой вопрос</label>
					<textarea
						id='question'
						value={question}
						onChange={event => setQuestion(event.target.value)}
					/>
				</div>
				<div>
					<label>Как удобно связаться ?</label>
					<div>
						<label>
							<input
								type='checkbox'
								value='telegram'
								checked={contactMethods.includes('telegram')}
								onChange={handleContactMethodChange}
							/>
							Telegram
						</label>
						<label>
							<input
								type='checkbox'
								value='whatsapp'
								checked={contactMethods.includes('whatsapp')}
								onChange={handleContactMethodChange}
							/>
							Whatsapp
						</label>
						<label>
							<input
								type='checkbox'
								value='phone'
								checked={contactMethods.includes('phone')}
								onChange={handleContactMethodChange}
							/>
							По телефону
						</label>
					</div>
				</div>
				<button type='submit'>Получить rонсультация</button>
			</form>
		</div>
	)
}

export default FeedbackForm
