import { withBasePath } from '@/lib/deployment-path';
import type { Metadata } from 'next';
import { projects } from '../../content';
import { MynutchosCaseStudy } from './mynutchos-case-study';
import { XiaohongshuCaseStudy } from './xiaohongshu-case-study';
import { ChageeCaseStudy } from './chagee-case-study';
import './case-study.css';
import './xiaohongshu.css';
import './chagee.css';
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return {
    title: p ? `${p.title} — 李思婧` : '项目 — 李思婧',
    description: p?.note,
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug === 'mynutchos') return <MynutchosCaseStudy />;
  if (slug === 'xiaohongshu') return <XiaohongshuCaseStudy />;
  if (slug === 'teaverse-chagee') return <ChageeCaseStudy />;
  const p = projects.find((x) => x.slug === slug) ?? projects[0];
  return (
    <main className="placeholder">
      <a href={withBasePath('/')}>← 返回首页</a>
      <p>CASE STUDY / COMING SOON</p>
      <h1>{p.title}</h1>
      <img src={withBasePath(p.image)} alt="" />
      <p>此路由已建立，完整项目详情将在下一阶段制作。</p>
    </main>
  );
}
