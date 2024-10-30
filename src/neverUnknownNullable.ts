{
    // nullable
    const searchName = (value: string | null) => {
        if (value) {
            console.log("Searching")
        } else {
            console.log('There is nothing to Search')
        }
    }

    // searchName('Sajib')
    searchName(null)

    // unknown
    const unknown = (value: unknown)  => {
        if ( typeof value === 'string' ) {
            console.log("Searching")
        } else if ( typeof value === 'number' ) {
            console.log("Number of searching")
        } else {
            console.log("Searching Nothing")
        }
    }

    unknown(null)
    unknown(123)
    unknown('Searching Nothing')

    // never
    const throwError = (msg: string): never => {
        throw new Error(msg)
    }

    throwError('Error')

}