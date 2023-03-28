import React from 'react'

function AboutPage() {
  return (
    <div className='aboutPage'> {/* Высота блока 100VH */}
        {/* Вверх страницы */}
        <div className='aboutPage_info'>
            <h2 className='aboutPage_info_Title'>Уникальная мягкость и&nbsp;низкое содержание солей</h2>
            <p className='aboutPage_info_Description'>Минерализация происходит естественным путем: стекая с&nbsp;ледников вода проходит сквозь горные породы Северного Тянь-Шаня, многократно фильтруясь и&nbsp;обогащаясь необходимыми минералами, такими как магний и&nbsp;кальций. Поэтому вода КМ20 подходит для ежедневного употребления и&nbsp;утоляет жажду</p>
        </div>
        {/* Низ страницы */}
        <div class="aboutPage_static"> 
            <div class="aboutPage_static_Card card1">
                <h3 className='aboutPage_statistics_Title'>Минерализация <span className='aboutPage_statistics_Title_Alt'>Mineralization</span></h3>
                <p className='aboutPage_statistics_Description'>Крепкорассольные воды<br /> 150&nbsp;г/л и&nbsp;выше</p>
                <span className='aboutPage_statistics_Count'>168,5</span>
            </div>
            <div class="aboutPage_static_Card card2">
                <h3 className='aboutPage_statistics_Title'>Кислотно-щелочной баланс <span className='aboutPage_statistics_Title_Alt'>Acid-Base Balance рН</span></h3>
                <p className='aboutPage_statistics_Description'>Cлабощелочная<br /> pH&nbsp;7,5&nbsp;&mdash; 8,5</p>
                <span className='aboutPage_statistics_Count'>8,2</span>
            </div>
            <div class="aboutPage_static_Card card3">
                <h3 className='aboutPage_statistics_Title'>Жесткость <span className='aboutPage_statistics_Title_Alt'>Rigidity</span></h3>
                <p className='aboutPage_statistics_Description'>Мягкая вода<br /> мг-экв/л 1,5 до&nbsp;4,0</p>
                <span className='aboutPage_statistics_Count'>1,9</span>
            </div>
        </div>


    </div>
  )
}

export default AboutPage