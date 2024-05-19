import { FC } from 'react';

export const SimpleBurgerMenu: FC = () => {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        backgroundColor: 'rgb(17 14 27 / 68%)',
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
          <i className="bi bi-list text-white fs-navbar-toggler-3"></i>
        </button>
        <div className="collapse navbar-collapse" id="simple-burger-menu"></div>
      </div>
    </nav>
  );
};

SimpleBurgerMenu.displayName = 'SimpleBurgerMenu';
