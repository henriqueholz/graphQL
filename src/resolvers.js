const users = [{
  id: 1,
  name: "Thiago",
  email: "tgmarinho@gmail.com"
},
{
  id: 2,
  name: "Diego",
  email: "diego@rocketseat.com"
}
];

module.exports = {
  Query: {
    users: () => users,
    user: () => users[0]
  },

  Mutation: {
    createUser: () => users[1]
  }
};