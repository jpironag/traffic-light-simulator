import React from 'react';
import ReactDOM from 'react-dom';

//include your index.scss file into the bundle
import '../styles/index.scss';

//import your own components
//import {Home} from './component/home.jsx';

import Trafficlight from './component/Trafficlight.jsx';

//render your react application
ReactDOM.render(
    <Trafficlight />,
    document.querySelector('#app')
);