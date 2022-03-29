import { FunctionComponent} from "react";
import { Navigate, useLocation } from "react-router-dom";
import { hasToken } from "../utils/user";

interface AuthRouteProps {
	component: FunctionComponent
}

const AuthRoute = (props: AuthRouteProps) => {
	const Component = props.component
	const location = useLocation()

	if (!hasToken()) {
		return <Navigate to={`/login`} state={location.pathname} replace />
	}
	return <Component/>
}

export default AuthRoute
