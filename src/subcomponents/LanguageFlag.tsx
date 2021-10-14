import Flag from "react-flagpack";
import "../styles/subcomponents/LanguageFlag.css";
import { Skeleton } from "@material-ui/lab";

type LanguageFlagProps = {
    countryCode?: string, // e.g. ID
    languageShorthand?: string, // e.g. IND
    languageLonghand?: string
}

const LanguageFlag = (props: LanguageFlagProps) => {
    return(
        <>
            <Flag className="language-flag-icon" code={props.countryCode ?? "AQ"} size="l" />
            <p className="language-flag-label">{props.languageShorthand ?? <Skeleton animation="wave" width={33} />}</p>
        </>
    )
}

export default LanguageFlag;