import React, { Component } from "react";

class Register extends Component{
    render(){
        return(
            <div className="register">
            <br/><br/><br/>
            <form>

 <div class="form-group">
              <label>Firstname</label>
              <input type="text" class="form-control" placeholder="Enter Firstname"/>
            </div>


 <div class="form-group">
              <label for="exampleInputEmail1">Middlename</label>
              <input type="text" class="form-control" placeholder="Middlename"/>
            </div>

             <div class="form-group">
              <label >Lastname</label>
              <input type="text" class="form-control" placeholder="lastname"/>
            </div>

            <div class="form-group">
              <label>Email address</label>
              <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email"/>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

             <div class="form-group">
              <label>Username</label>
              <input type="text" class="form-control" placeholder="Username"/>
            </div>


            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>

             <div class="form-group">
              <label for="exampleInputPassword2">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password"/>
            </div>
            <button type="submit" class="btn buttons">Submit</button>
            <br/>
          </form>
            </div>
        );
    }
}

export default Register;