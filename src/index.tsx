import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/App/index.scss'

import { createRoot } from "react-dom/client";
import ProviderContainer from './ProviderContainer';
import {useChangeLanguage} from './Hooks/useChangeLanguage'; 
import i18n from 'i18next';

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(

  <ProviderContainer>
    <App />
  </ProviderContainer>    

);