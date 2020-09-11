const Query = {
  posts: (parent, args, { db }, info) => {
    if (!args.query) return db.posts;

    return db.posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(args.query.toLowerCase()) ||
        post.body.toLowerCase().includes(args.query.toLowerCase())
      );
    });
  },

  me: () => {
    return {
      id: '123098',
      name: 'Tyler',
      email: 'tyler@mail.com',
      age: 26,
    };
  },

  post: () => {
    return {
      id: '39eufdd',
      title: "tyler's post",
      body: 'aint no thing but a chicken wing',
      published: true,
    };
  },

  users: (parent, args, { db }, info) => {
    if (args.query) {
      return db.users.filter((user) => {
        return user.name.toLowerCase().includes(args.query.toLowerCase());
      });
    } else {
      return db.users;
    }
  },

  comments: (parent, args, ctx, info) => {
    return ctx.comments;
  },
};

export default Query;
