import IconButton from "@material-ui/core/IconButton";
import { Delete, Close } from "@material-ui/icons";

type ButtonIconProps = {
    icon: string
}

const ButtonIcon = (props: ButtonIconProps): JSX.Element => {

    const iconList = {
        delete: <Delete />,
        close: <Close />
    }

    const iconReference: JSX.Element = iconList[props.icon as keyof typeof iconList];

    return(
        <>
            <IconButton>{iconReference}</IconButton>
        </>
    )

}

export default ButtonIcon;