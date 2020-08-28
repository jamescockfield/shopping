import React from 'react';

class Login extends React.Component<any, any> {

    sendLogin() {
        fetch("/api/login")
            .then(res => {
                if () {
                    return res.json();
                }
            }).then(res => {
            });
    }

    render () {

        return <div className="login">
            <input placeholder="username"/>
            <input placeholder="password" type="password"/>
            <input type="submit" value="submit"/>
        </div>;
    }
}

export default Login;
