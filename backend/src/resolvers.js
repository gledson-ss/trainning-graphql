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
        users: () => users[0],
    },
    Mutation: {
        createUser: () => users[0],
    }
}