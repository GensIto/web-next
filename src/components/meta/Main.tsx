import Head from 'next/head';
import Image from 'next/image';
// import favicon from '@/../public/img/common/favicon';

// interface metaDataInterface {
//   title: string;
//   description: string;
//   ogpImage: string;
// }

const metaData = {
  title: 'Website Template',
  description: 'Website Template Description',
  ogpImage: `${process.env.SITE_URL}/public/img/common/favicon.png`,
};

const Meta = ({title = metaData.title, description = metaData.description, ogpImage = metaData.ogpImage}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <link rel="icon" href="/img/common/favicon.png"/>
      <link rel="apple-touch-icon" href="/img/common/apple-touch-icon.png"/>
      <meta property="og:image" content={ogpImage} />
    </Head>
  );
};

export default Meta;
