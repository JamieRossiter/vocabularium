import PackInfo from "../subcomponents/PackInfo";
import LanguageFlag from "../subcomponents/LanguageFlag";
import ButtonIcon from "../subcomponents/ButtonIcon";

const PackDetails = () => {
    return(
        <>
            <ButtonIcon icon="close" />
            <PackInfo title="Test" dateCreated="Sep 21 11:06AM" />
            <LanguageFlag countryCode="JP" languageCode="JAP" />
        </>
    )
}

export default PackDetails;