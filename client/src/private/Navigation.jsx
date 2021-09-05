import React,{useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { faUser,faList,faSignOutAlt,faBlog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//images
import logo from '../img/logo.png'
//http
import http from '../services.js'
export default function Navigation({setAuthorized}) {

    const history = useHistory()

    async function logout(){
        await http.get('/auth/logout')
        setAuthorized(false)
        history.push('/admin/login')
    }

    const [currentPage, setCurrentPage] = useState(0) 
    return (
        <aside className="admin-option">
                <Link to={''} className="admin-logo">
                    <img src={logo} alt="logo" />
                </Link>
                <div className="admin-option-inner">
                    <Link onClick={()=>setCurrentPage(0)} to={'/admin/account'} className={`admin-option-link ${currentPage===0&&'admin-option-link--active'}`}>
                        <FontAwesomeIcon icon={faUser} />
                        <span>
                            Account
                        </span>
                    </Link>
                    <Link onClick={()=>setCurrentPage(1)} to={'/admin/pages'} className={`admin-option-link ${currentPage===1&&'admin-option-link--active'}`}>
                        <FontAwesomeIcon icon={faList} />
                        <span>
                            Pages
                        </span>
                    </Link>
                    <Link onClick={()=>setCurrentPage(2)} to={'/admin/blogs'} className={`admin-option-link ${currentPage===2&&'admin-option-link--active'}`}>
                        <FontAwesomeIcon icon={faBlog} />
                        <span>
                            Blogs
                        </span>
                    </Link>
                    <Link onClick={()=>logout()} to={'/admin'} className={`admin-option-link ${currentPage===4&&'admin-option-link--active'}`}>
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        <span>
                            Sign Out
                        </span>
                    </Link>
                </div>
            </aside>
    )
}
