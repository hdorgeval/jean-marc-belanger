import { createBrowserRouter } from 'react-router-dom';
import { ContactFormError } from './pages/ContactFormError';
import { ContactFormSuccessfullySent } from './pages/ContactFormSuccessfullySent';
import { ContactMe } from './pages/ContactMe';
import { DernieresRealisations } from './pages/DernieresRealisations';
import { ErrorPage } from './pages/ErrorPage';
import { LandingPage } from './pages/LandingPage';
import { MentionsLegales } from './pages/MentionsLegales';
import { Tarifs } from './pages/Tarifs';
import { Testimonies } from './pages/Testimonies';
import { Dashboard } from './pages/dashboard/Dashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/contact',
    element: <ContactMe />,
  },
  {
    path: '/tarifs',
    element: <Tarifs />,
  },
  {
    path: '/dernieres-realisations',
    element: <DernieresRealisations />,
  },
  {
    path: '/temoignages',
    element: <Testimonies />,
  },
  {
    path: '/contact/success',
    element: <ContactFormSuccessfullySent />,
  },
  {
    path: '/contact/error',
    element: <ContactFormError />,
  },
  {
    path: '/mentions-legales',
    element: <MentionsLegales />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);
