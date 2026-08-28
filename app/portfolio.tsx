import { copy as t, projects } from './content';
import { SiteFooter } from '../components/site-footer';
import type { PhotographyItem } from '../lib/photography';

export function Portfolio({
  photographyPreview,
}: {
  photographyPreview: PhotographyItem[];
}) {
  return (
    <main id="top">
      <header className="site-header">
        <a href="#top" className="monogram">
          LSJ<sup>®</sup>
        </a>
        <nav>
          <a href="#work">作品</a>
          <a href="/archive">视觉档案</a>
          <a href="/about">关于</a>
          <a
            className="nav-resume"
            href="/Li-Sijing-Resume.pdf"
            target="_blank"
          >
            查看简历 ↗
          </a>
        </nav>
      </header>
      <section className="hero">
        <p className="eyebrow">{t.available}</p>
        <p className="hero-role">{t.role}</p>
        <h1>
          <span>LI SIJING</span>
          <span className="outline">李思婧</span>
        </h1>
        <figure className="hero-photo">
          <img src="/assets/hero.webp" alt="李思婧在热带植物前的生活照" />
          <figcaption>肖像 / 吉隆坡</figcaption>
        </figure>
        <p className="hero-index">[ 01 — 05 ]</p>
        <a href="#about" className="scroll-cue">
          {t.scroll} ↓
        </a>
        <div className="accent-stroke" />
      </section>
      <section className="intro" id="about">
        <p className="section-label">{t.introKicker}</p>
        <p className="intro-copy">{t.intro}</p>
        <a className="text-link" href="/Li-Sijing-Resume.pdf" target="_blank">
          {t.resume}
        </a>
      </section>
      <section className="work" id="work">
        <div className="section-head">
          <h2>{t.selected}</h2>
          <p>{t.selectedMeta}</p>
        </div>
        <div className="projects">
          {projects.map((p, i) => (
            <article className={`project project-${i + 1}`} key={p.slug}>
              <a href={`/work/${p.slug}`} className="project-image">
                <img src={p.image} alt={`${p.title} 项目视觉`} />
              </a>
              <div className="project-copy">
                <span className="project-no">/{p.no}</span>
                <p className="discipline">{p.discipline}</p>
                <h3>
                  <a href={`/work/${p.slug}`}>{p.title}</a>
                </h3>
                <p className="project-note">{p.note}</p>
                <div className="project-links">
                  <a className="text-link" href={`/work/${p.slug}`}>
                    {t.view}
                  </a>
                  {p.slug === 'xiaohongshu' && (
                    <a
                      className="text-link xhs-link"
                      href="https://xhslink.cn/m/2zsavbquSS2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t.xiaohongshu}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="archive archive-preview" id="archive">
        <div className="section-head">
          <h2>{t.archive}</h2>
          <p>{t.archiveMeta}</p>
        </div>
        <div className="archive-preview-copy">
          <p>Photography / Visual Notes</p>
          <p>
            视觉档案
            <br />
            <em>A collection of things I saw and kept.</em>
          </p>
          <a href="/archive">查看视觉档案 →</a>
        </div>
        <div className="archive-preview-images">
          {photographyPreview.map((photo, index) => (
            <a
              href="/archive"
              className={`archive-preview-image preview-${index + 1}`}
              key={photo.id}
            >
              <img
                loading="lazy"
                src={photo.image}
                alt={`视觉档案预览 ${String(index + 1).padStart(2, '0')}`}
                width={photo.width}
                height={photo.height}
              />
              <span>{String(index + 1).padStart(3, '0')}</span>
            </a>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
