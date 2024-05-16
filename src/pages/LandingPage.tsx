import { FC, useCallback } from 'react';
import { useAnalytics } from '../hooks/useAnalytics';
import { useHashToScrollIfNeeded } from '../hooks/useHashToScrollIfNeeded';
import { websiteConfig } from '../website.config';
import { PublicPageLayout } from './page-layout/PublicPageLayout';

export const LandingPage: FC = () => {
  useHashToScrollIfNeeded('nearest');
  const { trackSimpleEvent } = useAnalytics();

  const handleClickOnBienvenue = useCallback(() => {
    trackSimpleEvent('bienvenue');
  }, [trackSimpleEvent]);

  return (
    <PublicPageLayout htmlTitle={`Accueil | ${websiteConfig.websiteTitle}`}>
      <section
        id="home"
        className="w-100"
        data-bs-target="#navbarSupportedContent"
        style={{ maxHeight: '100vh', maxWidth: '100vw' }}
      >
        <div
          className=""
          style={{
            backgroundImage: 'url(/images/backgrounds/landing-page.webp)',
            minHeight: '100vh',
            maxHeight: '100vh',
            backgroundPositionX: '54%',
            backgroundPositionY: '93%',
            backgroundSize: 'cover',
            position: 'relative',
            overflow: 'hidden',
            backgroundRepeat: 'no-repeat',
            zIndex: 1,
          }}
        >
          <div
            style={{
              background: 'linear-gradient(to bottom,rgba(63 87 132 / 97%), rgba(31 72 90 / 0%))',
              height: '100vh',
            }}
          >
            <div
              className="d-flex flex-column justify-content-start align-items-center"
              style={{ height: '100vh' }}
            >
              <div className="flex-grow-third"></div>
              <h1 className="font-montserrat text-light fw-bolder fs-big-1">Paris Constell</h1>
              <div className="container row justify-content-center">
                <div className="col-lg-8 col-md-10 text-center">
                  <p className="text-light font-montserrat mt-4 fs-2">
                    Ateliers, Stages & Formation à la Constellation Familiale et Systémique
                  </p>
                </div>
              </div>

              <a
                className="font-montserrat btn btn-outline-light btn-outline-light-custom border border-0 fs-big-1 fw-bolder w-100 mt-auto"
                href="#bienvenue"
                onClick={handleClickOnBienvenue}
              >
                <i className="bi bi-chevron-compact-down mb-0"></i>
              </a>
              {/* <div className="" style={{ minHeight: '9vh' }}></div> */}
            </div>
          </div>
        </div>
      </section>

    </PublicPageLayout>
  );
};

LandingPage.displayName = 'LandingPage';
