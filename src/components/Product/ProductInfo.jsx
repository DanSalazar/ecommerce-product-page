import styles from './styles.module.css'

import BuyProduct from './BuyProduct.jsx'

function ProductInfo () {
	return (
		<section className={styles.productInfo} >

			<span className={styles.companyName}>Sneaker Company</span>
			
			<h2 className={styles.productName}>Fall Limited Edition Sneakers</h2>

			<p className={styles.productDescription} >
				These low-profile sneakers are your perfect casual wear companion. Featuring a 
  			durable rubber outer sole, they’ll withstand everything the weather can offer.
			</p>

			<div className={styles.productPrice}>

				<div className={styles.productPriceWrapper}>
					<p className={styles.productCurrentPrice}> 
						$125.00 
					</p>
					<div className={styles.productDiscount}>
						<span>50%</span>
					</div>
				</div>

				<p className={styles.productOriginalPrice}>
					$250.00
				</p>

			</div>

			<BuyProduct/>

		</section>
	)
}

export default ProductInfo
