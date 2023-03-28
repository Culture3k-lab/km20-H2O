import React from 'react';
import Image from 'next/image';

function PersonPage() {
  return (
    <div className='personPage'>
        <div className='personPage_Content'>
            <h3 className='title'>Ольга Карпуть о&nbsp;своём новом проекте&nbsp;&mdash; H2O</h3>
            <p className='description'>Совершенно новое направление бизнеса, но&nbsp;с&nbsp;узнаваемым стилем: бескомпромиссное качество и&nbsp;безупречный внешний вид. За&nbsp;этим стоит огромная проделанная работа: от&nbsp;поиска уникального источника до&nbsp;разработки экологичной упаковки и&nbsp;создания чистого минималистичного дизайна.</p>
        </div>

        <div className='personPage_Image'>
            <Image className='image' src="/olga.jpg" width="680" height="800" />
        </div>
    </div>
  )
}

export default PersonPage