import uuidv4 from 'uuid/v4';

const Mutation =  {
    createUser: (parent, args, { db }, info) => {
      const emailTaken = db.users.some((user) => user.email === args.data.email);
      if (emailTaken) {
        throw new Error('email already taken');
      }
      const user = {
        id: uuidv4(),
        ...args.data,
      };
      db.users.push(user);
      return user;
    },

    deleteUser: (parent, args, { db }, info) => {
      const userIndex = db.users.findIndex((user) => user.id === args.id);

      if (userIndex === -1) {
        throw new Error('User not found');
      }
      const deletedUsers = db.users.splice(userIndex, 1);
      db.posts = db.posts.filter((post) => {
        const match = post.author === args.id;

        if (match) {
          db.comments = db.comments.filter((comment) => comment.post !== post.id);
        }
        return !match;
      });

      db.comments = db.comments.filter((comment) => {
        comment.author !== args.id;
      });

      return deletedUsers[0];
    },
    updateUser: (parent, args, { db }, info) => {
      const user = db.users.find((user) => user.id === args.id)

      if(!user) {
        throw new Error('user not found')
      }
      
      if(typeof args.data.email === 'string') {
        const emailTaken = db.users.some((user) => user.email === args.data.email)

        if (emailTaken) {
          throw new Error('email taken!')
        }
        user.email = data.email;
      }

      if(typeof args.data.name === 'string') {
        user.name = args.data.name;
      }

      if(typeof args.data.age !== 'undefined') {
        user.age = args.data.age
      }
      return user;
    },

    createPost: (parent, args, { db }, info) => {
      const userExists = db.users.some((user) => user.id === args.data.author);
      if (!userExists) {
        throw new Error('user not found');
      }
      const post = {
        id: uuidv4(),
        ...args.data,
      };
      db.posts.push(post);
      return post;
    },

    deletePost: (parent, args, { db }, info) => {
      const postIndex = db.posts.findIndex((post) => post.id === args.id);

      if (postIndex === -1) {
        throw new Error('cannot find post');
      }
      const deleted = db.posts.splice(postIndex, 1);
      db.comments = db.comments.filter((comment) => comment.post !== args.id);
      return deleted[0];
    },

    createComment: (parent, args, { db }, info) => {
      const { users, posts, comments } = db;
      const userExists = users.some((user) => user.id === args.data.author);
      const postExists = posts.some((post) => post.id === args.data.post);

      if (!userExists) {
        throw new Error('user not found!');
      }
      if (!postExists) {
        throw new Error('post not found!');
      }
      const comment = {
        id: uuidv4(),
        ...args.data,
      };
      comments.push(comment);
      return comment;
    },

    deleteComment: (parent, args, { db }, info) => {
      const commentIndex = db.comments.findIndex(
        (comment) => comment.id === args.id
      );

      if (commentIndex === -1) {
        throw new Error('comment not found');
      }
      const deleted = db.comments[commentIndex];
      db.comments = db.comments.filter((comment) => comment.id !== args.id);
      return deleted;
    },
  }

  export default Mutation;