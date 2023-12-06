import { Form, Button, FormGroup, Label, Input } from 'reactstrap';
import { useState, useContext } from 'react';
import { Context } from './ContextApi';

function Login() {
    const { loginpage } = useContext(Context);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)
    const [userDetails, setUserDetails] = useState({
        username: "",
        password: ""
    });
    function onChangeHandler(e) {
        let inputElem = e.target;
        userDetails[inputElem.name] = inputElem.value;
        setUserDetails({ ...userDetails })
    }
    function onClickHandler(e) {
        e.preventDefault();
        setError(null);
        if (userDetails.username !== "" && userDetails.password !== "") {
            setIsLoading(true);
            fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userDetails)
            })
                .then(function (result) {
                    // console.log('result',result)
                    return result.json();
                }).then(function (res) {
                    setIsLoading(false);
                    // console.log("res", res)
                    if (res.message) {
                        // console.log('not Login')
                        setError(res.message)
                    }
                    else {
                        // console.log('login')
                        // setLoginValue(res)
                        loginpage()

                    }
                });
        } else {
            setError("Please provide username and password")
        }
    }
    // console.log(loginValue)
    return <div className='d-flex justify-content-center align-items-center bg-success page-height '>
        <Form formcontrol='true' className='login-page mb-5' onSubmit={onClickHandler} >
            <img src='logo.png' className='img-fluid' width={"100%"} />
            {error && <div className='h6 text-white'>{error}</div>}
            <FormGroup>
                <Label
                    for="username"
                    hidden
                >
                    Username
                </Label>
                <Input
                    id="username"
                    name="username"
                    placeholder="Username"
                    type="text"
                    onChange={onChangeHandler}
                />
            </FormGroup>
            <FormGroup>
                <Label
                    for="examplePassword"
                    hidden
                >
                    Password
                </Label>
                <Input
                    id="examplePassword"
                    name="password"
                    placeholder="Password"
                    type="password"
                    onChange={onChangeHandler}
                />
            </FormGroup>
            <Button color='primary' disabled={isLoading} >
                {
                    isLoading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                }
                &nbsp; Login
            </Button>
            <div className='mb-5'></div>
        </Form>
    </div>
}
export default Login