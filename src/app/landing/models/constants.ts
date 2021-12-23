import { ESocialKeys, ETimelineTypes } from './enums';
import { ISocialItem, ITimelineItem } from './types';

const {WORK, LIFE, STUDY} = ETimelineTypes;
const {GITHUB, INSTAGRAM, MAIL, PHONE, TELEGRAM, VK} = ESocialKeys;

export const TIMELINE_INFO: ITimelineItem[] = [
  {
    title: 'Intabia',
    subtitle: 'frontend developer',
    date: new Date('2019-12-16'),
    skills: [
      'Angular',
      'React',
      'Vue',
      'Typescript',
      'HTML',
      'CSS/SCSS',
      'AngularJS',
      'Docker',
      'nginx',
      'NestJS',
    ],
    type: WORK,
  },
  {
    title: 'Novosibirsk State Technical University',
    subtitle: 'Started studying for a master',
    date: new Date('2019-09-01'),
    type: STUDY,
  },
  {
    title: 'Web design self education',
    subtitle: 'Dig into HTML, CSS, JavaScript, watch and read a lot of training material and build my first web sites',
    date: new Date('2019-08-01'),
    type: LIFE,
  },
  {
    title: 'RID Analytics',
    subtitle: '.NET developer',
    date: new Date('2019-12-16'),
    skills: [
      '.NET Framework',
      '.NET Core',
      'HTML',
      'XML',
      'RegExp',
    ],
    type: WORK,
  },
  {
    title: 'Bachelor of Applied Mathematics and Computer Science',
    subtitle: 'Field of programming, modeling and data analysis',
    date: new Date('2019-06-26'),
    type: STUDY,
  },
  {
    title: 'Novosibirsk State Technical University',
    subtitle: 'Student life began',
    date: new Date('2015-09-01'),
    type: STUDY,
  },
  {
    title: 'School graduation day',
    subtitle: 'So these 11 years ended...',
    date: new Date('2015-06-24'),
    type: LIFE,
  },
  {
    title: 'Exams',
    subtitle: 'Passed on Russian language, mathematics and computer science',
    date: new Date('2015-06-19'),
    type: LIFE,
  },
  {
    title: 'Graduation from music school',
    subtitle: 'My first graduation with tape over my shoulder',
    date: new Date('2012-05-30'),
    type: LIFE,
  },
  {
    title: 'Photoshop self education',
    subtitle: 'I started making pictures, posters, artwork related to the game I was playing at that time',
    date: new Date('2010-06-01'),
    type: LIFE,
  },
  {
    title: 'School of Music',
    subtitle: 'Learning to play the piano',
    date: new Date('2004-10-01'),
    type: STUDY,
  },
  {
    title: 'Gymnasium #4',
    subtitle: 'The first training has begun',
    date: new Date('2004-09-01'),
    type: STUDY,
  },
  {
    title: 'Hello, World!',
    subtitle: 'I was born in Novosibirsk, Russia',
    date: new Date('1997-10-17'),
    type: LIFE,
  },
];

export const SOCIAL_ITEMS: ISocialItem[] = [
  {
    key: VK,
    url: 'http://vk.com/khakholin',
    iconClass: 'fab fa-vk',
  },
  {
    key: INSTAGRAM,
    url: 'http://instagram.com/khakholin',
    iconClass: 'fab fa-instagram',
  },
  {
    key: GITHUB,
    url: 'http://vk.com/khakholin',
    iconClass: 'fab fa-github',
  },
  {
    key: PHONE,
    url: 'tel:+79130052654',
    iconClass: 'fas fa-phone-alt',
  },
  {
    key: MAIL,
    url: 'mailto:khakholin@mail.ru',
    iconClass: 'fas fa-envelope-open-text',
  },
  {
    key: TELEGRAM,
    url: 'http://teleg.run/khakholin',
    iconClass: 'fab fa-telegram-plane',
  },
];
