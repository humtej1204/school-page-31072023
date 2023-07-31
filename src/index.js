/* Libraries */
import React from 'react';
import { createRoot } from 'react-dom/client';
import {HashRouter} from "react-router-dom";

/* Components */
import { App } from './App';

/* StyleSheet */
import './index.scss'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <HashRouter>
        <App style={{overflow: "hidden"}}/>
    </HashRouter>
);
