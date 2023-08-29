import React, { useRef, useEffect, useState } from 'react';

function CardStatisticsPage(props) {
  const captionRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = captionRef.current;
    const count = parseFloat(props.el_all_count.replace(',', '.'));

    let currentCount = 0;
    let countInterval;

    const startCountInterval = () => {
      countInterval = setInterval(() => {
        currentCount += count / 100;
        if (currentCount >= count) {
          clearInterval(countInterval);
          currentCount = count;
        }
        if (element) {
          element.textContent = currentCount.toFixed(1);
        }
      }, 10);
    };

    // Создаем экземпляр Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Если компонент находится в зоне видимости, запускаем анимацию
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          startCountInterval();
        } else {
          setIsIntersecting(false);
          clearInterval(countInterval);
        }
      });
    });

    // Начинаем наблюдение за компонентом
    if (element) {
      observer.observe(element);
    }

    // Отменяем наблюдение при размонтировании компонента
    return () => {
      clearInterval(countInterval);
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [props.el_all_count]);

  return (
    <div className='cardStatisticsPage'>
      {/* Top */}
      <div className='cardStatisticsPage_Information_top'>
        <span className='cardStatisticsPage_Information_top_Caption'>
          [ {props.el_count} ]
        </span>
        <span className='cardStatisticsPage_Information_top_Description'>
          {props.el}
        </span>
      </div>
      {/* Center */}
      <div className='cardStatisticsPage_Information_center'>
        <p className='cardStatisticsPage_Information_center_Static'>
          {props.el_name}
          <span className='cardStatisticsPage_Information_center_Static_Caption'>
            {props.el_name_alt}
          </span>
        </p>
        <div className='cardStatisticsPage_Information_center_Static_Count_List'>
          <span className='cardStatisticsPage_Information_center_Static_Count'>
            {props.el_static_1}
          </span>
          <span className='cardStatisticsPage_Information_center_Static_Count'>
            {props.el_static_2}
          </span>
        </div>
      </div>
      {/* Down */}
      <div className='cardStatisticsPage_Information_down'>
            <span className='cardStatisticsPage_Information_down_Caption' ref={captionRef}>
              {props.el_all_count}
            </span>
      </div>
    </div>
  );
}

export default CardStatisticsPage;