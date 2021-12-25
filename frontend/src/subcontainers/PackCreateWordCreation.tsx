import React from "react";
import WordSearchBar from "../components/WordSearchBar";
import WordCreationList from "../components/WordCreationList";

const PackCreateWordCreation = () => {

    const [wordList, updateWordList] = React.useState<Array<string>>([]);

    function addWordToList(word: string): void{
        if(word) updateWordList([...wordList, word]);
    }

    function deleteWord(word: string): void {
        let newWordList = wordList.filter(w => w != word);
        updateWordList(newWordList);
    }

    return(
        <>
            <WordSearchBar addNewWord={addWordToList} />
            <WordCreationList handleDelete={deleteWord} wordList={wordList} />
        </>
    )

}

export default PackCreateWordCreation;