import { Sticker } from './Sticker';
//import { Component } from 'react';
import { List } from './StickerList.styled';

export const StickerList = ({items}) => {
return (
    <List>
        {items.map((item, idx) => (
        <li key={idx}>
            <Sticker sticker={item}/>
        </li>))}
    </List>
)
}