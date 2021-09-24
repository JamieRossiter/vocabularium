import "../styles/subcomponents/PackInfo.css";

type PackInfoProps = {
    title: string,
    dateCreated: string
}

const PackInfo = (props: PackInfoProps) => {
    return(
        <>
            <h2 className="pack-info-header">{props.title}</h2>
            <p className="pack-info-dateCreated">Created {props.dateCreated}</p>
        </>
    )
}

export default PackInfo;