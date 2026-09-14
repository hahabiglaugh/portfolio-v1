'use client';

import { withBasePath } from '@/lib/deployment-path';

import { useEffect, useState } from 'react';
import type { PhotographyItem } from '../../lib/photography';

type PhotographyArchiveProps = {
  items: PhotographyItem[];
};

export function PhotographyArchive({ items }: PhotographyArchiveProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeItem = activeIndex === null ? null : items[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowLeft')
        setActiveIndex((activeIndex - 1 + items.length) % items.length);
      if (event.key === 'ArrowRight')
        setActiveIndex((activeIndex + 1) % items.length);
    };
    document.body.classList.add('lightbox-open');
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.classList.remove('lightbox-open');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeIndex, items.length]);

  return (
    <section className="archive-collection" aria-label="摄影作品">
      {items.map((item, index) => (
        <figure
          className={`archive-item ${item.orientation} archive-item-${(index % 6) + 1}`}
          key={item.id}
        >
          <button
            type="button"
            className="archive-image-button"
            onClick={() => setActiveIndex(index)}
            aria-label={`查看摄影作品 ${String(index + 1).padStart(3, '0')}`}
          >
            <img
              loading={index < 2 ? 'eager' : 'lazy'}
              src={withBasePath(item.image)}
              alt={
                item.title || `摄影作品 ${String(index + 1).padStart(3, '0')}`
              }
              width={item.width}
              height={item.height}
            />
          </button>
          <figcaption>
            <span>{String(index + 1).padStart(3, '0')}</span>
            {item.title && <span>{item.title}</span>}
            {(item.location || item.year) && (
              <span>
                {[item.location, item.year].filter(Boolean).join(' / ')}
              </span>
            )}
            {item.caption && <span>{item.caption}</span>}
          </figcaption>
        </figure>
      ))}
      {activeItem && activeIndex !== null && (
        <div
          className="photo-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`摄影作品 ${String(activeIndex + 1).padStart(3, '0')}`}
          onClick={() => setActiveIndex(null)}
        >
          <button
            className="lightbox-close"
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="关闭大图"
          >
            关闭 ×
          </button>
          <button
            className="lightbox-arrow lightbox-prev"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex((activeIndex - 1 + items.length) % items.length);
            }}
            aria-label="上一张"
          >
            ←
          </button>
          <img
            src={withBasePath(activeItem.image)}
            alt={
              activeItem.title ||
              `摄影作品 ${String(activeIndex + 1).padStart(3, '0')}`
            }
            onClick={(event) => event.stopPropagation()}
          />
          <p>
            {String(activeIndex + 1).padStart(3, '0')} /{' '}
            {String(items.length).padStart(3, '0')}
          </p>
          <button
            className="lightbox-arrow lightbox-next"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex((activeIndex + 1) % items.length);
            }}
            aria-label="下一张"
          >
            →
          </button>
        </div>
      )}
    </section>
  );
}
