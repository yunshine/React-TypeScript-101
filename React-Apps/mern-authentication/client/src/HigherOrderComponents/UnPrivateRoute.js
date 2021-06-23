import { useContext } from "react";
import { Route, Redirect } from "react-router";
import { AuthContext } from "../Context/AuthContext";

// This component checks to see if you're logged in so that you don't have to ever see the login page or the register page because it wouldn't make sense to see those pages...

// destructured props parameter and renamed...
// const UnPrivateRoute = (props) => {
const UnPrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <Route {...rest} render={props => {
            if (isAuthenticated) {
                return <Redirect to={{ pathname: "/home", state: { from: props.location } }} />
            }

            return <Component {...props} />
        }} />
    )
}

export default UnPrivateRoute;