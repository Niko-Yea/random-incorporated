import { DescribtionSection } from "../components/DescriptionSection";
import { Footer } from "../components/Footer";
import { GallerySection } from "../components/GallerySection";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { SalonPromotionSection } from "../components/SalonPromotionSection";
import { SocialLinksSection } from "../components/SocialLinksSection";
import { StorePromotionSection } from "../components/StorePromotionSection";

export const HomePageView = () => {
  return (
    <>
      <Header />
      <Main>
        <DescribtionSection />
        <StorePromotionSection />
        <GallerySection />
        <SalonPromotionSection />
        <SocialLinksSection />
      </Main>
      <Footer />
    </>
  );
};
