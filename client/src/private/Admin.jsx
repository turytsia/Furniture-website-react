import React, { createContext, useEffect, useState } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
//http
import http from '../services.js'
//components
import Profile from './Profile'
import Pages from './Pages'
import BlogList from './BlogList'
import Users from './Users'
import Navigation from './Navigation'
//pages
import Register from '../auth/Register'
import Login from '../auth/Login'
//icons
import { faUser, faList, faBlog, faUsers, faSignOutAlt, faComment, faPhone, faTrash, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons'
library.add(faUser, faList, faBlog, faUsers, faSignOutAlt, faComment, faPhone, faTrash, faEdit, faPlus)

//context
export const AuthContext = createContext(null)

export default function Admin() {
    const [isAuthorized, setAuthorized] = useState(false)
    const [user, setUser] = useState(null)
    const history = useHistory()

    //check if user is authorized
    async function getAuthorization() {
        const { data } = await http.get('/admin')
        setAuthorized(data.success)
        setUser(data.user)
    }

    useEffect(() => {
        getAuthorization()

        if (!isAuthorized)
            history.push('/admin/register')
        else
            history.push('/admin/account')
    }, [history, isAuthorized])
    return (
        <section className="admin">
            <AuthContext.Provider value={user}>
                <Switch>
                    {isAuthorized ?
                        <>
                            <Navigation setAuthorized={setAuthorized} />
                            <Route exact path='/admin/account' component={Profile} />
                            <Route exact path='/admin/pages' component={Pages} />
                            <Route exact path='/admin/blogs' render={()=><BlogList setUser = {setUser}/>} />
                            <Route exact path='/admin/users' component={Users} />
                        </> :
                        <>
                            <Route exact path='/admin/register' render={() => <Register setAuthorized={setAuthorized} />} />
                            <Route exact path='/admin/login' render={() => <Login setAuthorized={setAuthorized} />} />
                        </>}
                </Switch>
            </AuthContext.Provider>
        </section>
    )
}
