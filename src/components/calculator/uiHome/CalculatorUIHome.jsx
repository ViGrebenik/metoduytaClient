import { useModal } from '../../../assets/services/ModalContext'
import CallRequestForm from '../../ui/popup/CallRequestForm'
import styles from './CalculatorUIHome.module.scss'

const CalculatorUIHome = () => {
	const { isModalOpen, closeModal, openModal } = useModal()

	return (
		<div className={styles.container} onClick={openModal}>
			<img src='/static/construction.svg' alt='calculator' />
			{isModalOpen && <CallRequestForm type={true} onClose={closeModal} />}
		</div>
	)
}

export default CalculatorUIHome
