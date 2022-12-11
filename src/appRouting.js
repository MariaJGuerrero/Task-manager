import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFoundPage from './pages/404/not-found-page'
import Dashboard from './pages/dashboard/dashboard'
import LoginPage from "./pages/auth/login-page";

let loggedIn = true;

function AppRouting () {
    return(
        <div>
            <Router>
                <Routes>
                    <Route exact path='/' element= {loggedIn ? <Dashboard /> : <LoginPage />}/>
                    <Route exact path='/login' element= {<LoginPage /> }/>
                    <Route exact Path='/dashboard' element={loggedIn ? <Dashboard /> : <LoginPage />}/>
                    <Route component={NotFoundPage} />
                </Routes>
            </Router>
        </div>
    )
}

export default AppRouting;