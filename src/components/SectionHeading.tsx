import ButtonIcon from "../subcomponents/ButtonIcon";

type SectionHeadingProps = {
    headingContent: string
}

const SectionHeading = (props: SectionHeadingProps) => {
    return(
        <>
            <ButtonIcon icon="close" />
            <h2>{props.headingContent}</h2>
        </>
    )
}

export default SectionHeading;