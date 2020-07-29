import React from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
    height: 250px;
    width: 400px;

    margin: 50px auto;

    text-align: center;

    border: 1px solid #000;
    border-radius: 5px;
`;

const Heading = styled.h1`
    font-color: black;
`;

const Button = styled.a`
    color: white;
    background-color: #000;

    border: none;

    padding: 30px;
    border-radius: 5px;

    font-size: 2rem;
`;

function Login() {
    return (
        <div>
            <LoginContainer>
                <Heading>
                    {" "}
                    Welcome to <br></br> Moo
                </Heading>
                <Button href="http://localhost:5000/auth/google">
                    Login using Google
                </Button>
            </LoginContainer>
        </div>
    );
}

export default Login;
