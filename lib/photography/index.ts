import { StaticPhotographySource } from './static-source';
import type { PhotographyDataSource } from './types';

const photographySource: PhotographyDataSource = new StaticPhotographySource();

export async function getPublishedPhotography() {
  return photographySource.listPublished();
}

export async function getPhotographyPreview(limit = 4) {
  const items = await photographySource.listPublished();
  return items.filter((item) => item.featured).slice(0, limit);
}

export type { PhotographyDataSource, PhotographyItem } from './types';
