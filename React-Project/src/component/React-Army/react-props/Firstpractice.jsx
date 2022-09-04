import React from 'react';
import ListItem from './ListItem';
import { data1 } from '../data';

const Firstpractice = () => {
  const dataArray = data1.map((item) => (
    <ListItem key={item.id} title={item.title} checked={item.checked} />
  ));
  return <ul>{dataArray}</ul>;
};

export default Firstpractice;
