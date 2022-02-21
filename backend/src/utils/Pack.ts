type Pack = {
    packId: number,
    title: string,
    dateCreated: string,
    description: string,
    languageOptions: {
        languageLonghand: string,
        languageShorthand: string,
        countryCode: string 
    }
}

export default Pack;