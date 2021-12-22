import React from "react";
import WordSearchBar from "../components/WordSearchBar";
import WordCreationList from "../components/WordCreationList";

const PackCreateWordCreation = () => {

    const [wordList, updateWordList] = React.useState<Array<string>>([]);

    function addWordToList(word: string): void{
        if(word) updateWordList([...wordList, word]);
    }

    return(
        <>
            <WordSearchBar addNewWord={addWordToList} />
            <WordCreationList wordList={wordList} />
        </>
    )

}

export default PackCreateWordCreation;