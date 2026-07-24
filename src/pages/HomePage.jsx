import BannerHeroSection from '../components/BannerHeroSection.jsx';
import SiteHeader from '../components/SiteHeader.jsx';
import SingleProductCarousel from '../components/SingleProductCarousel.jsx';
import TrendingJewelleryCarousel from '../components/TrendingJewelleryCarousel.jsx';
import PromoBannerCarousel from '../components/PromoBannerCarousel.jsx';
import ShopBySellerCarousel from '../components/ShopBySellerCarousel.jsx';
import BulkProductsCarousel from '../components/BulkProductsCarousel.jsx';
import SingleProductCollectionSection from '../components/SingleProductCollectionSection.jsx';
import FounderBannerSection from '../components/FounderBannerSection.jsx';
import GrowYourBusinessSection from '../components/GrowYourBusinessSection.jsx';
import BlogsSection from '../components/BlogsSection.jsx';
import TestimonialsSection from '../components/TestimonialsSection.jsx';
import FooterSection from '../components/FooterSection.jsx';
import HomePageMobileBlocks from '../components/HomePageMobileBlocks.jsx';
import AboutSectionImageCarousel from '../components/AboutSectionImageCarousel.jsx';
import { useRef } from 'react';
import { useHomePageScale } from '../hooks/useHomePageScale.js';
import '../styles/home-page-responsive.css';

const imgRectangle365 = new URL('../assets/imgRectangle365.png', import.meta.url).href;
const imgRectangle24 = new URL('../assets/imgRectangle24.png', import.meta.url).href;
const imgRectangle25 = new URL('../assets/imgRectangle25.png', import.meta.url).href;
const imgRectangle26 = new URL('../assets/imgRectangle26.png', import.meta.url).href;
const imgRectangle27 = new URL('../assets/imgRectangle27.png', import.meta.url).href;
const imgRectangle28 = new URL('../assets/imgRectangle28.png', import.meta.url).href;
const videoGold9k = new URL('../assets/PixVerse_V6_Image_Text_540P_A_luxury_macro_pro (1).mp4', import.meta.url).href;
const videoGold18k = new URL('../assets/hailuo-2_3_A_luxury_macro_product_film_featuring_a_premium_gold_Earrings_piece_that_i_gave_-0.mp4', import.meta.url).href;
const videoGold20k = new URL('../assets/PixVerse_V6_Image_Text_540P_A_luxury_macro_pro (2) (1).mp4', import.meta.url).href;
const videoGoldStandard = new URL('../assets/PixVerse_V6_Image_Text_540P_A_luxury_macro_pro.mp4', import.meta.url).href;
const imgLogonew12 = new URL('../assets/imgLogonew12.png', import.meta.url).href;
const imgGoldenCrownForKingAndQueenAndSuccessOnTransparentBackgroundFreePng1 = new URL('../assets/imgGoldenCrownForKingAndQueenAndSuccessOnTransparentBackgroundFreePng1.png', import.meta.url).href;
const videoCustomizedJewellery = new URL(
  '../assets/Firefly Create an 8-second ultra-photorealistic cinematic video in 16-9 (3840×2160, 4K, 24fps) showi.mp4',
  import.meta.url,
).href;
const imgRectangle230 = new URL('../assets/imgRectangle230.png', import.meta.url).href;
const imgRectangle231 = new URL('../assets/imgRectangle231.png', import.meta.url).href;
const imgVector36 = new URL('../assets/imgVector36.png', import.meta.url).href;
const imgEllipse99 = new URL('../assets/imgEllipse99.png', import.meta.url).href;
const imgGroup26006 = new URL('../assets/imgGroup26006.png', import.meta.url).href;
const imgEllipse104 = new URL('../assets/imgEllipse104.png', import.meta.url).href;
const imgVector41 = new URL('../assets/imgVector41.png', import.meta.url).href;
const imgVector42 = new URL('../assets/imgVector42.png', import.meta.url).href;

function GoldCardVideo({ src, className = '' }) {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className={`absolute inset-0 size-full origin-center scale-[0.88] object-cover pointer-events-none rounded-tl-[23px] rounded-tr-[23px] ${className}`.trim()}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

function Rectangle365Default({ className = "" }) {
  return (
    <div className={className || "h-[242px] relative w-[241px]"} data-node-id="59:220" data-name="Rectangle 365/Default">
      <div className="absolute inset-0 rounded-tl-[15px] rounded-tr-[15px]" data-node-id="59:219">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[15px] rounded-tr-[15px] size-full" src={imgRectangle365} />
      </div>
    </div>
  );
}

function Component3({ className = "" }) {
  return (
    <div className={className || "h-[28px] relative w-[131px]"} data-node-id="14:251" data-name="Component 3">
      <div className="absolute bg-[#e8dbb5] border border-[#ac7d0c] border-solid inset-0 rounded-[5px]" data-node-id="5:32" />
      <p className="[word-break:break-word] absolute bottom-1/4 font-['Kanit:Regular'] leading-[16px] left-[7.63%] not-italic right-[7.63%] text-[#ac7d0c] text-[14px] top-[17.86%] whitespace-nowrap" data-node-id="5:33">
        Order protections
      </p>
    </div>
  );
}

export default function HomePage() {
  const canvasRef = useRef(null);
  useHomePageScale(canvasRef);

  return (
    <>
      <SiteHeader />
      <div className="home-page-root mx-auto relative w-full max-w-[1440px] min-h-[8880px]" data-node-id="1:2" data-name="Home Page">
        <BannerHeroSection />
        <div className="home-page-canvas" ref={canvasRef}>
          <div className="home-page-flow">
            <HomePageMobileBlocks />
            <TrendingJewelleryCarousel />
            <ShopBySellerCarousel />
            <PromoBannerCarousel />
            <SingleProductCarousel />
            <BulkProductsCarousel />
            <SingleProductCollectionSection />
            <FounderBannerSection />
            <GrowYourBusinessSection />
            <BlogsSection />
            <TestimonialsSection />
            <FooterSection />
      </div>
          <div className="home-page-content home-page-legacy absolute top-0 left-0 w-full max-w-[1440px]">
      <div className="absolute bg-[#f4eedb] border border-[#c9a84c] border-solid h-[94px] left-[120px] rounded-bl-[23px] rounded-br-[23px] top-[1010px] w-[267px]" data-node-id="37:118" />
      <div className="absolute bg-[#f4eedb] border border-[#c9a84c] border-solid h-[94px] left-[742px] rounded-bl-[23px] rounded-br-[23px] top-[1014px] w-[267px]" data-node-id="38:30" />
      <div className="absolute bg-[#f4eedb] border border-[#c9a84c] border-solid h-[94px] left-[431px] rounded-bl-[23px] rounded-br-[23px] top-[1014px] w-[267px]" data-node-id="38:25" />
      <div className="absolute bg-[#f4eedb] border border-[#c9a84c] border-solid h-[94px] left-[1053px] rounded-bl-[23px] rounded-br-[23px] top-[1018px] w-[267px]" data-node-id="38:31" />
      <div className="absolute overflow-hidden border border-[#c9a84c] border-solid bg-[#201a14] h-[212px] left-[120px] rounded-tl-[23px] rounded-tr-[23px] top-[832px] w-[267px]" data-node-id="38:16">
        <GoldCardVideo src={videoGold9k} />
      </div>
      <div className="absolute overflow-hidden border border-[#c9a84c] border-solid bg-[#201a14] h-[212px] left-[742px] rounded-tl-[23px] rounded-tr-[23px] top-[836px] w-[267px]" data-node-id="38:32">
        <GoldCardVideo src={videoGold20k} />
      </div>
      <div className="absolute overflow-hidden border border-[#c9a84c] border-solid bg-[#201a14] h-[212px] left-[431px] rounded-tl-[23px] rounded-tr-[23px] top-[836px] w-[267px]" data-node-id="38:26">
        <GoldCardVideo src={videoGold18k} />
      </div>
      <div className="absolute overflow-hidden border border-[#c9a84c] border-solid bg-[#201a14] h-[212px] left-[1053px] rounded-tl-[23px] rounded-tr-[23px] top-[840px] w-[267px]" data-node-id="38:33">
        <GoldCardVideo src={videoGoldStandard} />
      </div>
      <p className="[word-break:break-word] absolute font-['Playfair:Bold'] font-bold h-[106px] leading-[0] left-[calc(50%-106px)] text-[#201a14] text-[0px] top-[5946px] w-[772px]" data-node-id="5:107" style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}>
        <span className="font-['DM_Serif_Display:Regular'] leading-[normal] not-italic text-[36px]">Kalkata Jewels</span>
        <span className="font-['DM_Serif_Display:Regular'] leading-[normal] not-italic text-[36px]">{` `}</span>
        <span className="leading-[normal] text-[36px]">{`– `}</span>
        <span className="font-['Playfair_Display:Regular'] font-normal leading-[normal] text-[36px]">India’s leading gold jewellery B2B ecommerce Marketplace for Retailers</span>
      </p>
      <p className="[word-break:break-word] absolute font-['Poppins:Regular'] leading-[normal] left-[calc(50%-108px)] not-italic text-[#201a14] text-[15px] top-[6071px] w-[743px]" data-node-id="5:108">
        Kalkata Jewels is India’s leading B2B gold jewellery eCommerce Marketplace that connects manufacturers to retailers across India. Designed especially for jewellery businesses, it offers a seamless way to explore, compare, and purchase from 250+ verified sellers across India. With a Great mix of varieties and 100% certified designs, the platform brings together every category of gold jewellery, including bangles, necklaces, mangalsutras, chains, and All Types of Jewellery collections. Retailers can now buy directly from verified manufacturers at the lowest wastage and enjoy doorstep delivery with complete trust and transparency. Kalkata Jewels empowers jewellers to expand their sourcing of unique ornaments digitally, saving time and increasing profits. With its simple interface and vast product range, it’s redefining how India’s gold jewellery industry does business.
      </p>
      <div className="-translate-x-1/2 absolute h-[499px] left-[calc(50%-396px)] rounded-[16px] top-[5880px] w-[412px] overflow-hidden" data-node-id="5:109">
        <AboutSectionImageCarousel />
      </div>
      <p className="[word-break:break-word] absolute font-['Poppins:Bold'] leading-[normal] left-[215px] not-italic text-[20px] text-black top-[1057px] w-[78px]" data-node-id="38:19">
        9K Gold
      </p>
      <p className="[word-break:break-word] absolute font-['Poppins:Bold'] leading-[normal] left-[830px] not-italic text-[20px] text-black top-[1061px] w-[91px]" data-node-id="38:34">
        20K Gold
      </p>
      <p className="[word-break:break-word] absolute font-['Poppins:Bold'] leading-[normal] left-[521px] not-italic text-[20px] text-black top-[1061px] w-[87px]" data-node-id="38:27">
        18K Gold
      </p>
      <p className="[word-break:break-word] absolute font-['Poppins:Bold'] leading-[normal] left-[1146px] not-italic text-[20px] text-black top-[1065px] w-[89px]" data-node-id="38:35">
        22K Gold
      </p>
      <div className="absolute h-[418px] left-[-7px] top-[6443px] w-[1454px]" data-node-id="38:67">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-label="Customized jewellery manufacturing in India"
            className="absolute inset-0 size-full object-cover"
          >
            <source src={videoCustomizedJewellery} type="video/mp4" />
          </video>
        </div>
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Playfair_Display:Regular'] font-normal leading-[normal] left-[calc(50%+5.5px)] text-[#201a14] text-[40px] text-center top-[2506px] w-[163px]" data-node-id="32:144">
        Shop by
      </p>
      <div className="absolute bg-[#f4eedb] h-[646px] left-[151px] rounded-[23px] top-[2585px] w-[544px]" data-node-id="32:141" />
      <div className="absolute bg-[#f4eedb] h-[646px] left-[749px] rounded-[23px] top-[2585px] w-[544px]" data-node-id="32:142" />
      <div className="absolute h-[545px] left-[166px] rounded-[23px] top-[2599px] w-[514px]" data-node-id="5:128">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[23px] size-full" src={imgRectangle230} />
      </div>
      <div className="absolute h-[545px] left-[764px] rounded-[23px] top-[2599px] w-[514px]" data-node-id="5:130">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[23px]">
          <img alt="" className="absolute h-[116.29%] left-[-0.62%] max-w-none top-[-8.15%] w-[100.63%]" src={imgRectangle231} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[377px] not-italic text-[32px] text-black top-[3166px] whitespace-nowrap" data-node-id="32:145">
        GOLD
      </p>
      <p className="[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[942px] not-italic text-[32px] text-black top-[3166px] whitespace-nowrap" data-node-id="32:146">
        DIAMOND
      </p>
    </div>
        </div>
      </div>
    </>
  );
}
