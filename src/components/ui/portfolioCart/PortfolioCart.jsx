/* eslint-disable react/prop-types */
import { useCallback } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useModal } from '../../../assets/services/ModalContext'
import { mockData } from '../../wraperPortfolio/mocData'
import Button from '../button/Button'
import SliderObject from '../popup/viewObject/sliderObject/SliderObject'
import styles from './PortfolioCart.module.scss'

const PortfolioCart = ({ onClosePopUP, check = false, objectID }) => {
	const {
		type,
		description,
		listWorks,
		apartmentType,
		price,
		timeWork,
		location
	} = mockData.find(item => item.id === +objectID)
	const newPrice = price.toLocaleString('en', {
		minimumFractionDigits: 3,
		maximumFractionDigits: 3
	})
	const isMobile = useMediaQuery({ maxWidth: 726 })
	const isPaddingMobile = isMobile ? '10px 20px' : '20px 20px'
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
						<div className={styles.descriptionInfoObject}>
							<span>Описание: </span>
							{description}
						</div>
						<div className={styles.descriptionWorkBeenDone}>
							<span>Cписок выполненых работ:</span>
							<ul>
								{listWorks.map((item, index) => (
									<li key={index}> - {item}</li>
								))}
							</ul>
						</div>
						<div className={styles.descriptionInfoObject}>
							Сроки: <span> {timeWork} месяца</span>
						</div>
						<div className={styles.descriptionInfoObject}>
							Адресс <span>{location} </span>
						</div>
						<div className={styles.descriptionInfoObject}>
							Стоимость работ: <span>{newPrice} </span>руб.
						</div>
					</div>
					<div className={styles.descriptionContainerButton}>
						<Button
							title={'РАССЧИТАТЬ СВОЮ СМЕТУ'}
							type='popUp'
							active={active}
							pd={isPaddingMobile}
						/>
						<Button
							title={'ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ'}
							type='popUp'
							pd={isPaddingMobile}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PortfolioCart
