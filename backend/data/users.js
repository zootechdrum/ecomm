import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'zootechdrum@gmail.com',
        password: bcrypt.hashSync('123456', 10),

        isAdmin: true,
    },
    {
        name: 'John Doe',
        email: 'zoo@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Jane Doe',
        email: 'drum@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users
