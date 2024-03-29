/* eslint-disable react/prop-types */
import { useCallback } from 'react'
import { useModal } from '../../../assets/services/ModalContext'
import { mockData } from '../../wraperPortfolio/mocData'
import Button from '../button/Button'
import SliderObject from '../popup/viewObject/sliderObject/SliderObject'
import styles from './PortfolioCart.module.scss'

const PortfolioCart = ({ onClosePopUP, check = false, objectID }) => {
	const { type, description, listWorks, apartmentType, priceArea } =
		mockData.find(item => item.id === +objectID)
	const priceM = priceArea.toLocaleString('en', {
		minimumFractionDigits: 3,
		maximumFractionDigits: 3
	})
	const { openModal } = useModal()
	const typeModal = 'calculator'

	const active = useCallback(() => {
		openModal(typeModal)
	}, [openModal])

	return (
		<div className={`${styles.modalContent} ${check ? styles.check : ''}`}>
			{onClosePopUP && (
				<span className={styles.close} onClick={onClosePopUP}>
					&times;
				</span>
			)}
			<div className={styles.containerObject}>
				<SliderObject objectID={objectID} />
				<div className={styles.objectDescription}>
					<div className={styles.descriptionItem}>
						<div className={styles.descriptionTitle}>
							<p>{type}</p>
						</div>
						<div className={styles.descriptionApartmentType}>
							Тип квартиры: {apartmentType}
						</div>
						<div className={styles.descriptionInfoObject}>{description}</div>
						<div className={styles.descriptionWorkBeenDone}>
							<span>Cписок выполненых работ:</span>
							<ul>
								{listWorks.map((item, index) => (
									<li key={index}> - {item}</li>
								))}
							</ul>
						</div>
						<div className={styles.descriptionInfoObject}>
							Сроки: <span> 3 месяца</span>
						</div>
						<div className={styles.descriptionInfoObject}>
							Стоимость работ: <span>{priceM} </span>руб. кв.м.
						</div>
					</div>
					<div className={styles.descriptionContainerButton}>
						<Button
							title={'РАССЧИТАТЬ СВОЮ СМЕТУ'}
							type='popUp'
							active={active}
						/>
						<Button title={'ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ'} type='popUp' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default PortfolioCart
