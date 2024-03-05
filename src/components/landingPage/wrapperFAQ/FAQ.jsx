/* eslint-disable react/prop-types */
import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from './WrapperFAQ.module.scss'

const FAQ = ({ faqData }) => {
	const [selected, setSelected] = useState(null)

	const handleToggle = index => {
		if (selected === index) {
			setSelected(null)
		} else {
			setSelected(index)
		}
	}

	return (
		<div className={styles.faq}>
			{faqData.map((item, index) => (
				<CSSTransition
					key={index}
					classNames={{
						enter: styles.questionEnter,
						enterActive: styles.questionEnterActive,
						exit: styles.questionExit,
						exitActive: styles.questionExitActive
					}}
					timeout={800}
				>
					<div className={styles.question} onClick={() => handleToggle(index)}>
						<div className={styles.questionText}>{item.question}</div>
						{selected === index && (
							<div className={styles.answer}>{item.answer}</div>
						)}
					</div>
				</CSSTransition>
			))}
		</div>
	)
}

export default FAQ
