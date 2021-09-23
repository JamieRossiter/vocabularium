import Logo from "../subcomponents/Logo";
import ButtonIcon from "../subcomponents/ButtonIcon";

const HeaderBar = () => {
    return(
        <>
            <div>
                <ButtonIcon icon="create" />
                <Logo />
            </div>
        </>
    )
}

export default HeaderBar;