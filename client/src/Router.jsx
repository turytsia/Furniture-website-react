import React from 'react'
import { Route, Switch } from 'react-router-dom'

//components
import Header from './components/Header'
import Footer from './components/Footer'
import Breadcrumbs from './components/Breadcrumbs'
//Pages
import Home from './Home'
import About from './About'

export default function Router() {
    return (
        <section className="app-router">
            <Header />
            <section className="app-router-body">
                <Breadcrumbs />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                </Switch>
            </section>
            <Footer />
        </section>
    )
}
