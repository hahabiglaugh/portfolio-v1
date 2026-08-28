import type { PhotographyDataSource, PhotographyItem } from './types';

// 页面组件不直接依赖此静态数组。未来接入 CMS 时，只需替换数据源实现。
const photographyItems: PhotographyItem[] = [
  {
    id: 'photo-002',
    image: '/assets/archive/002.webp',
    orientation: 'landscape',
    order: 1,
    width: 2400,
    height: 1802,
    featured: true,
  },
  {
    id: 'photo-004',
    image: '/assets/archive/004.webp',
    orientation: 'portrait',
    order: 2,
    width: 1600,
    height: 2400,
    featured: true,
  },
  {
    id: 'photo-001',
    image: '/assets/archive/001.webp',
    orientation: 'landscape',
    order: 3,
    width: 2400,
    height: 1801,
  },
  {
    id: 'photo-008',
    image: '/assets/archive/008.webp',
    orientation: 'landscape',
    order: 4,
    width: 2400,
    height: 1802,
    featured: true,
  },
  {
    id: 'photo-005',
    image: '/assets/archive/005.webp',
    orientation: 'portrait',
    order: 5,
    width: 1600,
    height: 2400,
  },
  {
    id: 'photo-007',
    image: '/assets/archive/007.webp',
    orientation: 'landscape',
    order: 6,
    width: 2400,
    height: 1801,
    featured: true,
  },
  {
    id: 'photo-003',
    image: '/assets/archive/003.webp',
    orientation: 'landscape',
    order: 7,
    width: 1986,
    height: 1491,
  },
  {
    id: 'photo-006',
    image: '/assets/archive/006.webp',
    orientation: 'landscape',
    order: 8,
    width: 2400,
    height: 1803,
  },
];

export class StaticPhotographySource implements PhotographyDataSource {
  async listPublished() {
    return [...photographyItems].sort((a, b) => a.order - b.order);
  }
}
