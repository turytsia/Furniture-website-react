import React from 'react'
import { Route, Switch } from 'react-router-dom'

//components
import Header from './components/Header'
import Footer from './components/Footer'
import Breadcrumbs from './components/Breadcrumbs'
import Gallery from './Gallery'
//Pages
import Home from './Home'
import About from './About'
import Blog from './Blog'
import SingleBlog from './SingleBlog'

export default function Router() {
    return (
        <section className="app-router">
            <Header />
            <section className="app-router-body">
                {window.location.pathname && <Breadcrumbs />}
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/gallery' component={Gallery} />
                    <Route exact path='/blog' component={Blog} />
                    <Route exact path='/blog/id' render={() => <SingleBlog />} />
                </Switch>
            </section>
            <Footer />
        </section>
    )
}
