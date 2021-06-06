import React  from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import { isLoggedIn } from 'Provider/Auth';
export const App = ()=> {

        return (
            <BrowserRouter>
                <Switch>
                {isLoggedIn()?<>
                    <Route path="/admin" render={props => <AdminLayout {...props} />} />
                    <Redirect from="/" to="/admin/index" />
                    <Redirect to="/admin/index" />
                </>:<>
                    <Route path="/auth" render={props => <AuthLayout {...props} />} />
                    <Redirect from="/" to="/auth/login" />
                    <Redirect to="/auth/login" />
                </>}
                
                </Switch>
            </BrowserRouter>
        )

}

export default App
