import Flag from "react-flagpack";

type LanguageFlagProps = {
    countryCode: string, // e.g. ID
    languageCode: string // e.g. IND
}

const LanguageFlag = (props: LanguageFlagProps) => {
    return(
        <>
            <Flag code={props.countryCode} size="l" />
            <p>{props.languageCode}</p>
        </>
    )
}

export default LanguageFlag;