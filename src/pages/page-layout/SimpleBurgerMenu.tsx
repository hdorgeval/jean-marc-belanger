import { FC } from 'react';

export const SimpleBurgerMenu: FC = () => {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      data-bs-theme="light"
      style={{
        backgroundColor: 'rgb(223 223 223)',
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>
        <button
          className="navbar-toggler pt-1-half border border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#simple-burger-menu"
          aria-controls="simple-burger-menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list fs-navbar-toggler-3"></i>
        </button>
        <div className="collapse navbar-collapse" id="simple-burger-menu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Acceuil
              </a>
            </li> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle no-vertical-align font-vujahday-script fw-bolder fs-big-1"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ateliers
              </a>
              <ul className="dropdown-menu">
                <li className="fs-6 fw-bolder">
                  <a className="dropdown-item" href="#">
                    Jeudi 6 juin à Paris - 19h/21h15
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="fs-6 fw-bolder">
                  <a className="dropdown-item" href="#">
                    Samedi 8 juin à Paris - 9h30/18h30
                  </a>
                </li>
                <li className="fs-6 fw-bolder">
                  <a className="dropdown-item" href="#">
                    Dimanche 9 juin à Paris - 9h30/18h30
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="fs-6 fw-bolder">
                  <a className="dropdown-item" href="#">
                    Samedi 15 juin à Paris - 9h30/18h30
                  </a>
                </li>
                <li className="fs-6 fw-bolder">
                  <a className="dropdown-item" href="#">
                    Dimanche 16 juin à Paris - 9h30/18h30
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <hr className="text-black" />
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle no-vertical-align font-vujahday-script fw-bolder fs-big-1 ms-4"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Stages
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Stage d'été du 25 au 28 juillet 2024
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

SimpleBurgerMenu.displayName = 'SimpleBurgerMenu';
