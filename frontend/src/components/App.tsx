import React from 'react';
import 'css/App.css';

fetch("/api/")
    .then(res => res.text())
    .then(res => console.log(res));

const App = () => (
    <div className="login">
        <input placeholder="username"/>
        <input placeholder="password" type="password"/>
        <input type="submit" value="submit"/>
    </div>
);

export default App;
