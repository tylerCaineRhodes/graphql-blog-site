const users = [
  { id: '1', name: 'tyler', email: 'tyler@email.com', age: 26 },
  { id: '2', name: 'mike', email: 'mike@email.com' },
  { id: '3', name: 'ben', email: 'ben@email.com' },
];
const comments = [
  { id: '1', text: 'text no 1', author: '1', post: '1' },
  { id: '2', text: 'text is no 2 ', author: '1', post: '4' },
  { id: '3', text: 'text no 3 so original', author: '2', post: '3' },
  { id: '4', text: ' text no 4, blaaaah', author: '3', post: '1' },
];
const posts = [
  { id: '1', title: 'post no 1', body: 'ehhh', published: true, author: '1' },
  {
    id: '2',
    title: 'post no 2',
    body: 'don wanna',
    published: true,
    author: '1',
  },
  {
    id: '3',
    title: 'post no 3',
    body: 'think about it',
    published: true,
    author: '2',
  },
  {
    id: '4',
    title: 'post no 4',
    body: '...fake stuff',
    published: true,
    author: '3',
  },
];

const db = {
  users,
  posts,
  comments,
};

export { db as default };
