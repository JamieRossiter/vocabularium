
type PackInfoProps = {
    title: string,
    dateCreated: string
}

const PackInfo = (props: PackInfoProps) => {
    return(
        <>
            <h1>{props.title}</h1>
            <p>{props.dateCreated}</p>
        </>
    )
}

export default PackInfo;