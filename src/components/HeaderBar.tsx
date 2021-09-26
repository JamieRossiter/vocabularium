import { Button } from "@material-ui/core";
import { AddBox } from "@material-ui/icons";
import Logo from "../subcomponents/Logo";
import "../styles/components/HeaderBar.css";

const HeaderBar = () => {
    return(
        <>
            <div className="header-bar-container">
                <div className="header-bar-create-button">
                    <Button variant="text" startIcon={ <AddBox /> } >Create Pack</Button>
                </div>
                <div className="header-bar-logo" >
                    <Logo />    
                </div>
            </div>
        </>
    )
}

export default HeaderBar;