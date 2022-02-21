export type Cards = {
    packId: number | null,
    cards: Array<Card> | null
}

export type Card = {
    translated: string,
    untranslated: string
}