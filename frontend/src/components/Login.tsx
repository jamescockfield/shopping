import React from "react";

interface LoginState {
    email?: string,
    password?: string,
    error?: string
}

class Login extends React.Component<any, LoginState> {

    constructor(props: any) {

        super(props);
        this.state = {
            email: "",
            password: "",
            error: ""
        };
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    sendLogin = () => {

        this.setState({ error: "" });

        fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(res => {
                console.log(res.url);
                console.log(res.redirected);
                if (res.redirected && res.url) {
                    window.location.href = res.url;
                } else {
                    return res.text();
                }
            }).then(res => {
                this.setState({ error: res });
            });
    }

    render () {

        return <div className="login">
            <h2>Login</h2>
            <input name="email" placeholder="email" value={ this.state.email } onChange={ this.handleChange }/>
            <input name="password" placeholder="password" value={ this.state.password } onChange={ this.handleChange } type="password"/>
            <input type="submit" value="submit" onClick={ this.sendLogin }/>
            <span className="error">{ this.state.error }</span>
        </div>;
    }
}

export default Login;
