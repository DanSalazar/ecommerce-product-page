import styles from './styles.module.css'

import ProductImages from './ProductImages.jsx'
import ProductInfo from './ProductInfo.jsx'

function Product () {
	return (
		<div className={styles.productWrapper}>
			<ProductImages/>
		  <ProductInfo/>
		</div>
	)
}

export default Product
