import elias from './images/Elias.png';
import debonita from './images/Debonita.png';
import elisa from './images/Elisa.png';
import meditation from './images/MeditationSymbol.png';
import nutrition from './images/NutritionSymbol.png';
import yoga from './images/YogaSymbol.png';

const generateId = (index) => {
  return '100' + index.toString();
};

export const guests = [
  {
    id: generateId(1),
    name: 'Elias Beck',
    descriptionShort: 'Forbes Magazine 30 under 30',
    descriptionFull:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quae cumque sed asperiores.',
    image: elias,
    eventId: 1
  },
  {
    id: generateId(2),
    name: 'Debonita Deore',
    descriptionShort: 'Cosmopoliton Best Travel Blogger',
    descriptionFull:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quae cumque sed asperiores dolorum recusandae possimus ut error saepe rerum.',
    image: debonita,
    eventId: 2
  },
  {
    id: generateId(3),
    name: 'Elisa Varoud',
    descriptionShort: 'Actress, This is Enchanting',
    descriptionFull:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quae cumque sed asperiores dolorum recusandae possimus ut error saepe rerum.',
    image: elisa,
    eventId: 3
  }
];

export const events = [
  {
    id: 1,
    title: 'Meditation for Success',
    subtitle: 'for success',
    instructorId: 1001,
    image: meditation,
    date: 'Saturday 19th May',
    // GMT time (other time zones calculated automatically)
    time: '3pm',
    isAM: false
  },
  {
    id: 2,
    title: 'Nutrition',
    subtitle: '',
    instructorId: 1002,
    image: nutrition,
    date: 'Saturday 19th May',
    time: '3',
    isAM: false
  },
  {
    id: 3,
    title: 'Yoga',
    subtitle: 'for Wellbeing',
    instructorId: 1003,
    image: yoga,
    date: 'Saturday 19th May',
    time: '11',
    isAM: true
  }
];

export const quotes = [
  'The most beautiful moments in life are moments when you are expressing your joy, not when you are seeking it.',
  'If you resist change, you resist life.',
  'Love is your quality. Love is not what you do. Love is what you are.',
  'Learning to listen is the essence of intelligent living.'
];
