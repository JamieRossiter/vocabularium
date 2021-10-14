export type Card = {
    untranslated: string,
    translated: string
}

export type Pack = {
    id: string,
    title: string,
    dateCreated: string,
    description: string,
    languageOptions: {
        languageLonghand: string,
        languageShorthand: string,
        countryCode: string
    },
    cards: string
}