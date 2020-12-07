import React, { useEffect } from 'react'
import { ExtensionPoint } from 'vtex.render-runtime'
import { useCookies } from 'react-cookie'
import styles from './AgeGate.css'

const AgeGate = () => {
	const [cookies, setCookie] = useCookies(['ageGate'])
	const handleClick = () => {
		let expiresDate = new Date()
		expiresDate.setDate(expiresDate.getDate() + 60)
		setCookie('ageGate', true, { expires: expiresDate })
	}
	useEffect(() => {
		if (!cookies.ageGate) {
			setCookie('ageGate', false)
		}
	}, [])

	return (
		<div>
			{cookies.ageGate == 'false' && (
				<div className={styles.ageGateWrapper}>
					<div className={styles.ageGateContainer}>
						<div className={`${styles.ageGateLogoContainer} flex`}>
								<img src="https://abiukb2b.vtexassets.com/assets/vtex.file-manager-graphql/images/bbf1e82e-4f97-4522-87ab-04d2db76e4f9___6fac24d876adbe6ff74517a19cb28883.png"></img>
						</div>
						<ExtensionPoint id="rich-text" />
						<p>Are you over 18 years old?</p>
						<div className={styles.ageGateButtons}>
							<button className={styles.ageGateButton} onClick={handleClick}>
								Yes
						</button>
							<a className={styles.ageGateUnderAge} href="#">
								No
						</a>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

AgeGate.schema = {
	title: 'AgeGate',
	description: 'Age Gate',
	type: 'object',
}

export default AgeGate
