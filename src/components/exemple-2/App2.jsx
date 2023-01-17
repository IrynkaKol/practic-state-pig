import { Layout } from 'components/Layout';
import { StickerList } from './StickerList';
import stickers from '../../stickers.json';

export const App2 = () => {
    return (
      <Layout>
        <h1>Example 2</h1>
        <StickerList stickers={stickers} />
      </Layout>
    );
  };