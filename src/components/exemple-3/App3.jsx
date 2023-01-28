import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Layout } from 'components/Layout';
import { StickerForm } from './StickerForm';
import { StickerList } from './StickerList';
import initialStickers from '../../stickers.json';

export const App3 = () => {
  const [stickers, setStickers] = useState(initialStickers)
  
  const addSticker = (img, label) => {
    setStickers(prevState => [...prevState, { id: nanoid(), img, label }])
  }
  const deleteSticker = (stickerId) => {
    setStickers(prevState => prevState.stickers.filter(sticker => sticker.id !== stickerId))
  }

  return (
   <Layout>
     <h1>Example 3</h1>
     <StickerForm onSubmit={addSticker} />
     <StickerList items={stickers} onDelete={deleteSticker}/>
   </Layout>
 );
 }
 /*
export class App3 extends Component {
  state = {
    stickers: initialStickers,
  };
  addSticker = (img, label) => {
    //console.log(img, label);
    this.setState(prevState => ({
      stickers: [...prevState.stickers, { id: nanoid(), img, label }],
    }));
  };
  deleteSticker = stickerId => {
    //console.log(stickerId)
    this.setState(prevState => ({
      stickers: prevState.stickers.filter(sticker => sticker.id !== stickerId)
    }))
  };

  render() {
    return (
      <Layout>
        <h1>Example 3</h1>
        <StickerForm onSubmit={this.addSticker} />
        <StickerList items={this.state.stickers} onDelete={this.deleteSticker}/>
      </Layout>
    );
  }
}
*/
