import Navbar from './Navbar'
import Sidebar from './sidebar/Sidebar'
import '../../assets/css/custom.css'
function Layout() {
    return (
        <>
           
                <Sidebar />
                <div className='main'>
                    <Navbar />
                    <div className='container-fluid py-4'>
                        <h3>Dashborad</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum consequatur impedit temporibus nulla reprehenderit veniam doloremque ut totam dolores a, voluptatem reiciendis amet pariatur earum molestiae? Eos explicabo fugiat praesentium.</p>
                    </div>
                </div>
            


        </>
    )
}
export default Layout