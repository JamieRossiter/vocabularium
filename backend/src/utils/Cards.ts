export type Cards = {
    packId: number | null,
    cards: Array<Card> | null
}

export type Card = {
    cardId: number,
    translated: string,
    untranslated: string
}