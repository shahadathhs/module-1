{
    // Object Destructuring
    const user = {
        id: 1,
        name: {
            firstName: "Shahadath",
            middleName: "Hossen",
            lastName: "Sajib"
        },
        contactNumber: 123456789,
        address: 'Bangladesh'
    }

    const { contactNumber, name: {
        middleName: mn
    } } = user;

    console.log(mn)

    // Array Destructuring

    const myFriends: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];

    const [a,b,c] = myFriends

    const [,,C] = myFriends

    const [,,CF, ...Rest] = myFriends
    console.log(c, C, CF)

    console.log(Rest)
}