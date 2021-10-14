import "../styles/subcomponents/PackInfo.css";
import { Skeleton } from "@material-ui/lab";

type PackInfoProps = {
    title?: string,
    dateCreated?: string
}

const PackInfo = (props: PackInfoProps) => {
    return(
        <>
            <h2 className="pack-info-header">{props.title ?? <Skeleton animation="wave" height={40} />}</h2>
            <p className="pack-info-dateCreated">{props.dateCreated ? `Created ${props.dateCreated}` : <Skeleton variant="text" animation="wave" />}</p>
        </>
    )
}

export default PackInfo;
