{
    // Spread Operator

    const bros1: string[] = [ "Sajib", "Sharif"]
    const bros2: string[] = [ "Broker", "Broker" ]

    bros1.push(...bros2);

    const mentors1 = {
        typeScript: "Mezba",
        redux: 'Mir',
        dbms: 'Mizan'
    }

    const mentors2 = {
        prisma: 'Firoz',
        next: 'Tanmoy',
        cloud: 'Nahid'
    }

    const mentorList = {
        ...mentors1,
        ...mentors2,
    }

    // Rest Operator
    const greetFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => {
            console.log(friend)
        })
    }
    greetFriends('Sajib', 'Sharif')

    // Destructuring
}