import React from "react";
import WordSearchBar from "../components/WordSearchBar";
import WordCreationList from "../components/WordCreationList";

type PackCreateWordCreationProps = {
    handleListChange: Function
}

const PackCreateWordCreation = (props: PackCreateWordCreationProps) => {

    const [wordList, updateWordList] = React.useState<Array<string>>([]);

    // Send the most updated version of the word list to parent every time component mounts
    React.useEffect(() => {
        props.handleListChange(wordList);
    })

    function addWordToList(word: string): void{
        if(word){
            updateWordList([...wordList, word]);
            
        }
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