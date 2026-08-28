import type { Metadata } from 'next';
import { PhotographyArchive } from '../../components/visual-archive/photography-archive';
import { SiteFooter } from '../../components/site-footer';
import { getPublishedPhotography } from '../../lib/photography';
import './archive.css';
export const metadata: Metadata = {
  title: '视觉档案 — 李思婧',
  description: '李思婧的摄影与视觉观察档案。',
};
export default async function ArchivePage() {
  const photography = await getPublishedPhotography();

  return (
    <main className="archive-page">
      <header className="inner-nav">
        <a href="/">LSJ</a>
        <nav>
          <a href="/#work">作品</a>
          <a href="/archive" aria-current="page">
            视觉档案
          </a>
          <a href="/about">关于</a>
          <a href="/Li-Sijing-Resume.pdf" target="_blank">
            查看简历 ↗
          </a>
        </nav>
      </header>
      <section className="archive-hero">
        <p>PHOTOGRAPHY / VISUAL NOTES</p>
        <h1>
          VISUAL ARCHIVE
          <br />
          <span>视觉档案</span>
        </h1>
        <div className="archive-coordinates">
          <span>个人摄影与视觉观察</span>
          <span>2026 — ONGOING</span>
        </div>
      </section>
      <PhotographyArchive items={photography} />
      <SiteFooter />
    </main>
  );
}
