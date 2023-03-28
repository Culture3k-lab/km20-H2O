import React from 'react'
import CardStatisticsPage from '../Card/CardStatisticsPage/CardStatisticsPage'

function StatisticsPage() {
  return (
    <div className='statisticsPage'>
        <CardStatisticsPage
            el_count="20"
            el="Ca"
            el_name="Кальций"
            el_name_alt="Calcium"
            el_static_1="40,078"
            el_static_2="4s2"
            el_all_count="36,0"
        />
        <CardStatisticsPage
            el_count="11"
            el="Na"
            el_name="Натрий"
            el_name_alt="Natrium"
            el_static_1="22,989"
            el_static_2="3s1"
            el_all_count="1,51"
        />
        <CardStatisticsPage
            el_count="12"
            el="Mg"
            el_name="Магний"
            el_name_alt="Magnesium"
            el_static_1="24,3050"
            el_static_2="3s2"
            el_all_count="1,00"
        />
        <CardStatisticsPage
            el_count="19"
            el="K"
            el_name="Калий"
            el_name_alt="Kalium"
            el_static_1="39,098"
            el_static_2="4s1"
            el_all_count="0,80"
        />
    </div>
  )
}

export default StatisticsPage