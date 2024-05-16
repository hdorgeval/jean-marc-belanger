import { FC } from 'react';
import { useGuidedTour } from '../../hooks/useGuidedTour';
import { useMetaDescription } from '../../hooks/useMetaDescription';
import { useOffCanvasBackdropRemover } from '../../hooks/useOffCanvasBackdropRemover';
import { useTitle } from '../../hooks/useTitle';
import { Footer } from './Footer';

export interface PublicPageLayoutOwnProps {
  children: React.ReactNode;
  htmlTitle: string;
}
export const PublicPageLayout: FC<PublicPageLayoutOwnProps> = ({ children, htmlTitle }) => {
  useOffCanvasBackdropRemover();
  // usePublicPage();
  useGuidedTour();
  useTitle(htmlTitle);
  useMetaDescription(htmlTitle);
  return (
    <>
      {/* <HambugerMenu /> */}
      <div className="w-100 h-100 d-flex flex-column align-items-center overflow-y-scroll">
        {children}
        <Footer />
      </div>
    </>
  );
};

PublicPageLayout.displayName = 'PublicPageLayout';
