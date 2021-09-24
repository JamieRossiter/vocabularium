import PackInfo from "../subcomponents/PackInfo";
import LanguageFlag from "../subcomponents/LanguageFlag";
import ButtonIcon from "../subcomponents/ButtonIcon";

type PackDetailsProps = {
    packTitle: string,
    packDateCreated: string,
    packFlagInfo: { countryCode: string, languageShorthand: string }
}

const PackDetails = (props: PackDetailsProps) => {
    return(
        <>
            <ButtonIcon icon="close" />
            <PackInfo title={props.packTitle} dateCreated={props.packDateCreated} />
            <LanguageFlag countryCode={props.packFlagInfo.countryCode} languageShorthand={props.packFlagInfo.languageShorthand} />
        </>
    )
}

export default PackDetails;