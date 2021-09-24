import SearchIcon from '@material-ui/icons/Search';
import "../styles/subcomponents/SearchLabel.css";

const SearchLabel = () => {
    return(
        <>
            <SearchIcon className="search-label-icon" />
            <p className="search-label-text">Search for an English word</p>
        </>
    )
}

export default SearchLabel;