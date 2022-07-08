export type Card = {
    cardId: number,
    untranslated: string,
    translated: string
}

export type Pack = {
    packId: string,
    title: string,
    dateCreated: string,
    description: string,
    languageOptions: {
        languageLonghand: string,
        languageShorthand: string,
        countryCode: string
    }
}