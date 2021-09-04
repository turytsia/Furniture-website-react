import React, { useContext } from 'react'
import { AuthContext } from './Admin'
export default function Profile() {
    const user = useContext(AuthContext)

    return (
        user ? <section className="admin-profile">
            <div className="wrapper">
                <div className="admin-inner">
                    <div className="admin-profile-avatar"></div>
                    <h4 className="admin-profile-position">Admin</h4>
                    <span className="admin-profile-names">

                        <h4>{user.name} {user.surname}</h4>
                    </span>
                </div>
            </div>
        </section> : <section>Loading</section>
    )
}
