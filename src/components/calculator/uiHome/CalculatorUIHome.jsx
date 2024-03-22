import { useModal } from '../../../assets/services/ModalContext'
import styles from './CalculatorUIHome.module.scss'

const CalculatorUIHome = () => {
	const { openModal } = useModal()
	const type = 'calculator'

	return (
		<div className={styles.container} onClick={() => openModal(type)}>
			<img src='/static/advantage/calculator.svg' alt='calculator' />
		</div>
	)
}

export default CalculatorUIHome
