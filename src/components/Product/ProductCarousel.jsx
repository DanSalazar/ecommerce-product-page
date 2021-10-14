import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './styles.module.css'

import { showModal } from '../../redux/actions/modalCarouselActions.js'

import PreviousIcon from '../Icons/PreviousIcon.jsx'
import NextIcon from '../Icons/NextIcon.jsx'
import ProductThumbnails from './ProductThumbnails.jsx'

function ProductCarrousel () {
  const [currentImg, setCurrentImg] = useState(1)
  const dispatch = useDispatch()
  
  const showCarrouselModal = () => {
    dispatch(showModal())
  }
  
  const handleNext = () => {
     if (currentImg < 4) setCurrentImg(currentImg + 1) 
  }
  
  const handlePrevious = () => {
     if (currentImg > 0 && !(currentImg === 1)) setCurrentImg(currentImg - 1) 
  }
  
  return (
    <div>
      <div className={styles.productImgContainer} onClick={showCarrouselModal}>
        <button
          onClick={handlePrevious}
          className={`${styles.buttonControl} ${styles.previous}`}>
          <PreviousIcon/>
        </button>
        <img src={`assets/image-product-${currentImg}.jpg`} alt='Image of shoes'/>
        <button
          onClick={handleNext}
          className={`${styles.buttonControl} ${styles.next}`}>
          <NextIcon/>  
        </button>
      </div>
  		<ProductThumbnails selected={currentImg} setSelected={setCurrentImg}/>
    </div>
  )
}

export default ProductCarrousel
