import ButtonIcon from "../subcomponents/ButtonIcon";
import "../styles/components/SectionHeading.css";

type SectionHeadingProps = {
    headingContent: string
}

const SectionHeading = (props: SectionHeadingProps) => {
    return(
        <>
            <div className="section-heading-component section-heading-close-button">
                <ButtonIcon icon="close" />
            </div>
            <div className="section-heading-component section-heading-heading">
                <h2>{props.headingContent}</h2>
            </div>
            <div className="section-heading-component">
            </div>
        </>
    )
}

export default SectionHeading;