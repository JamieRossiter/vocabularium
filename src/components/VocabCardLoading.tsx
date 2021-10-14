import { Button, Card, CardActions, CardActionArea, CardContent, CircularProgress } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import "../styles/components/VocabCardLoading.css";

const VocabCardLoading = () => {
    return(
        <>
            <div className="vocab-card-loading-container">
                <Card className="vocab-card-loading-card">
                    <CardContent>
                        <div className="vocab-card-loading-spinner-container">
                            <CircularProgress className="vocab-card-loading-spinner" size={50} />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )

}

export default VocabCardLoading;