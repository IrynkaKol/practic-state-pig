import { Layout } from 'components/Layout';
import { StickerList } from './StickerList';
import stickers from '../../stickers.json';

export const App = () => {
    return (
      <Layout>
        <h1>Example 1</h1>
        <StickerList stickers={stickers} />
      </Layout>
    );
  };