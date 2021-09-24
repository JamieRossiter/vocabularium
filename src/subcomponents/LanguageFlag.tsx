import Flag from "react-flagpack";

type LanguageFlagProps = {
    countryCode: string, // e.g. ID
    languageShorthand: string // e.g. IND
}

const LanguageFlag = (props: LanguageFlagProps) => {
    return(
        <>
            <Flag code={props.countryCode} size="l" />
            <p>{props.languageShorthand}</p>
        </>
    )
}

export default LanguageFlag;