import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Button from '../Button/Button';
import { gsap } from 'gsap';

function ShowPage() {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;

    gsap.from(image, {
      y: '-25%',
      ease: 'power1.out',
      scrollTrigger: {
        trigger: image,
        scrub: true,
      },
    });
  }, []);

  return (
    <div className='showPage'>
      <div className='showPage_view'>
        <Image
          className='image-cover-show'
          src="/show-main.jpg"
          width="680"
          height="800"
          ref={imageRef}
        />
        </div>
        <div className='showPage_information'>
            <div className='showPage_information_Action'>
                <div>
                <p className='title'>Оставить заявку для бизнеса</p>
                <p className='description'>Leave a request for business</p>
                </div>
                <Button name='Узнать подробнее' type='tertiary' link='mailto:pr@km20water.ru' />
            </div>
            <p className='showPage_information_Content'>Бутылка, выполненная из&nbsp;стекла подчёркивает чистый вкус воды. Дизайн этикетки минималистичный, но&nbsp;для партнеров из&nbsp;ресторанов и&nbsp;отелей будет доступна опция кастомизировать её&nbsp;в&nbsp;соответствии с&nbsp;собственным фирменным стилем</p>
        </div>
    </div>
  )
}

export default ShowPage