export type PhotographyOrientation = 'landscape' | 'portrait';

export type PhotographyItem = {
  id: string;
  image: string;
  title?: string;
  location?: string;
  year?: string;
  caption?: string;
  orientation: PhotographyOrientation;
  order: number;
  width: number;
  height: number;
  featured?: boolean;
};

export interface PhotographyDataSource {
  listPublished(): Promise<PhotographyItem[]>;
}
