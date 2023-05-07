import type { Component } from 'solid-js';
import Headerbar from './headerbar';
import Content from './Content';

import styles from './index.css';

const App: Component = () => {
    return (  
        <div>
            <Headerbar/>
            <Content/>
        </div>

    );
};

export default App;