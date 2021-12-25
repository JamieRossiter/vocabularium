import IconButton from "@material-ui/core/IconButton";
import { Delete, Close, AddBox, FileCopy } from "@material-ui/icons";

type ButtonIconProps = {
    icon: string,
    onClick: Function
}

const ButtonIcon = (props: ButtonIconProps): JSX.Element => {

    const iconList = {
        delete: <Delete />,
        close: <Close />,
        create: <AddBox />,
        copy: <FileCopy />
    }

    const iconReference: JSX.Element = iconList[props.icon as keyof typeof iconList];

    return(
        <>
            <IconButton onClick={() => {props.onClick()}}>{iconReference}</IconButton>
        </>
    )

}

export default ButtonIcon;