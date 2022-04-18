import Link from 'next/link';
// import Image from 'next/image';

const Gnav = () => {
  return (
    <nav className="p-gnav" id="js-gnav">
      <ul className="p-gnav__list">
        <li className="p-gnav__divider">
          <Link href="/test">
            <a className="p-gnav__item js-gnav__item">hoge</a>
          </Link>
        </li>
        <li className="p-gnav__divider">
          <Link href="/test">
            <a className="p-gnav__item js-gnav__item">fuga</a>
          </Link>
        </li>
        <li className="p-gnav__divider">
          <Link href="/test">
            <a className="p-gnav__item js-gnav__item">piyo</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Gnav;
