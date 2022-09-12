import React from 'react'
import style from "./style.module.css"

function Foods() {
  return (
    <div className={style.foods}>
        <div className={style.food}>
            <div className={style.text}>
                <h2>Pizza</h2>
                <p>Stock: 100</p>
                <p>Weight: 150g</p>
                <p>Price: 6$</p>
            </div>
            <img src='https://www.tastingtable.com/img/gallery/the-real-difference-between-the-most-popular-types-of-pizza/intro-1639076963.jpg'></img>
            
        </div>
        <div className={style.food}>
            <div className={style.text}>
                <h2>Burger</h2>
                <p>Stock: 100</p>
                <p>Weight: 150g</p>
                <p>Price: 3$</p>
            </div> 
            <img src='https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964?k=20&m=1188412964&s=612x612&w=0&h=Ow-uMeygg90_1sxoCz-vh60SQDssmjP06uGXcZ2MzPY='></img>
        </div>
        <div className={style.food}>  
            <div className={style.text}>
                <h2>Steak</h2>
                <p>Stock: 100</p>
                <p>Weight: 150g</p>
                <p>Price: 14$</p>
            </div>
            <img src='https://www.onceuponachef.com/images/2009/08/grilled-flank-steak.jpg'></img>
        </div>
    
    
    
    </div>
  )
}

export default Foods