import React from 'react';

import PostList from './postList';
import '../css/style.css';
const App = () => {
    return (
        <div className="ui container">
            <div>
               <PostList/>
            </div>
        </div>
    );
};
export default App;