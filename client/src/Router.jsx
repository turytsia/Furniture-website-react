import React from 'react'
import { Route, Switch } from 'react-router-dom'

//components
import Header from './components/Header'
import Footer from './components/Footer'
//Pages
import Home from './Home'

export default function Router() {
    return (
        <section className="app-router">
            <Header />
            <Switch>
                <Route path='' component={Home} />
            </Switch>
            <Footer />
        </section>
    )
}
