{
    // Ternary operator
    const age: number = 3;

    if (age >= 10) {
        console.log("Age: " + age);
    }else {
        console.log("Child");
    }

    const isAdult: string = age >= 18 ? 'Adult': 'Child';
    console.log({isAdult})

    // Optional Chaining
    type User = {
        name: string;
        address: {
            street: string;
            city: string;
            province?: string;
        }
    }

    const user: User = {
        name: 'Sajib',
        address: {
            street: 'Sajib',
            city: 'Sajib'
        }
    }

    const province = user?.address?.province ?? 'No Province';
    console.log({province})

    // Nullish Coalescing
    // null or undefined ---> decision-making
    // const isAuthenticated = null;
    // const isAuthenticated = undefined
    const isAuthenticated = ""

    const result1 = isAuthenticated ?? "Guest";
    const result2 = isAuthenticated ? isAuthenticated : 'Guest';
    console.log({ result1 }, { result2 })

}