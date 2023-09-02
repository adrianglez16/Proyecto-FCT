import { usePage, Link } from '@inertiajs/react';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import '../../css/app.css'

export default function NavigationBar() {

  const { auth } = usePage().props;

  return (
    <Navbar variant="dark" bg="dark" expand="lg" className="p-3">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src="/assets/img/roomer-logo-07.png"
            width="150"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav className="ms-auto ">
            <Nav.Link href="/" className="mx-2 bi bi-house text-light"> Inicio</Nav.Link>
            <Nav.Link href="/about-us" className="mx-2 bi bi-patch-question text-light"> About</Nav.Link>
            <Nav.Link href="/escape-rooms" className="mx-2 bi-person-video3 text-light"> Escape-Rooms</Nav.Link>
            <Nav.Link href="/blog" className="mx-2 bi bi-book text-light"> Blog</Nav.Link>
            {auth.user == null &&
              <>
                <Nav.Link href="/login" className="mx-2 bi bi-door-open text-light"> Iniciar sesión</Nav.Link>
                <Nav.Link href="/register" className="mx-2 bi bi-check-circle text-light"> Registrarse</Nav.Link>
              </>
            }
            {auth.user != null &&
              <NavDropdown
                className="mx-2 white"
                id="nav-dropdown"
                title={auth.user.name}
                menuVariant="dark"
                align="end"
              >
                <NavDropdown.Item href="/my-scape-rooms"><i className='bi bi-person-video3 pe-3 text-light'></i>Mis Scape-Rooms</NavDropdown.Item>
                <NavDropdown.Item href="/my-rewards"><i className='bi bi-gift pe-3 text-light'></i>Mis Recompensas</NavDropdown.Item>
                <NavDropdown.Item href="/my-comments"><i className='bi bi-chat pe-3 text-light'></i>Mis comentarios</NavDropdown.Item>
                <NavDropdown.Item href="/perfil"><i className='bi bi-person-circle pe-3 text-light'></i>Mi Perfil</NavDropdown.Item>

                {auth.user.roles == 'admin' &&
                <NavDropdown.Item className="bi pe-3 white" href={route('users.index')}> <i className='bi bi-house-gear-fill pe-3'></i>Dashboard</NavDropdown.Item>
                
                }

                {auth.user.roles == 'mod' &&
                 <NavDropdown.Item className="bi pe-3 white" href={route('users.index')}> <i className='bi bi-house-gear-fill pe-3'></i>Dashboard</NavDropdown.Item>

                }

                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link href="/logout" method="post" as="NavDropDown.Item">
                    <i className='bi bi-door-closed pe-3 text-light'></i>
                    Cerrar sesión
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}