import { SiteFooter } from '../../../components/site-footer';

const text = {
  zh: {
    back: '返回首页',
    role: '品牌传播 / 社交媒体活动',
    overview: '项目概览',
    background: '项目背景',
    backgroundText:
      'MyNutchos 是融合腰果与小鱼干的马来西亚零食品牌。本项目为品牌开发一套 Marketing Kit，以 “Cinema of Voices” 为灵感，将每一口的酥脆声转化为视觉叙事，并通过 Instagram 内容与马来亚大学校园 Pop-up 连接线上传播与真实体验。',
    myRole: '我的角色',
    roleText:
      '品牌视觉识别与数字内容运营；参与社交媒体管理，以设计能力支持活动视觉体系和数字内容执行。',
    objective: '目标',
    objectiveText:
      '强化品牌识别，以年轻、可分享、可互动的传播方式触达大学生与年轻社交媒体用户，并建立线上预热到线下体验的完整路径。',
    deliverables: '项目产出',
    deliverablesText:
      '活动视觉体系、Instagram 内容、海报与动态预热、产品摄影、周边视觉、校园 Pop-up 与活动回顾。',
    direction: '视觉方向',
    directionIntro:
      '“Every Crunch Has a Voice” 将声音、节奏与零食体验连接起来。紫色与黄色构成大胆而年轻的识别，动态构图、声音波形和俏皮角色让传播保持可分享性。',
    photography: '产品摄影',
    photoIntro:
      '通过自然环境、礼盒情境与细节特写，让产品在“马来西亚伴手礼”与日常生活方式之间建立连接。',
    social: '社交媒体活动',
    socialIntro:
      '以人物内容建立亲近感，以连续 Feed、品牌图形和现场记录保持活动前后的视觉一致性。',
    popup: 'Pop-up Campaign',
    popupIntro:
      '传播从预热开始，经过倒计时与校园发布，最终用活动回顾把线下互动重新带回社交媒体。',
    tease: '预热',
    countdown: '倒计时',
    launch: '发布',
    recap: '回顾',
    teaseText: '用动态海报首次引出声音、节奏与 “Every Crunch Has a Voice”。',
    countdownText: '连续三天的视觉提醒建立辨识度与期待。',
    launchText:
      '2026 年 5 月 11–13 日，校园 Pop-up 通过试吃、抽奖与 Instagram Story 分享连接线上与线下。',
    recapText: '活动结束后以 Feed、Reel 与现场影像整理传播过程。',
    motion: '播放动态预热',
    behind: '项目幕后',
    behindIntro:
      '从拍摄、物料准备到现场搭建与观众互动，传播概念在反复调整和协作中变成真实体验。',
    reflection: '复盘',
    reflectionText:
      '这次项目让我更具体地理解：品牌一致性不只存在于画面，也存在于内容节奏、物料细节与观众参与方式中。团队在 Instagram 推广、周边制作和 Pop-up 互动之间建立了连贯的体验。',
    next: '下一个项目',
    nextName: 'Xiaohongshu →',
    campaignMeta: 'MyNutchos × MEDKOM 33 / Marketing Kit Project',
  },
  en: {
    back: 'Back home',
    role: 'Brand Communication / Social Campaign',
    overview: 'Project Overview',
    background: 'Background',
    backgroundText:
      'MyNutchos is a Malaysian snack brand combining cashew nuts and anchovies. This Marketing Kit project drew on “Cinema of Voices,” translating the crunch of each bite into visual storytelling and connecting Instagram content with a campus pop-up at Universiti Malaya.',
    myRole: 'My Role',
    roleText:
      'Visual identity and digital content operations; contributing design expertise and social media management to the campaign system and its digital execution.',
    objective: 'Objective',
    objectiveText:
      'Strengthen brand identity through youthful, shareable and interactive communication for university students and young social media users, connecting online anticipation with an offline experience.',
    deliverables: 'Deliverables',
    deliverablesText:
      'Campaign visual system, Instagram content, posters and motion teasers, product photography, merchandise visuals, campus pop-up and campaign recap.',
    direction: 'Visual Direction',
    directionIntro:
      '“Every Crunch Has a Voice” connects sound, rhythm and the snacking experience. Purple and yellow create a bold, youthful identity; dynamic composition, sound waves and playful characters keep it social and shareable.',
    photography: 'Product Photography',
    photoIntro:
      'Natural settings, gifting scenes and close details position the product between a Malaysian souvenir and an everyday lifestyle object.',
    social: 'Social Campaign',
    socialIntro:
      'Character-led content builds familiarity while connected feeds, brand graphics and live moments maintain continuity before, during and after launch.',
    popup: 'Pop-up Campaign',
    popupIntro:
      'The story moved from anticipation to countdown and campus launch, then returned the offline experience to social media through a recap.',
    tease: 'Tease',
    countdown: 'Countdown',
    launch: 'Launch',
    recap: 'Recap',
    teaseText:
      'A motion poster introduced sound, rhythm and “Every Crunch Has a Voice.”',
    countdownText: 'A three-day sequence built recognition and anticipation.',
    launchText:
      'From 11–13 May 2026, the campus pop-up connected sampling, lucky draws and Instagram Story sharing.',
    recapText:
      'Feed posts, a Reel and event imagery brought the campaign journey together.',
    motion: 'Play motion teaser',
    behind: 'Behind the Project',
    behindIntro:
      'From shooting and material preparation to setup and audience interaction, the concept became a real experience through iteration and teamwork.',
    reflection: 'Reflection',
    reflectionText:
      'The project made clear that brand consistency lives not only in images, but also in content rhythm, physical details and how audiences participate. The team connected Instagram promotion, merchandise production and pop-up interaction into one experience.',
    next: 'Next Project',
    nextName: 'Xiaohongshu →',
    campaignMeta: 'MyNutchos × MEDKOM 33 / Marketing Kit Project',
  },
} as const;
const products = [
  'product-01.webp',
  'product-02.webp',
  'product-03.webp',
  'product-04.webp',
  'product-05.webp',
  'product-06.webp',
];
const behind = [
  'bts-01.webp',
  'bts-02.webp',
  'bts-03.webp',
  'bts-04.webp',
  'bts-05.webp',
  'bts-06.webp',
];
export function MynutchosCaseStudy() {
  const t = text.zh;
  return (
    <main className="mn" id="mn-top">
      <header className="mn-nav">
        <a href="/">← {t.back}</a>
        <span>MYNUTCHOS / 2026</span>
        <a href="/Li-Sijing-Resume.pdf" target="_blank">查看简历 ↗</a>
      </header>
      <section className="mn-hero">
        <div className="mn-hero-meta">
          <p>{t.role}</p>
          <p>2026</p>
        </div>
        <h1>MYNUTCHOS</h1>
        <figure>
          <img
            src="/assets/mynutchos.webp"
            alt="MyNutchos Malaysian spiced bites product composition"
          />
          <figcaption>{t.campaignMeta}</figcaption>
        </figure>
        <p className="mn-tagline">
          EVERY CRUNCH
          <br />
          HAS A <em>VOICE.</em>
        </p>
      </section>
      <section className="mn-overview">
        <header>
          <span>02</span>
          <h2>{t.overview}</h2>
        </header>
        <div className="overview-lead">
          <p>{t.backgroundText}</p>
        </div>
        <div className="overview-grid">
          <article>
            <h3>{t.background}</h3>
            <p>
              MyNutchos × MEDKOM 33，MOMENTUS 2026 Marketing Kit Project。
            </p>
          </article>
          <article>
            <h3>{t.myRole}</h3>
            <p>{t.roleText}</p>
          </article>
          <article>
            <h3>{t.objective}</h3>
            <p>{t.objectiveText}</p>
          </article>
          <article>
            <h3>{t.deliverables}</h3>
            <p>{t.deliverablesText}</p>
          </article>
        </div>
      </section>
      <section className="mn-direction">
        <div className="mn-section-title">
          <span>03</span>
          <h2>{t.direction}</h2>
          <p>{t.directionIntro}</p>
        </div>
        <figure className="mood">
          <img
            loading="lazy"
            src="/assets/mynutchos/moodboard.webp"
            alt="MyNutchos visual direction moodboard"
          />
          <figcaption>MOODBOARD / PLAYFUL · BOLD · INTERACTIVE</figcaption>
        </figure>
        <figure className="logo-study">
          <img
            loading="lazy"
            src="/assets/mynutchos/logo-yellow.webp"
            alt="Yellow MyNutchos logo"
          />
          <figcaption>LOGO / CAMPAIGN PALETTE</figcaption>
        </figure>
        <figure className="poster-study">
          <img
            loading="lazy"
            src="/assets/mynutchos-poster.webp"
            alt="Every Crunch Has a Voice poster"
          />
          <figcaption>HERO POSTER / 05.2026</figcaption>
        </figure>
      </section>
      <section className="mn-products">
        <div className="mn-section-title light">
          <span>04</span>
          <h2>{t.photography}</h2>
          <p>{t.photoIntro}</p>
        </div>
        <div className="product-editorial">
          {products.map((x, i) => (
            <figure className={`prod prod-${i + 1}`} key={x}>
              <img
                loading="lazy"
                src={`/assets/mynutchos/${x}`}
                alt={`MyNutchos product photograph ${i + 1}`}
              />
              <figcaption>
                PRODUCT STUDY / {String(i + 1).padStart(2, '0')}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="mn-social">
        <div className="mn-section-title">
          <span>05</span>
          <h2>{t.social}</h2>
          <p>{t.socialIntro}</p>
        </div>
        <div className="portrait-strip">
          <img
            loading="lazy"
            src="/assets/mynutchos/portrait-alina.webp"
            alt="MyNutchos character content Alina"
          />
          <img
            loading="lazy"
            src="/assets/mynutchos/portrait-saffi.webp"
            alt="MyNutchos character content Saffi"
          />
          <img
            loading="lazy"
            src="/assets/mynutchos/portrait-raf.webp"
            alt="MyNutchos character content Raffaella"
          />
        </div>
        <div className="social-spread">
          <figure>
            <img
              loading="lazy"
              src="/assets/mynutchos/ig-feed.webp"
              alt="MyNutchos Instagram feed design"
            />
            <figcaption>TRIPLE GRID / FEED SYSTEM</figcaption>
          </figure>
          <figure>
            <img
              loading="lazy"
              src="/assets/mynutchos/ig-screen-01.webp"
              alt="MyNutchos Instagram campaign screen"
            />
            <figcaption>CAMPAIGN IN CONTEXT / 01</figcaption>
          </figure>
          <figure>
            <img
              loading="lazy"
              src="/assets/mynutchos/ig-screen-02.webp"
              alt="MyNutchos Instagram campaign screen"
            />
            <figcaption>CAMPAIGN IN CONTEXT / 02</figcaption>
          </figure>
        </div>
      </section>
      <section className="mn-popup">
        <div className="mn-section-title light">
          <span>06</span>
          <h2>{t.popup}</h2>
          <p>{t.popupIntro}</p>
        </div>
        <ol className="campaign-flow">
          <li>
            <b>01</b>
            <h3>{t.tease}</h3>
            <p>{t.teaseText}</p>
          </li>
          <li>
            <b>02</b>
            <h3>{t.countdown}</h3>
            <p>{t.countdownText}</p>
          </li>
          <li>
            <b>03</b>
            <h3>{t.launch}</h3>
            <p>{t.launchText}</p>
          </li>
          <li>
            <b>04</b>
            <h3>{t.recap}</h3>
            <p>{t.recapText}</p>
          </li>
      </ol>
      <div className="campaign-results">
        <p><strong>+240</strong><span>新增关注者</span></p>
        <p><strong>300+</strong><span>份试吃样品</span></p>
        <p><strong>50+</strong><span>名抽奖参与者</span></p>
      </div>
      <div className="popup-media">
          <figure className="motion">
            <video
              controls
              preload="none"
              playsInline
              poster="/assets/mynutchos/countdown-01.webp"
            >
              <source
                src="/assets/mynutchos/teaser-motion.mp4"
                type="video/mp4"
              />
            </video>
            <figcaption>{t.motion} / PRELOAD: NONE</figcaption>
          </figure>
          <div className="countdowns">
            {[1, 2, 3].map((i) => (
              <img
                loading="lazy"
                key={i}
                src={`/assets/mynutchos/countdown-0${i}.webp`}
                alt={`MyNutchos countdown ${i}`}
              />
            ))}
          </div>
          <figure className="popup-poster">
            <img
              loading="lazy"
              src="/assets/mynutchos/popup-poster.webp"
              alt="MyNutchos pop-up campaign poster"
            />
            <figcaption>LAUNCH / CAMPUS POP-UP</figcaption>
          </figure>
          <figure className="popup-recap">
            <img
              loading="lazy"
              src="/assets/mynutchos/popup-recap.webp"
              alt="MyNutchos pop-up recap graphic"
            />
            <figcaption>RECAP / BACK TO SOCIAL</figcaption>
          </figure>
        </div>
      </section>
      <section className="mn-behind">
        <div className="mn-section-title">
          <span>07</span>
          <h2>{t.behind}</h2>
          <p>{t.behindIntro}</p>
        </div>
        <div className="contact-sheet">
          {behind.map((x, i) => (
            <figure key={x}>
              <img
                loading="lazy"
                src={`/assets/mynutchos/${x}`}
                alt={`MyNutchos behind the project ${i + 1}`}
              />
              <figcaption>
                {String(i + 1).padStart(2, '0')} / FIELD NOTE
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="mn-end">
        <p className="end-label">08 / {t.reflection}</p>
        <p className="reflection">{t.reflectionText}</p>
        <a href="/work/xiaohongshu">
          <span>{t.next}</span>
          {t.nextName}
        </a>
      </section>
      <SiteFooter />
    </main>
  );
}
