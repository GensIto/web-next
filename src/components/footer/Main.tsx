import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="l-footer">
      <div className="l-footer__top">
        <div className="l-footer__container l-footer__container--has_grid">
          <div className="l-footer__grid">
            <div className="c-logo p-logo p-logo--type_footer">
              <Link href="/">
                <a className="c-logo__inner">
                  <Image className="" src="/img/logo/logo.svg" layout="fill" alt="logo" />
                  {/* <Image className="c-logo__item" src="/img/logo/logo.svg" layout="fill" alt="logo" /> */}
                </a>
              </Link>
            </div>
          </div>{/* l-footer__grid */}
          <div className="l-footer__grid">
            <div className="p-sitemap">
              <ul className="p-sitemap__list">
                <li className="p-sitemap__divider">
                  <Link href="/test">
                    <a className="p-sitemap__item">hoge</a>
                  </Link>
                </li>
                <li className="p-sitemap__divider">
                  <Link href="/test">
                    <a className="p-sitemap__item">fuga</a>
                  </Link>
                </li>
                <li className="p-sitemap__divider">
                  <Link href="/test">
                    <a className="p-sitemap__item">piyo</a>
                  </Link>
                </li>
              </ul>
            </div>{/* p-sitemap */}
          </div>{/* l-footer__grid */}
        </div>{/* l-footer__container */}
      </div>{/* l-footer__top */}

      <div className="l-footer__bottom">
        <div className="l-footer__container">
          <ul className="p-sns">
            <li className="p-sns__divider">
              <a href="https://www.facebook.com/" className="p-sns__item" target="_blank" rel="noreferrer">
                <Image src="/img/icon/facebook.svg" layout="fill" objectFit="cover" alt="facebook" />
                {/* <Image src="/img/icon/facebook.svg" layout="fill" className="p-sns__icon" alt="facebook" /> */}
              </a>
            </li>
            <li className="p-sns__divider">
              <a href="https://www.instagram.com/" className="p-sns__item" target="_blank" rel="noreferrer">
                <Image src="/img/icon/insta.svg" layout="fill" objectFit="cover" alt="instagram" />
                {/* <Image src="/img/icon/insta.svg" layout="fill" className="p-sns__icon" alt="instagram" /> */}
              </a>
            </li>
            <li className="p-sns__divider">
              <a href="https://twitter.com/" className="p-sns__item" target="_blank" rel="noreferrer">
                <Image src="/img/icon/twitter.svg" layout="fill" objectFit="cover" alt="twitter" />
                {/* <Image src="/img/icon/twitter.svg" layout="fill" className="p-sns__icon" alt="twitter" /> */}
              </a>
            </li>
          </ul>
          {/* copy */}
          <p className="p-copy">&copy; 2020 hoge</p>
        </div>{/* l-footer__container */}
      </div>{/* l-footer__bottom */}

    </footer>
  );
};

export default Footer;
