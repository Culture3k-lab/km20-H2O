import React from 'react'
import Button from '../Button/Button'

function NavigationBar() {
  return (
    <header className='navigationBar'>
        <h1>KM20</h1>
        <Button
            type='secondary'
            name="Перейти в магазин"
            link="https://km20food.ru/product-category/detoks/water/"
        />
    </header>
  )
}

export default NavigationBar;