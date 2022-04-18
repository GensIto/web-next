import Link from 'next/link';
import Image from 'next/image';
import Gnav from '@/components/common/Gnav';

const Header = () => {
  return (
    <header className='l-header' id='js-header'>
      <div className='l-header__container'>
        <div className='c-logo p-logo p-logo--type_header'>
          <Link href='/'>
            <a className='c-logo__inner'>
              <Image src="/img/logo/logo.svg" layout="fill" objectFit="cover" alt="logo" />
              {/* <img src='/public/img/logo/logo.svg' className='c-logo__item' alt='logo' /> */}
            </a>
          </Link>
        </div>

        <Gnav />

        {/* hambuarger */}
        <div className='p-hamburger' id='js-gnav-trg'>
          <div className='p-hamburger__container'>
            <span className='p-hamburger__item'></span>
            <span className='p-hamburger__item'></span>
            <span className='p-hamburger__item'></span>
          </div>
        </div>

      </div>{/* l-header__container */}
    </header>
  );
};

export default Header;
