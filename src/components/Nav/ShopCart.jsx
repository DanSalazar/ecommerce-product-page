import { useDispatch } from 'react-redux'
import styles from './styles.module.css'

import ProductInCart from './ProductInCart.jsx'

function ShopCart ({ product }) {

  return (
    <div className={styles.shoppingCart}>
      <div className={styles.shoppingCartTitle}>
        <p>Cart</p>
      </div>
      <div className={styles.shoppingCartContent}>
        {product.quantity > 0
          ? <ProductInCart product={product}/>
          : <span>Your cart is empty</span>}
      </div>
    </div>
  )
}

export default ShopCart
