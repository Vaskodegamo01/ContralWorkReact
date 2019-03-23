import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {loginChangeImput,fetchSendForm} from "../../store/actions";

class Login extends Component {
    render() {

            return (
                <Fragment>
                    <div>
                        <h1>Форма Авторизации</h1>
                        <form>
                            <label>
                                username:
                                <input type="text" name="username"  defaultValue={this.props.login.username} onChange={(event)=>this.props.loginChangeImput(event)}/>
                            </label>
                            <label>
                                password:
                                <input type="text" name="password" defaultValue={this.props.login.password} onChange={(event)=>this.props.loginChangeImput(event)}/>
                            </label>
                            <button onClick={(e)=>this.props.fetchSendForm(e,"users/sessions", this.props.login, this.props.history)}>Login</button>
                        </form>
                    </div>
                </Fragment>
            );

    }
}

const mapStateToProps = (state)=>{
    return{
        login: state.login,
        user: state.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loginChangeImput: (e) => dispatch(loginChangeImput(e)),
        fetchSendForm:(e,url, data, history) => dispatch(fetchSendForm(e,url, data, history))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);