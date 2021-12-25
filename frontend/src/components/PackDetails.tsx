import PackInfo from "../subcomponents/PackInfo";
import LanguageFlag from "../subcomponents/LanguageFlag";
import ButtonIcon from "../subcomponents/ButtonIcon";
import "../styles/components/PackDetails.css";
import { Skeleton } from "@material-ui/lab";

type PackDetailsProps = {
    packTitle?: string,
    packDescription?: string,
    packDateCreated?: string,
    packFlagInfo?: { countryCode: string, languageShorthand: string }
}

const PackDetails = (props: PackDetailsProps) => {
    return(
        <>
            <div className="pack-details-component pack-details-exit-button" >
                <ButtonIcon onClick={() => { console.log("Close.") }} icon="close" />
            </div>
            <div className="pack-details-component pack-details-pack-info" >
                <PackInfo title={props.packTitle} dateCreated={props.packDateCreated} />
            </div>
            <div className="pack-details-component pack-details-language-flag" >
                <LanguageFlag countryCode={props.packFlagInfo?.countryCode} languageShorthand={props.packFlagInfo?.languageShorthand} />
            </div>
            <p className="pack-details-description">{props.packDescription ?? <Skeleton variant="text" animation="wave" />}</p>
        </>
    )
}

export default PackDetails;