const users = [
    {
        id: 1, name: 'Gledson', email: 'smskjdfls'
    },
    {
        id: 2, name: 'outro ai', email: 'fasdf'
    },
]

module.exports = {
    Query: {
        users: () => users,
        user: () => users[1],
    },
    Mutation: {
        createUser: () => users[0],
    }
}