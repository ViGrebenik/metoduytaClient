/* eslint-disable react/prop-types */ import axios from 'axios'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useModal } from '../../../assets/services/ModalContext'
import CheckboxButtons from '../../calculator/checkBoxButton/CheckBoxButton'
import styles from './FormFeedback.module.scss'

const FeedbackForm = ({ questionForm = true, handleSubmit, result }) => {
	const [isDisabled, setIsDisabled] = useState(false)
	const [buttonsState, setButtonsState] = useState([
		{ name: 'Telegram', checked: false },
		{ name: 'Whatsapp', checked: false },
		{ name: 'По телефону', checked: false }
	])
	const { toggleNotificationModal } = useModal()
	document.cookie = 'cookieName=cookieValue; SameSite=Strict;'

	const handleForm = async values => {
		setIsDisabled(true)
		const selectedContactMethods = buttonsState
			.filter(button => button.checked)
			.map(button => button.name)
			.join(', ')

		const formData = {
			...values,
			result: String(result),
			contactMethods: selectedContactMethods
		}
		try {
			await axios.post(
				'https://www.formbackend.com/f/dad5703b24377d95',
				formData
			)
		} catch (error) {
			// обработка ошибки
		} finally {
			handleSubmit()
			toggleNotificationModal()
			setIsDisabled(false)
		}
	}

	const formik = useFormik({
		initialValues: {
			name: '',
			phone: '',
			question: ''
		},
		validate: values => {
			const errors = {}
			if (!values.name) {
				errors.name = 'Обязательно для заполнения'
			}
			if (!values.phone) {
				errors.phone = 'Обязательно для заполнения'
			}
			return errors
		},
		onSubmit: handleForm
	})

	return (
		<div className={styles.feedbackForm}>
			<div className={styles.headerTitle}>Форма обратной связи</div>
			<form onSubmit={formik.handleSubmit}>
				<div className={styles.inputBlock}>
					<input
						type='text'
						placeholder='Ваше имя'
						id='name'
						value={formik.values.name}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.name && formik.errors.name && (
						<span>{formik.errors.name}</span>
					)}
				</div>
				<div className={styles.inputBlock}>
					<input
						type='tel'
						placeholder='Ваш телефон'
						id='phone'
						value={formik.values.phone}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.phone && formik.errors.phone && (
						<span>{formik.errors.phone}</span>
					)}
				</div>
				{questionForm && (
					<div className={styles.question}>
						<label htmlFor='question'>Опишите свой вопрос</label>
						<textarea
							id='question'
							value={formik.values.question}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.question && formik.errors.question && (
							<span>{formik.errors.question}</span>
						)}
					</div>
				)}
				<div className={styles.headerCheckBox}>
					<label>Как удобно связаться ?</label>
					<CheckboxButtons
						buttonsState={buttonsState}
						setButtonsState={setButtonsState}
					/>
				</div>
				<button disabled={isDisabled} className={styles.postData} type='submit'>
					Получить консультация
				</button>
				<div className={styles.policy}>
					Нажимая на кнопку {'"Получить консультация"'}, вы соглашаетесь <br />с{' '}
					<a href='https://metod-yuta.ru/policy' target='_blank'>
						политикой конфиденциальности
					</a>
				</div>
			</form>
		</div>
	)
}

export default FeedbackForm
