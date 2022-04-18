import {ReactNode} from 'react';
import Head from 'next/head';
import Header from '@/components/header/Main';
import Footer from '@/components/footer/Main';

type Props = {
  children?: ReactNode;
  bodyClassName?: string,
  mainClassName?: string,
};

const classNameData = {
  body: 'l-body',
  main: 'l-main',
}

const Layout = ({children, bodyClassName = classNameData.body,  mainClassName = classNameData.main}: Props) => {
  return (
    <>
      <Head>

      </Head>

      <div className={bodyClassName} id="js-body">

        <Header />

        <main className={mainClassName} id="js-main">
          {children}
        </main>

        <Footer />

        <div className="p-modal-layer" id="js-modal-layer"></div>

      </div>{/* .l-body */}
    </>
  );
};

export default Layout;
