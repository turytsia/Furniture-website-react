import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
export default function Users() {
    return (
        <section className="admin-users">
            <div className="wrapper">
                <div className="admin-inner">
                    <div className="admin-filter">
                        <button>
                            <h5>Clear List</h5>
                        </button>
                    </div>
                    <div className="admin-users-list">
                        <div className="admin-list-item">
                            <h5>+380687327300</h5>
                            <button>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
