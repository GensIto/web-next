import type {NextPageWithLayout} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Meta from '@/components/meta/Main';
import Layout from '@/components/layout/Main';
import {Accordion, AccordionSummary, AccordionDetails} from '@/components/common/Accordion';

const Home: NextPageWithLayout = () => {
  return (
    <>
      {/* Meta */}
      <Meta title="Test | Website Template" description="test, Website Template Description" />

      {/* Head */}
      <Head>

      </Head>

      <div className="l-kv">
        <div className="l-kv__container">
          <div className="p-kv-title">
            <h1 className="p-kv-title__item">test</h1>
          </div>
        </div>
        <div className="l-kv__image">
          <Image src="/img/other/dummy.jpg" layout="fill" objectFit="cover" alt="" />
        </div>
      </div>

      <div id="js-header-trg"></div>

      <section className="l-section l-section--gap_top-l">
        <div className="l-container">
          <h1 className="p-title">test</h1>

          <div className="p-card">
            <div className="p-card__divider">
              <Link href="/">
                <a className="p-card__item">
                  <div className="p-card__head">
                    <div className="p-card__image">
                      <Image src="/img/other/dummy.jpg" layout="fill" objectFit="cover" alt="" />
                    </div>
                  </div>
                  <div className="p-card__body">
                    <div className="p-card__date">
                      <time dateTime="2021-07-30">2020.07.07 tue</time>
                    </div>
                    <h2 className="p-card__title">そうだって云ったねえ、わたしも小さいとき、そんなこと聞いたよ。</h2>
                    <p className="p-card__txt">それに第一にね、そこへ行くと誰でも上手に歌えるようになるって。</p>
                  </div>
                </a>
              </Link>
            </div>{/* o-card__divider */}
            <div className="p-card__divider">
              <Link href="/">
                <a className="p-card__item">
                  <div className="p-card__head">
                    <div className="p-card__image">
                      <Image src="/img/other/dummy.jpg" layout="fill" objectFit="cover" alt="" />
                    </div>
                  </div>
                  <div className="p-card__body">
                    <div className="p-card__date">
                      <time dateTime="2021-07-30">2020.07.07 tue</time>
                    </div>
                    <h2 className="p-card__title">そうだって云ったねえ、わたしも小さいとき、そんなこと聞いたよ。</h2>
                    <p className="p-card__txt">それに第一にね、そこへ行くと誰でも上手に歌えるようになるって。</p>
                  </div>
                </a>
              </Link>
            </div>{/* o-card__divider */}
            <div className="p-card__divider">
              <Link href="/">
                <a className="p-card__item">
                  <div className="p-card__head">
                    <div className="p-card__image">
                      <Image src="/img/other/dummy.jpg" layout="fill" objectFit="cover" alt="" />
                    </div>
                  </div>
                  <div className="p-card__body">
                    <div className="p-card__date">
                      <time dateTime="2021-07-30">2020.07.07 tue</time>
                    </div>
                    <h2 className="p-card__title">そうだって云ったねえ、わたしも小さいとき、そんなこと聞いたよ。</h2>
                    <p className="p-card__txt">それに第一にね、そこへ行くと誰でも上手に歌えるようになるって。</p>
                  </div>
                </a>
              </Link>
            </div>{/* o-card__divider */}
            <div className="p-card__divider">
              <Link href="/">
                <a className="p-card__item">
                  <div className="p-card__head">
                    <div className="p-card__image">
                      <Image src="/img/other/dummy.jpg" layout="fill" objectFit="cover" alt="" />
                    </div>
                  </div>
                  <div className="p-card__body">
                    <div className="p-card__date">
                      <time dateTime="2021-07-30">2020.07.07 tue</time>
                    </div>
                    <h2 className="p-card__title">そうだって云ったねえ、わたしも小さいとき、そんなこと聞いたよ。</h2>
                    <p className="p-card__txt">それに第一にね、そこへ行くと誰でも上手に歌えるようになるって。</p>
                  </div>
                </a>
              </Link>
            </div>{/* o-card__divider */}
            <div className="p-card__divider">
              <Link href="/">
                <a className="p-card__item">
                  <div className="p-card__head">
                    <div className="p-card__image">
                      <Image src="/img/other/dummy.jpg" layout="fill" objectFit="cover" alt="" />
                    </div>
                  </div>
                  <div className="p-card__body">
                    <div className="p-card__date">
                      <time dateTime="2021-07-30">2020.07.07 tue</time>
                    </div>
                    <h2 className="p-card__title">そうだって云ったねえ、わたしも小さいとき、そんなこと聞いたよ。</h2>
                    <p className="p-card__txt">それに第一にね、そこへ行くと誰でも上手に歌えるようになるって。</p>
                  </div>
                </a>
              </Link>
            </div>{/* o-card__divider */}
          </div>

          {/* btn */}
          <div className="p-btn">
            <Link href="/">
              <a className="p-btn__item">
                <p className="p-btn__txt">もっと見る</p>
              </a>
            </Link>
          </div>
        </div>{/* l-container */}
      </section>

      <section className="l-section l-section--gap_bottom-lg">
        <div className="l-container">
          <h1 className="p-title">accordion</h1>

          {/* divider */}
          <div className="c-divider">
            <div className="c-divider p-accordion">
              <div className="c-accordion__head p-accordion__head">
                <h2 className="p-accordion__title">ミーロもうなずきました。</h2>
              </div>{/* accordion__head */}
              <div className="c-accordion__body p-accordion__body">
                <p className="p-article-overview__txt">元来ミーロなんかよほど歌がうまいのだろうとわたくしは思いました。</p>
                <p className="p-article-overview__txt">「ぼくは小さいときはいつでもいまごろ野原へ遊びに出た。」ファゼーロが云いました。</p>
                <p className="p-article-overview__txt">「そうかねえ。」</p>
              </div>
            </div>
            <Accordion wrapperClassNameStr="c-accordion">
              <AccordionSummary>
                <div className="c-accordion__head p-accordion__head">
                  <h2 className="p-accordion__title">ミーロもうなずきました。2</h2>
                </div>{/* accordion__head */}
              </AccordionSummary>
              <AccordionDetails>
                <div className="c-accordion__body p-accordion__body">
                  <p className="p-article-overview__txt">元来ミーロなんかよほど歌がうまいのだろうとわたくしは思いました。</p>
                  <p className="p-article-overview__txt">「ぼくは小さいときはいつでもいまごろ野原へ遊びに出た。」ファゼーロが云いました。</p>
                  <p className="p-article-overview__txt">「そうかねえ。」</p>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>{/* c-divider */}
        </div>{/* l-container */}
      </section>
    </>
  );
};

Home.getLayout = (page) => {
  return <Layout mainClassName="l-main l-main--type_subpage">{page}</Layout>
};

export default Home;
