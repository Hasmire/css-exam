export interface Subject {
  src: string;
  alt: string;
  code: string;
  title: string;
}

export interface SubjectData {
  [key: string]: Subject[];
}

export const subjectData: SubjectData = {
  'Data Science': [
    {
      src: './stock.jpeg',
      alt: 'add alt text here',
      code: 'CS ELEC 1C',
      title: 'Data Warehousing',
    },
    {
      src: './stock.jpeg',
      alt: 'add alt text here',
      code: 'CS ELEC 2C',
      title: 'Machine Learning',
    },
    {
      src: './stock.jpeg',
      alt: 'add alt text here',
      code: 'CS ELEC 3C',
      title: 'Data Analysis and Visualization',
    },
    {
      src: './stock.jpeg',
      alt: 'add alt text here',
      code: 'CS ELEC 4C',
      title: 'Data Mining',
    },
  ],
  'Core Science': [
    {
      src: './stock.jpeg',
      alt: 'add alt text here',
      code: 'CS ELEC 1A',
      title: 'Advanced Intelligent Systems',
    },
    {
      src: './stock.jpeg',
      alt: 'add alt text here',
      code: 'CS ELEC 2C',
      title: 'Compiler Design',
    },
    {
      src: './stock.jpeg',
      alt: 'add alt text here',
      code: 'CS ELEC 3C',
      title: 'Natural Language Processing',
    },
    {
      src: './stock.jpeg',
      alt: 'add alt text here',
      code: 'CS ELEC 4C',
      title: 'Empathic Computing',
    },
    {
      src: './stock.jpeg',
      alt: 'add alt text here',
      code: 'CS ELEC 5C',
      title: 'Random Subject',
    },
    {
      src: './stock.jpeg',
      alt: 'add alt text here',
      code: 'CS ELEC 6C',
      title: 'Added Subject',
    },
  ],
  'Game Development': [
    {
      src: './stock.jpeg',
      alt: 'add alt text here',
      code: 'CS ELEC 1B',
      title: 'Game Theory and Design',
    },
    {
      src: './stock.jpeg',
      alt: 'add alt text here',
      code: 'CS ELEC 2B',
      title: 'Game Programming I',
    },
    {
      src: './stock.jpeg',
      alt: 'add alt text here',
      code: 'CS ELEC 3B',
      title: 'Game Programming II',
    },
    {
      src: './stock.jpeg',
      alt: 'add alt text here',
      code: 'CS ELEC 4B',
      title: 'Game Production',
    },
  ],
};
