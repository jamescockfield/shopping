import React from "react";

interface RegisterState {
    email?: string,
    password?: string,
    passwordConfirm?: string,
    error?: string
}

class Register extends React.Component<any, RegisterState> {

    constructor(props: any) {

        super(props);
        this.state = {
            email: "",
            password: "",
            passwordConfirm: "",
            error: ""
        };
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    sendRegister = () => {

        if (this.state.password !== this.state.passwordConfirm) {

            this.setState({ error: "passwords do not match" });
            return;
        }

        this.setState({ error: "" });

        fetch("/api/register", {
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

        return <div className="register">
            <h2>Register</h2>
            <input name="email" placeholder="email" value={ this.state.email } onChange={ this.handleChange }/>
            <input name="password" placeholder="password" value={ this.state.password } onChange={ this.handleChange } type="password"/>
            <input name="passwordConfirm" placeholder="confirm password" value={ this.state.passwordConfirm } onChange={ this.handleChange } type="password"/>
            <input type="submit" value="submit" onClick={ this.sendRegister }/>
            <span className="error">{ this.state.error }</span>
        </div>;
    }
}

export default Register;
