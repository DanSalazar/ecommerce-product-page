import styles from './styles.module.css'

const navLinks = ['Collection', 'Men', 'Women', 'About', 'Contact']

function Nav () {
	return (
		<nav className={styles.navbar}>

			<div>
				<button className={styles.navButton}>
					<img src="assets/icon-menu.svg" alt="Menu"/>
				</button>

				<a href='#'>
					<img src='assets/logo.svg' alt="Company logo"/>
				</a>
			</div>

			<div className={styles.navigation}>
				{navLinks.map(link => (
					<a href="#" key={link} className={styles.navLink}>{link}</a>
				))}
			</div>

			<div className={styles.navUserStatus} >
			  <button className={styles.cart}>
					<img src="assets/icon-cart.svg" alt="Icon of shopping cart"/>
				</button>
				<img src="assets/image-avatar.png" className={styles.avatar} alt=""/>
			</div>

		</nav>
	)
}

export default Nav
