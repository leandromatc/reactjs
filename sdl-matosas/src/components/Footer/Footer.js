import { Link } from 'react-router-dom'


function Footer() {

    return (

        <div class="container">
            <footer class="py-3 my-4">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item"><Link to="/" class="nav-link px-2 text-muted">Home</Link></li>
                    <li class="nav-item"><Link to="/nosotros" class="nav-link px-2 text-muted">Nosotros</Link></li>
                    <li class="nav-item"><Link to="/contacto" class="nav-link px-2 text-muted">Contacto</Link></li>
                </ul>
            <p class="text-center text-muted">&copy; 2022 Suplementos del Litoral</p>
        </footer>
    </div>
    )

}

export default Footer;