import styles from './styles.module.css'
import { useSelector, useDispatch } from 'react-redux'

import { closeModal } from '../../redux/actions/modalCarouselActions.js'

import ProductCarousel from './ProductCarousel.jsx'
import CloseIcon from '../Icons/CloseIcon.jsx'

function ProductImages () {
  const showModal = useSelector(state => state.carouselModal)
  const dispatch = useDispatch()
  
  const closeCarouselModal = () => {
    dispatch(closeModal())
  }
  
  return (
    <>
      <ProductCarousel/>
      {showModal &&
        <div className={styles.carouselModal}>
          <button className={styles.closeCarouselModal} onClick={closeCarouselModal}>
            <CloseIcon/>
          </button>
          <ProductCarousel/>
        </div>}
    </>
  ) 
}

export default ProductImages
