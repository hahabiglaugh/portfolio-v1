import { Portfolio } from './portfolio';
import { getPhotographyPreview } from '../lib/photography';

export default async function Home() {
  const photographyPreview = await getPhotographyPreview();
  return <Portfolio photographyPreview={photographyPreview} />;
}
