const fs = require('fs');

const DATA = [
    {
      image: fs.readFileSync('./images/pic1.jpg', 'base64'),
      title: 'First Cat',
      subTitle: 'First cat subtitle'
    },
    {
      image: fs.readFileSync('./images/pic2.jpg', 'base64'),
      title: 'Second Cat',
      subTitle: 'Second cat subtitle'
    },
    {
      image: fs.readFileSync('./images/pic3.jpg', 'base64'),
      title: 'Third Cat',
      subTitle: 'Third cat subtitle'
    },
    {
      image: fs.readFileSync('./images/pic4.jpg', 'base64'),
      title: 'Fourth Cat',
      subTitle: 'Fourth cat subtitle'
    },
    {
      image: fs.readFileSync('./images/pic5.jpg', 'base64'),
      title: 'Fifth Cat',
      subTitle: 'Fifth cat subtitle'
    },
    {
      image: fs.readFileSync('./images/pic6.jpg', 'base64'),
      title: 'Sixth Cat',
      subTitle: 'Sixth cat subtitle'
    },
    {
      image: fs.readFileSync('./images/pic7.jpg', 'base64'),
      title: 'Seventh Cat',
      subTitle: 'Seventh cat subtitle'
    },
    {
      image: fs.readFileSync('./images/pic8.jpg', 'base64'),
      title: 'Eigth Cat',
      subTitle: 'Eigth cat subtitle'
    },
    {
      image: fs.readFileSync('./images/pic9.jpg', 'base64'),
      title: 'Nineth Cat',
      subTitle: 'Nineth cat subtitle'
    },
    {
      image: fs.readFileSync('./images/pic10.jpg', 'base64'),
      title: 'Tenth Cat',
      subTitle: 'Tenth cat subtitle'
    }
  ];

  module.exports = { DATA };