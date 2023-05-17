import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footerLogoPart1'>
        <Link href="https://pinskiy.co/restaurant/simach">
          <Image className='imageLogoSupport logo1' src="/logo1.svg" width="200" height="80" />
        </Link>
        <Link href="https://rawtogo.ru">
          <Image className='imageLogoSupport logo2' src="/logo2.svg" width="200" height="80" />
        </Link>
        <Link href="https://lobby.moscow/ru">
          <Image className='imageLogoSupport logo3' src="/logo3.svg" width="200" height="80" />
        </Link>
        <Link href="https://km20food.ru">
          <Image className='imageLogoSupport logo4' src="/logo4.svg" width="200" height="80" />
        </Link>
      </div>
      <div className='footerLogoPart2'>
        <Link href="https://fresas.restaurant">
          <Image className='imageLogoSupport logo5' src="/logo5.svg" width="200" height="80" />
        </Link>
        <Link href="https://cinema1909.ru">
          <Image className='imageLogoSupport logo6' src="/logo6.svg" width="200" height="80" />
        </Link>
        <Link href="https://saviv.ru">
          <Image className='imageLogoSupport logo7' src="/logo7.svg" width="200" height="80" />
        </Link>
      </div>
    </footer>
  )
}

export default Footer