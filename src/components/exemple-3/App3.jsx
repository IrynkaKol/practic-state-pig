import { Component, ReactNode } from 'react';
//import { nanoid } from 'nanoid';
import { Layout } from 'components/Layout';
import { StickerForm } from './StickerForm';
import { StickerList } from './StickerList';
//import initialStickers from '../../stickers.json';

export class App3 extends Component {
  state={
    stickers: [],
  }
  render(): ReactNode {
    return (
      <Layout>
        <StickerForm />
        <StickerList items={this.state.stickers}/>
      </Layout>
    );
  }
}
