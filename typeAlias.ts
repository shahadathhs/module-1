{
    // Type Alias
    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNumber?: number;
        address: string;
    }

    const student1: Student = {
        name: "Sajib",
        age : 20,
        gender: "male",
        contactNumber: 1234567890,
        address: "Bangladesh"
    }

    const student2: Student = {
        name: "Sajib Two",
        age : 20,
        gender: "male",
        address: "Bangladesh"
    }

    type UserName = string
    type IsAdmin = boolean

    const name: UserName = 'Sajib';
    const isAdmin: IsAdmin = true;

    type Add = (x: number, y: number) => number

    const add: Add = (A, B) => A + B

}