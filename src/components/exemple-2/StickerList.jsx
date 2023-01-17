import { Component } from 'react';
import { Sticker } from './Sticker';
import { List } from 'components/StickerList.styled';

export class StickerList extends Component {
  state = {
    selectedIdx: null,
  };
  changeIdx = idx => {
    this.setState({
      selectedIdx: idx,
    });
  };

  render() {
    const { selectedIdx } = this.state; //деструкторизация
    const { stickers } = this.props;
    return (
      <List>
        {stickers.map((sticker, idx) => (
          <li key={idx}>
            <Sticker
              sticker={sticker}
              onSelect={() => this.changeIdx(idx)}
              isSelected={selectedIdx === idx}
            />
          </li>
        ))}
      </List>
    );
  }
}

/*
changeIdx = idx => {
    this.setState({
        selectedIdx: idx
    })
        } */ // не исползуем prevState так как не важно какой индекс был, просто хотим перезаписать новый
/*
onSelect={() => this.changeIdx(idx)}
так как Sticker не знает про индекс, передаем метожж анонимной стрелочной функцией и в аргумент передаем индеус idx*/
