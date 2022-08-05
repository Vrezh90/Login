import React, {useEffect} from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormControls/formControls";
import {required} from "../Helpers/validators";
import {setLogin} from "../Store/Thunk-Creators/thunk-creators";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
import {isAuthSelector} from "../Store/Selectors/selectors";
import style from "../Common/FormControls/formControl.module.css";
import lock1 from '../Assets/images/lock1.png';

const LoginForm = (props) => {

    return (
            <form onSubmit={props.handleSubmit} >
                <div>
                    <Field type="text"
                           style={{height:'40px', width:'300px', borderRadius:"5px", borderWidth:'1px'}}
                           placeholder="Email Address*"
                           validate={[required]}
                           name={"email"}
                           component={Input}/>
                </div>
                <div>
                    <Field type="password"
                           style={{height:'40px', width:'300px', marginTop:'20px', borderRadius:"5px", borderWidth:'1px'}}
                           placeholder="Password*"
                           name={"password"}
                           validate={[required]}
                           component={Input}/>
                </div>
                <div style={{display: 'flex', marginTop: '20px'}}>
                    <div>
                    <Field type="checkbox"
                    name={"rememberMe"}
                    component={Input}/>
                    </div>
                    <span style={{marginLeft:'5px'}}>Remember me</span>
                </div>
                <div>
                    {props.error && <div className={style.formSummaryError}>{props.error}</div>}
                </div>
                <button
                    style={{height:'35px',width:'300px',marginTop:'20px',color:'white',borderRadius:"5px",backgroundColor:'#1976d2',borderWidth:'0px'}}>
                    SIGN IN
                </button>
            </form>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const  Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuth = useSelector(isAuthSelector);

    useEffect(() =>{
        if(isAuth) {
            navigate('/dashboard')
        }
    },[isAuth]);

    const onSubmit = (formData) => {
        dispatch(setLogin(formData.email, formData.password, formData.rememberMe));
    }

    return (
        <div style={{marginLeft: '650px', marginTop: '100px'}}>
            <img src={lock1} style={{width:'50px', height: '50px', marginLeft:'120px', marginBottom:'5px' }}/>
            <h1 style={{marginLeft:'80px', marginBottom:'20px'}}>Sign in</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;