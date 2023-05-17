import React, { useRef, useState} from 'react'; // Добавляем {useRef}
import CountUp, { useCountUp } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


function CardStatisticsPage(props) {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (visible) => {
    if (visible) {
      setIsVisible(true);
    }
  };

  const counterRef = useRef(null);

  useCountUp({
    ref: counterRef,
    end: isVisible ? props.el_all_count : 0,
    duration: 1.5,
    separator: ",",
    decimals: 1
  });

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
        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
          {({ isVisible }) => (
            <span ref={counterRef} className='cardStatisticsPage_Information_down_Caption'>
              {props.el_all_count}
            </span>
          )}
        </VisibilitySensor>
        <VisibilitySensor onChange={onVisibilityChange}>
   <span ref={currentCounterRef}></span>
</VisibilitySensor>

      </div>
    </div>
  );
}

export default CardStatisticsPage;