import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Routes from './config/routes';


injectTapEventPlugin();
render(Routes, document.getElementById('app'));
