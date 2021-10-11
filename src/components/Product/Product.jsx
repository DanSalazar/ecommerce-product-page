import styles from './styles.module.css'

import ProductInfo from './ProductInfo.jsx'

function Product () {
	return (
		<div>
			<div className={styles.productContainer} >
				<img src="assets/image-product-1.jpg" alt="Image of shoes" />
			</div>
		  <ProductInfo/>
		</div>
	)
}

export default Product
