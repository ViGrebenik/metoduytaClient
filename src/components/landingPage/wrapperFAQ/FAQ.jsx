/* eslint-disable react/prop-types */
import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from './WrapperFAQ.module.scss'

const FAQ = ({ faqData }) => {
	const [selected, setSelected] = useState(null)
	const [arrows, setArrows] = useState(faqData.map(() => false))

	const handleToggle = index => {
		const newArrows = [...arrows]
		newArrows[index] = !newArrows[index]
		setArrows(newArrows)

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
						<div className={styles.questionText}>
							{arrows[index] ? (
								<img src='/static/arrowdown.svg' alt='arrow' />
							) : (
								<img src='/static/arrowUp.svg' alt='arrow' />
							)}
							<div>{item.question}</div>
							{arrows[index] ? (
								<img src='/static/arrowdown.svg' alt='arrow' />
							) : (
								<img src='/static/arrowUp.svg' alt='arrow' />
							)}
						</div>

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
