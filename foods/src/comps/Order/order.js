import React from 'react'
import style from './style.module.css'

function Order() {
  return (
    <div className={style.order}>
        <div className={style.top}>
            <h1>Current Order</h1>
            <button>Clear</button>
        </div>
        <div className={style.foods}>
            <div className={style.food}>
                <img src='https://www.tastingtable.com/img/gallery/the-real-difference-between-the-most-popular-types-of-pizza/intro-1639076963.jpg'></img>
                <h3>Pizza</h3>
                <button>-</button>
                <p>4</p>
                <button>+</button>
                <p>$24</p>
            </div>
            <div className={style.food}>
                <img src='https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964?k=20&m=1188412964&s=612x612&w=0&h=Ow-uMeygg90_1sxoCz-vh60SQDssmjP06uGXcZ2MzPY='></img>
                <h3>Burger</h3>
                <button>-</button>
                <p>6</p>
                <button>+</button>
                <p>$18</p>
            </div>
            <div className={style.food}>
                <img src='https://www.onceuponachef.com/images/2009/08/grilled-flank-steak.jpg'></img>
                <h3>Steak</h3>
                <button>-</button>
                <p>1</p>
                <button>+</button>
                <p>$14</p>
            </div>
        </div>
    
    
    
    </div>
  )
}

export default Order