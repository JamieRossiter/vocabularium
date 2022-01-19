export type Cards = {
    packId: string | null,
    cards: Array<Card> | null
}

export type Card = {
    translated: string,
    untranslated: string
}