{
    // Union
    type FrontendDev = 'Average' | 'Good'
    type FullStackDev = 'FrontendFocused' | 'BackendFocused' | 'Expert'

    type Dev = FrontendDev | FullStackDev

    const newDev: FrontendDev = 'Average'

    type User = {
        name: string;
        email?: string;
        password?: string;
        gender: 'male' | 'female';
        bloodGroupName: "A+-" | "B+-" | "O+-" | "AB+-"
    }

    const sajib: User = {
        name: "Sajib",
        gender: "male",
        bloodGroupName: "A+-"
    }


    // Intersection
    type FrontDev = {
        skills: string[],
        designation1: 'FrontendDev'
    }

    type BackDev = {
        skills: string[],
        designation2: 'BackendDev'
    }

    type FullDev = FrontDev & BackDev

    const fullStackDev: FullDev = {
        skills: ['HTML', 'CSS'],
        designation1: 'FrontendDev',
        designation2: 'BackendDev',
    }
}