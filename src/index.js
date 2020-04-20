import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobsList";

let translationTable = navigator.language.startsWith("es") ? localeEsMessages : localeEnMessages;

ReactDOM.render(
	<IntlProvider locale={navigator.language} messages= {translationTable}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);