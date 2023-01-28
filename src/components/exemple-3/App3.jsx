import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Layout } from 'components/Layout';
import { StickerForm } from './StickerForm';
import { StickerList } from './StickerList';
import initialStickers from '../../stickers.json';

export const App3 = () => {
  const [stickers, setStickers] = useState(initialStickers);

  const addSticker = (img, label) => {
    setStickers(prevState => [...prevState, { id: nanoid(), img, label }]);
  };
  const deleteSticker = stickerId => {
    setStickers(prevState =>
      prevState.filter(sticker => sticker.id !== stickerId)
    );
  };
  useEffect(() => {
    const savedStickers = localStorage.getItem('stickers');
    if (savedStickers !== null) {
      const parsedStickers = JSON.parse(savedStickers);
      setStickers(parsedStickers );
    } else {
      setStickers(initialStickers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('stickers', JSON.stringify(stickers));
  }, [stickers])

  return (
    <Layout>
      <h1>Example 3</h1>
      <StickerForm onSubmit={addSticker} />
      <StickerList items={stickers} onDelete={deleteSticker} />
    </Layout>
  );
};
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

  componentDidMount() {
    const savedStickers = localStorage.getItem('stickers');
    if (savedStickers !== null) {
      const parsedStickers = JSON.parse(savedStickers);
      this.setState({ stickers: parsedStickers });
    } else {
      this.setState({ stickers: initialStickers });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.stickers !== this.state.stickers) {
      localStorage.setItem('stickers', JSON.stringify(this.state.stickers));
    }
  }

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
