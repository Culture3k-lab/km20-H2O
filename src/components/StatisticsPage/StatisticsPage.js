import React from 'react';
import CardStatisticsPage from '../Card/CardStatisticsPage/CardStatisticsPage';
import { gsap } from 'gsap';

function StatisticsPage() {
    const elements = [
        {
            el_count: "20",
            el: "Ca",
            el_name: "Кальций",
            el_name_alt: "Calcium",
            el_static_1: "40,078",
            el_static_2: "4s2",
            el_all_count: "36,0"
        },
        {
            el_count: "11",
            el: "Na",
            el_name: "Натрий",
            el_name_alt: "Natrium",
            el_static_1: "22,989",
            el_static_2: "3s1",
            el_all_count: "1,51"
        },
        {
            el_count: "12",
            el: "Mg",
            el_name: "Магний",
            el_name_alt: "Magnesium",
            el_static_1: "24,3050",
            el_static_2: "3s2",
            el_all_count: "1,00"
        },
        {
            el_count: "19",
            el: "K",
            el_name: "Калий",
            el_name_alt: "Kalium",
            el_static_1: "39,098",
            el_static_2: "4s1",
            el_all_count: "0,80"
        }
    ];

    return (
        <div className='statisticsPage'>
            {elements.map((element, index) => (
                <CardStatisticsPage
                    key={index}
                    el_count={element.el_count}
                    el={element.el}
                    el_name={element.el_name}
                    el_name_alt={element.el_name_alt}
                    el_static_1={element.el_static_1}
                    el_static_2={element.el_static_2}
                    el_all_count={element.el_all_count}
                />
            ))}

        </div>
    )
}

export default StatisticsPage