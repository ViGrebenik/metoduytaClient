import Button from '../../ui/button/Button'
import styles from './FeedbackEstimate.module.scss'

const FeedbackEstimate = () => {
	return (
		<div className={styles.containerActions}>
			<div className={styles.actionItem}>
				<div>
					<div className={styles.actionItemTitle}>
						Оставьте заявку на замер и расчет сметы
					</div>
					<div className={styles.actionItemSubtitle}>
						К вам приедет компетентный специалист. Он грамотно снимет замеры и
						проконсультирует по отделке помещений. На следующий день направим
						подробную смету со всеми расчетами.
					</div>
				</div>
				<div className={styles.containerButton}>
					<div className={styles.container}>
						<Button
							type={'popUp'}
							title={'ВЫЗВАТЬ ЗАМЕРЩИКА'}
							fontSize={'16px'}
							pd={'20px 20px'}
						/>
					</div>
				</div>
			</div>
			<div className={styles.actionItem}>
				<div>
					<div className={styles.actionItemTitle}>
						Уже делали расчет в других компаниях?
					</div>
					<div className={styles.actionItemSubtitle}>
						Отправьте нам файл со сметой, и мы сделаем расчет по нашему прайсу.
						А также проведем аудит на ошибки и скрытые работы.
					</div>
				</div>
				<div className={styles.containerButton}>
					<div className={styles.container}>
						<Button
							type={'popUp'}
							title={'ОТПРАВИТЬ СМЕТУ'}
							fontSize={'16px'}
							pd={'20px 20px'}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FeedbackEstimate
