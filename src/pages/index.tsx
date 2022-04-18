import type {NextPageWithLayout} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Meta from '@/components/meta/Main';
import Layout from '@/components/layout/Main';

const Home: NextPageWithLayout = () => {
  return (
    <>
      {/* Meta */}
      <Meta title="Website Template" description="Website Template Description" />

      {/* Head */}
      <Head>

      </Head>

      <div className="l-home-kv">
        <div className="l-home-kv__container">
          <div className="s-home-kv-title">
            <h1 className="s-home-kv-title__item">home key visual</h1>
          </div>
        </div>
        <div className="l-home-kv__image">
          <Image src="/img/other/dummy.jpg" layout="fill" objectFit="cover" alt="" />
          {/* <img className="js-ofi" src="./assets/img/other/dummy.jpg" alt="" /> */}
        </div>
      </div>

      <div id="js-header-trg"></div>

      <section className="l-section l-section--gap_top-l">
        <div className="l-container">
          <h1 className="p-title">title</h1>
          <div className="c-sentence">
            <p className="c-sentence__item">それからちょうど七年たったのです。ファゼーロたちの組合は、はじめはなかなかうまく行かなかったのでしたが、それでもどうにか面白く続けることができたのでした。</p>
            <p className="c-sentence__item">私はそれから何べんも遊びに行ったり相談のあるたびに友だちにきいたりして、それから三年の後には、とうとうファゼーロたちは立派な一つの産業組合をつくり、ハムと皮類と醋酸とオートミールはモリーオの市やセンダードの市はもちろん、広くどこへも出るようになりました。</p>
            <div className="c-sentence__item">
              <ul className="c-list">
                <li className="c-list__item">つめくさ灯ともす 夜のひろば
                  <ul className="c-list">
                    <li className="c-list__item">むかしのラルゴを うたいかわし<br />雲をもどよもし 夜風にわすれて</li>
                    <li className="c-list__item">とりいれまぢかに 年ようれぬ</li>
                  </ul>
                </li>
                <li className="c-list__item">まさしきねがいに いさかうとも</li>
              </ul>
            </div>
            <div className="c-sentence__item">
              <ol className="c-ordered-list">
                <li className="c-ordered-list__item">まさしきねがいに いさかうとも</li>
                <li className="c-ordered-list__item">銀河のかなたに ともにわらい
                  <ol className="c-ordered-list">
                    <li className="c-ordered-list__item">まさしきねがいに いさかうとも</li>
                    <li className="c-ordered-list__item">銀河のかなたに ともにわらい<br /> 銀河のかなたに ともにわらい</li>
                  </ol>
                </li>
                <li className="c-ordered-list__item">なべてのなやみを たきぎともしつつ</li>
                <li className="c-ordered-list__item">はえある世界を ともにつくらん</li>
              </ol>
            </div>
          </div>
          <div className="p-btn">
            <Link href="/test">
              <a className="p-btn__item">
                <p className="p-btn__txt">もっと見る</p>
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section className="l-section l-section--gap_bottom-lg">
        <div className="l-container">
          <h1 className="p-title">news</h1>
          <ul className="p-article-list">
            <li className="p-article-list__item">
              <a className="p-article-list__inner" href="#">
                <div className="p-article-list__head">
                  <time className="p-article-list__date" dateTime="2020-07-07">2020.07.07 tue</time>
                  <h2 className="p-article-list__title">二、つめくさのあかり</h2>
                </div>
                <div className="p-article-list__body">
                  <p className="p-article-list__txt">それからちょうど十日ばかりたって、夕方、わたくしが役所から帰って両手でカフスをはずしていましたら、いきなりあのファゼーロが、戸口から顔を出しました。</p>
                </div>
              </a>
            </li>
            <li className="p-article-list__item">
              <a className="p-article-list__inner" href="#">
                <div className="p-article-list__head">
                  <time className="p-article-list__date" dateTime="2020-07-07">2020.07.07 tue</time>
                  <h2 className="p-article-list__title">そしてわたくしが、まだびっくりしているうちに、</h2>
                </div>
                <div className="p-article-list__body">
                  <p className="p-article-list__txt">「とうとう来たよ、今晩は。」と云いました。</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>
};

export default Home;
