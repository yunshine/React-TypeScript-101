import { useContext } from "react";
import { Route, Redirect } from "react-router";
import { AuthContext } from "../Context/AuthContext";
// This component protects the routes that you should be logged in for...

// destructured props parameter and renamed...
// const PrivateRoute = (props) => {
const PrivateRoute = ({ component: Component, roles, ...rest }) => {
    const { isAuthenticated, user } = useContext(AuthContext);

    return (
        <Route {...rest} render={props => {
            if (!isAuthenticated) {
                return <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
            }

            if (!roles.includes(user.role)) {
                return <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            }

            return <Component {...props} />
        }} />
    )
}

export default PrivateRoute;