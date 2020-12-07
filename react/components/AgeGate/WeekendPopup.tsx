import React from 'react'
import styles from './WeekendPopup.css'

const WeekendPopup = () => {
	const dayOfWeek = new Date().getDay()
	const timeFiveOcLok= new Date().getHours()
	if ((dayOfWeek === 1 && timeFiveOcLok >= 16) || dayOfWeek === 0 || dayOfWeek === 6) {
		debugger
		return (
			<div className={styles.bannerWrapper}>
				<p className={styles.bannerText}>All orders placed will be processed the following working day</p>
			</div>
		)
	}
return(
	<div></div>
)
}


export default WeekendPopup
