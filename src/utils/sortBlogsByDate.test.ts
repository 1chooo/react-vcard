import { getDateObject, ascendBlogByDate, descendBlogByDate } from './sortBlogsByDate';

import { IPost } from '../interface/iPost';

describe('getDateObject', () => {
  test('should return a valid Date object for a valid date string', () => {
    const dateStr = 'Jan, 1, 2020';
    const date = getDateObject(dateStr);
    expect(date).toBeInstanceOf(Date);
    expect(date.getFullYear()).toBe(2020);
    expect(date.getMonth()).toBe(0); // January is month 0
    expect(date.getDate()).toBe(1);
  });

  test('should throw an error for an invalid date string', () => {
    const dateStr = 'Invalid date';
    expect(() => getDateObject(dateStr)).toThrow(`Invalid dateStr: ${dateStr}!`);
  });

  test('should throw an error for a date with invalid month', () => {
    const dateStr = 'Foo, 1, 2020';
    expect(() => getDateObject(dateStr)).toThrow(`Invalid month in ${dateStr}!`);
  });

  test('should throw an error for a date with invalid day', () => {
    const dateStr = 'Jan, 32, 2020';
    expect(() => getDateObject(dateStr)).toThrow(`Invalid day in ${dateStr}!`);
  });

  test('should throw an error for an invalid leap year date', () => {
    const dateStr = 'Feb, 29, 2019';
    expect(() => getDateObject(dateStr)).toThrow(`Invalid day in ${dateStr}!`);
  });
});

const mockPosts: IPost[] = [
  { 
    id: '1', 
    title: '<h1>Post 1</h1>', 
    category: 'Category 1', 
    imageUrl: 'image1.jpg', 
    date: 'Jan, 01, 2020', 
    content: '<p>Content 1</p>', 
    link: 'post1', 
    alt: 'Image 1' 
  },
  { 
    id: '2', 
    title: '<h1>Post 2</h1>', 
    category: 'Category 2', 
    imageUrl: 'image2.jpg', 
    date: 'Feb, 15, 2019', 
    content: '<p>Content 2</p>', 
    link: 'post2', 
    alt: 'Image 2' 
  },
  { 
    id: '3', 
    title: '<h1>Post 3</h1>', 
    category: 'Category 3', 
    imageUrl: 'image3.jpg', 
    date: 'Mar, 03, 2021', 
    content: '<p>Content 3</p>', 
    link: 'post3', 
    alt: 'Image 3' 
  },
  { 
    id: '4', 
    title: '<h1>Post 4</h1>', 
    category: 'Category 4', 
    imageUrl: 'image4.jpg', 
    date: 'Apr, 10, 2020', 
    content: '<p>Content 4</p>', 
    link: 'post4', 
    alt: 'Image 4' 
  },
  { 
    id: '5', 
    title: '<h1>Post 5</h1>', 
    category: 'Category 5', 
    imageUrl: 'image5.jpg', 
    date: 'Jun, 20, 2024', 
    content: '<p>Content 5</p>', 
    link: 'post5', 
    alt: 'Image 5' 
  },
  {
    id: '6',
    title: '<h1>Post 6</h1>',
    category: 'Category 6',
    imageUrl: 'image6.jpg',
    date: 'Jul, 02, 2024',
    content: '<p>Content 6</p>',
    link: 'post6',
    alt: 'Image 6'
  }
];

describe('ascendBlogByDate', () => {
  test('should sort posts in ascending order by date', () => {
    const sortedPosts = ascendBlogByDate(mockPosts);
    expect(sortedPosts[0].date).toBe('Feb, 15, 2019');
    expect(sortedPosts[1].date).toBe('Jan, 01, 2020');
    expect(sortedPosts[2].date).toBe('Apr, 10, 2020');
    expect(sortedPosts[3].date).toBe('Mar, 03, 2021');
    expect(sortedPosts[4].date).toBe('Jun, 20, 2024');
    expect(sortedPosts[5].date).toBe('Jul, 02, 2024');
  });
});

describe('descendBlogByDate', () => {
  test('should sort posts in descending order by date', () => {
    const sortedPosts = descendBlogByDate(mockPosts);
    expect(sortedPosts[0].date).toBe('Jul, 02, 2024');
    expect(sortedPosts[1].date).toBe('Jun, 20, 2024');
    expect(sortedPosts[2].date).toBe('Mar, 03, 2021');
    expect(sortedPosts[3].date).toBe('Apr, 10, 2020');
    expect(sortedPosts[4].date).toBe('Jan, 01, 2020');
    expect(sortedPosts[5].date).toBe('Feb, 15, 2019');
  });
});
