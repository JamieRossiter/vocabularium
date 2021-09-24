import Flag from "react-flagpack";
import "../styles/subcomponents/LanguageFlag.css";

type LanguageFlagProps = {
    countryCode: string, // e.g. ID
    languageShorthand: string // e.g. IND
}

const LanguageFlag = (props: LanguageFlagProps) => {
    return(
        <>
            <Flag className="language-flag-icon" code={props.countryCode} size="l" />
            <p className="language-flag-label">{props.languageShorthand}</p>
        </>
    )
}

export default LanguageFlag;