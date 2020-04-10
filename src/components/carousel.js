import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: '../images/ales.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1',
    width: '100',
    height: '100'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2019/09/22/10/38/forest-4495701_960_720.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2018/11/16/19/02/forest-3820084_960_720.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;