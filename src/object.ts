// Reference Type -> Object

const user: {
    company: 'Monster Studio' // Literal type
    firstName: string;
    middleName?: string; // Optional Type
    lastName: string;
    isMarried: boolean;
    readonly age: number;
} = {
    company: 'Monster Studio',
    firstName: "Shahadath",
    // middleName: "Hossen",
    lastName: "Sajib",
    isMarried: false,
    age: 20
}

// user.age = 20 // can't assign