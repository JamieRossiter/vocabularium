import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Testing
import ButtonIcon from "./subcomponents/ButtonIcon";
import LanguageDropdown from "./subcomponents/LanguageDropdown";
import LanguageFlag from "./subcomponents/LanguageFlag";
import Logo from "./subcomponents/Logo";
import PackInfo from "./subcomponents/PackInfo";
import ProgressBar from "./subcomponents/ProgressBar";
import CardFunctions from "./components/CardFunctions";
import VocabCard from "./components/VocabCard";
import CreatePackDetails from "./components/CreatePackDetails";
import WordSearchBar from "./components/WordSearchBar";
import VocabCardButton from "./components/VocabCardButton";
import WordCreationList from "./components/WordCreationList";
import HeaderBar from "./components/HeaderBar";
import CardList from "./components/CardList";
import PackDetails from "./components/PackDetails";
import PackCreate from "./containers/PackCreate";
import PackView from "./containers/PackView";
import SearchLabel from "./subcomponents/SearchLabel";
import SectionHeading from "./components/SectionHeading";

ReactDOM.render(
  <React.StrictMode>
    <ProgressBar totalValue={10} progressValue={5} />
  </React.StrictMode>,
  document.getElementById('root')
);
