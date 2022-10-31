import image from "./assets/image.png";
const text = 'Изучение JavaScript и программирования в целом не самая простая вещь, но безусловно стоит того. Это тяжело, реально тяжело и требует большой степени самоотверженности и настойчивости. Но обладая правильным мышлением в сочетании с правильными ресурсами, вы можете достичь превосходных результатов. Что бы вы ни делали, не забывайте, что программироване должно приносить радость. '
import {titleBlock, textBlock, columnsBlock,imageBlock} from "../classes/block";


export const model = [
  new titleBlock( "Конструктор сайтов на чистом JavaScript", {
    tag: 'h2',
    styles: {
      color: '#fff',
      background: 'linear-gradient(90deg, rgba(36,0,31,1) 0%, rgba(116,9,121,0.8631827731092436) 35%, rgba(255,0,65,1) 100%)',
      'text-align': 'center',
      padding: '1.5rem',
    }}),
  new imageBlock ( image, {styles:{
      'text-align': 'center',
      padding: '2rem',
    }}),

  new textBlock ( text, {styles:{
    color: '#ada',
    background: 'linear-gradient(90deg, rgba(36,0,31,1) 0%, rgba(9,73,121,0.8631827731092436) 35%, rgba(85,0,255,1) 100%)',
    padding: '1.5rem'
  }}),

  new columnsBlock ( [
    '111111',
    '222222',
    '333333',
], {styles:{
  color: '#000',
  background: 'rgb(36,0,31)',
  background: 'linear-gradient(90deg, rgba(237,144,30,0.6811099439775911) 0%, rgba(228,97,16,0.8603816526610644) 35%, rgba(255,175,0,0.9864320728291317) 100%)',
  height: '100px'
  }}),
];