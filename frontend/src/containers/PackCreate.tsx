import React from "react";
import { Button, CardMedia } from "@material-ui/core";
import HeaderBar from "../components/HeaderBar";
import SectionHeading from "../components/SectionHeading";
import CreatePackDetails from "../components/CreatePackDetails";
import PackCreateWordCreation from "../subcontainers/PackCreateWordCreation";
import "../styles/containers/PackCreate.css";
import { v4 as uuidv4 } from "uuid";
import { Pack, Card } from "../CustomTypes";

type PackDetails = {
    title: string,
    description: string,
    language: string
}

type CardsObject = {
    packId: string,
    cards: Array<Card>
}

const PackCreate = () => {
    
    const [packDetails, updatePackDetails] = React.useState<PackDetails>({ title: "", description: "", language: "" }); // Note: language is a stringified "languageOptions" object
    const [wordList, updateWordList] = React.useState<Array<string>>([]);

    // Handle changes to the Pack Details
    function handlePackDetailChange(value: string, inputType: string){
        if(inputType === "title") updatePackDetails({ title: value, description: packDetails.description, language: packDetails.language });
        else if(inputType === "description") updatePackDetails({ title: packDetails.title, description: value, language: packDetails.language });
        else if (inputType === "language") updatePackDetails({ title: packDetails.title, description: packDetails.description, language: value })
    }

    // Handle changes to word list (add/remove)
    function handleWordListChange(list: Array<string>){
        updateWordList(list);
    }

    // Handle creation of a pack - TODO: sanitisation
    function createPack() : void {

        const generatedPackId: string = uuidv4();

        // Pack object to send to database
        const packObj: Pack = {
            packId: generatedPackId,
            title: packDetails.title,
            dateCreated: new Date().toLocaleString(),
            description: packDetails.description,
            languageOptions: JSON.parse(packDetails.language)
        }

        // Cards object to send to database
        // const cardsObj: CardsObject = {
        //     packId: generatedPackId,
        //     cards: wordList.map((word, index) => { return { cardId: index, translated: translatedWords[index], untranslated: word } })
        // }

        // Post all data
        // postPackData(packObj);
        // postCardsData(cardsObj);
    }

    // Post pack data to server
    async function postPackData(packData: Pack) : Promise<void> {

        await fetch("http://localhost:5000/pack", { 
            method: "POST", 
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(packData)
        })
        .then(res => res.json())
        .then(data => console.log(data) ) // TODO: Display message indicating successful POST
    }

    // Post cards data to server
    async function postCardsData(cardsData: CardsObject): Promise<void> {
        
        await fetch("http://localhost:5000/cards", { 
            method: "POST", 
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cardsData)
        })
        .then(res => res.json())
        .then(data => console.log(data) ) // TODO: Display message indicating successful POST

    }

    function convertWordListToCommaSeparatedString(list: Array<string>) : string {
        let finalString: string = "";
        list.forEach((word, index) => {
            finalString += word;
            if(index + 1 < list.length) finalString += ", ";    
        })
        return finalString;
    }

    function convertCommaSeparatedWordListToArray(list: string) : Array<string> {
        return list.split(",");
    }

    return(
        <>
            <div className="pack-create-container">
                <HeaderBar />
                <SectionHeading headingContent="Create Vocab Pack" />
                <CreatePackDetails handleDetailChange={handlePackDetailChange.bind(this)} />
                <div className="pack-create-word-functions-container">
                    <PackCreateWordCreation handleListChange={handleWordListChange.bind(this)} />
                </div>
                <div className="pack-create-button">
                    <Button variant="contained" size="large" onClick={(e) => { createPack() }}>Create Pack</Button>
                </div>
            </div>
        </>
    );
}

export default PackCreate;