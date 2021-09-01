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
                        <input className="admin-profile-name edit-input" type="text" defaultValue={`${user.name} ${user.surname}`} disabled={false} />
                    </span>
                </div>
            </div>
        </section> : <section>Loading</section>
    )
}
