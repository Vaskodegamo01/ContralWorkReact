import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

import {loginChangeImput,fetchSendForm} from "../../store/actions";

class Register extends Component {
    render() {
        if(!this.props.user.token){
        return (
            <Fragment>
                <div>
                    <h1>Форма Регистрации</h1>
                    <form>
                    <label>
                        username:
                        <input type="text" name="username"  value={this.props.login.username} onChange={(event)=>this.props.loginChangeImput(event)}/>
                    </label>
                    <label>
                        password:
                        <input type="text" name="password" value={this.props.login.password} onChange={(event)=>this.props.loginChangeImput(event)}/>
                    </label>
                    <label>
                        displayname:
                        <input type="text" name="displayname" value={this.props.login.displayname} onChange={(event)=>this.props.loginChangeImput(event)}/>
                    </label>
                    <label>
                        phone:
                        <input type="text" name="phone" value={this.props.login.phone} onChange={(event)=>this.props.loginChangeImput(event)}/>
                    </label>
                        <button onClick={(e)=>this.props.fetchSendForm(e,"users",this.props.login)}>Register</button>
                    </form>
                </div>
            </Fragment>

        );
        }else{
            return (
                <Fragment>
                    {this.props.history.push('/')}
                </Fragment>
            )
        }
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
        fetchSendForm:(e,url,data) => dispatch(fetchSendForm(e,url,data))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);