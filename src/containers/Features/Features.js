import React from 'react';
import Feature from '../../components/Feature/Feature';
import './Features.css';

const featuresData = [
  {
    title: 'VOICE REC ICON',
    text: 'AI used to deal with jumping to pages without the need of clicks. Quickly recognizes your request and does it in no time.',
  },
  {
    title: 'THE SOCIAL NETWORK',
    text: 'Need',
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="howtouse">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Step into Future Today. & See How to Use it.</h1>
      <p>Advanced Technologies And Ways To Deal With It</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;