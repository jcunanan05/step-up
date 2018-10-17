import imageSources from './imageSources';

const defaultData = [
  {
    title: 'Step Up Now!',
    content: 'Community Project',
    type: 'banner'
  },
  {
    title: 'Who We Are',
    content:
      'We are a new community that aims to help people to step up now, learn new things, be adventurous!',
    type: 'whoweare'
  },
  {
    title: 'Upcoming Projects',
    content: '',
    type: 'projects'
  },
  {
    title: 'News',
    content: 'Community news, and information.',
    type: 'content'
  }
];

export const projectData = [
  {
    title: 'Marching Band',
    content: 'Step Up Now is planning to make a lively Marching band!',
    image: {
      title: 'Marching Band',
      src: imageSources.marchingBand3
    }
  }
];

export default defaultData;
