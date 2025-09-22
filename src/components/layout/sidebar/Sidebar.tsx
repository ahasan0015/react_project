import './Sidebar.css'
import Profile from '../../../assets/img/admin.jpg'

function Sidebar() {
    return (
        <>
        <input type="checkbox" id='sidebar-toggle' className="sidebar-toggle d-none"/>
            <div id='sidebar'>
                <h3 className='text-center'>Admin</h3>
                <div className='text-center'>
                    <img src={Profile} alt="profile" width={80} height={80} className='rounded-circle profile-img-hover' />
                    <h5 className='text-danger animated-text'>Ahasan Habib Roxy</h5>
                    <small className='text-light'>Admin</small>
                </div>
                <nav className='mt-4 navbar' data-bs-theme="dark">
                    <ul className='navbar-nav'>
                        <li className='nav-item'><a href="" className='nav-link fw-bold'> <i className="fa-regular fa-house"></i>Dashboard</a></li>
                        <li className='nav-item'><a href="" className='nav-link fw-bold'><i className="fa-regular fa-comment"></i>Posts</a></li>
                        <li className='nav-item'><a href="" className='nav-link fw-bold'><i className="fa-regular fa-circle-user"></i>Add New</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default Sidebar