import BannerHeroSection from '../components/BannerHeroSection.jsx';
import SiteHeader from '../components/SiteHeader.jsx';
import SingleProductCarousel from '../components/SingleProductCarousel.jsx';
import TrendingJewelleryCarousel from '../components/TrendingJewelleryCarousel.jsx';
import PromoBannerCarousel from '../components/PromoBannerCarousel.jsx';
import ShopBySellerCarousel from '../components/ShopBySellerCarousel.jsx';
import BulkProductsCarousel from '../components/BulkProductsCarousel.jsx';
import SingleProductCollectionSection from '../components/SingleProductCollectionSection.jsx';
import FounderBannerSection from '../components/FounderBannerSection.jsx';
import HomePageMobileBlocks from '../components/HomePageMobileBlocks.jsx';
import { useRef } from 'react';
import { useHomePageScale } from '../hooks/useHomePageScale.js';
import '../styles/home-page-responsive.css';

const imgRectangle365 = new URL('../assets/imgRectangle365.png', import.meta.url).href;
const imgRectangle293 = new URL('../assets/imgRectangle293.png', import.meta.url).href;
const imgRectangle295 = new URL('../assets/imgRectangle295.png', import.meta.url).href;
const imgRectangle297 = new URL('../assets/imgRectangle297.png', import.meta.url).href;
const imgRectangle272 = new URL('../assets/imgRectangle272.png', import.meta.url).href;
const imgInstagramLetterWhiteLogoIconIgAppTransparentBackgroundPremiumSocialMediaDesignForDigitalDownloadFreePng1 = new URL('../assets/imgInstagramLetterWhiteLogoIconIgAppTransparentBackgroundPremiumSocialMediaDesignForDigitalDownloadFreePng1.png', import.meta.url).href;
const imgPinterest1 = new URL('../assets/imgPinterest1.png', import.meta.url).href;
const imgFacebookAppRoundWhiteIcon1 = new URL('../assets/imgFacebookAppRoundWhiteIcon1.png', import.meta.url).href;
const imgLinkedinIconPngTransparentBackground81 = new URL('../assets/imgLinkedinIconPngTransparentBackground81.png', import.meta.url).href;
const imgAppStoreGooglePlayLogoPngSeeklogo3704491 = new URL('../assets/imgAppStoreGooglePlayLogoPngSeeklogo3704491.png', import.meta.url).href;
const imgChat781 = new URL('../assets/imgChat781.png', import.meta.url).href;
const img154071 = new URL('../assets/img154071.png', import.meta.url).href;
const imgWhatsappBlackLogoIcon241 = new URL('../assets/imgWhatsappBlackLogoIcon241.png', import.meta.url).href;
const imgEmailAndMailIconBlackFreePng1 = new URL('../assets/imgEmailAndMailIconBlackFreePng1.png', import.meta.url).href;
const imgUnifiedPaymentInterfaceUpiLogoPngSeeklogo3330881 = new URL('../assets/imgUnifiedPaymentInterfaceUpiLogoPngSeeklogo3330881.png', import.meta.url).href;
const imgRtgsneft722X3681 = new URL('../assets/imgRtgsneft722X3681.png', import.meta.url).href;
const img74086131 = new URL('../assets/img74086131.png', import.meta.url).href;
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
const imgRectangle303 = new URL('../assets/imgRectangle303.png', import.meta.url).href;
const imgRectangle230 = new URL('../assets/imgRectangle230.png', import.meta.url).href;
const imgRectangle231 = new URL('../assets/imgRectangle231.png', import.meta.url).href;
const imgBuyer2 = new URL('../assets/imgBuyer2.png', import.meta.url).href;
const imgEllipse4 = new URL('../assets/imgEllipse4.png', import.meta.url).href;
const imgVector = new URL('../assets/imgVector.png', import.meta.url).href;
const imgVector10 = new URL('../assets/imgVector10.png', import.meta.url).href;
const imgVector9 = new URL('../assets/imgVector9.png', import.meta.url).href;
const imgEllipse67 = new URL('../assets/imgEllipse67.png', import.meta.url).href;
const imgGroup25973 = new URL('../assets/imgGroup25973.png', import.meta.url).href;
const imgGroup25974 = new URL('../assets/imgGroup25974.png', import.meta.url).href;
const imgGroup25975 = new URL('../assets/imgGroup25975.png', import.meta.url).href;
const imgVector1 = new URL('../assets/imgVector1.png', import.meta.url).href;
const imgVector2 = new URL('../assets/imgVector2.png', import.meta.url).href;
const imgQrCodeForMobileEnglishWikipedia11 = new URL('../assets/imgQrCodeForMobileEnglishWikipedia11.png', import.meta.url).href;
const imgBuyer1 = new URL('../assets/imgBuyer1.png', import.meta.url).href;
const imgEllipse26 = new URL('../assets/imgEllipse26.png', import.meta.url).href;
const imgVector3 = new URL('../assets/imgVector3.png', import.meta.url).href;
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
      <div className="home-page-root mx-auto relative w-full max-w-[1440px] min-h-[8895px]" data-node-id="1:2" data-name="Home Page">
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
          </div>
          <div className="home-page-content home-page-legacy absolute top-0 left-0 w-full max-w-[1440px]">
      <div className="-translate-x-1/2 absolute bg-[#201a14] h-[408px] left-[calc(50%+2.5px)] top-[6789px] w-[1279px]" data-node-id="5:110" />
      <div className="absolute bg-[#37332f] border border-[#c9a84c] border-solid h-[96px] left-[354px] rounded-[13px] top-[6937px] w-[733px]" data-node-id="5:114" />
      <div className="absolute bg-[#37332f] border border-[#c9a84c] border-solid h-[96px] left-[353px] rounded-[13px] top-[7056px] w-[733px]" data-node-id="130:26" />
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
      <div className="absolute h-[220px] left-[80px] rounded-bl-[8px] rounded-tl-[8px] top-[7689px] w-[145px]" data-node-id="32:99">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[8px] rounded-tl-[8px] size-full" src={imgRectangle293} />
      </div>
      <div className="absolute h-[220px] left-[517px] rounded-bl-[8px] rounded-tl-[8px] top-[7689px] w-[145px]" data-node-id="32:112">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[8px] rounded-tl-[8px] size-full" src={imgRectangle295} />
      </div>
      <div className="absolute h-[220px] left-[953px] rounded-bl-[8px] rounded-tl-[8px] top-[7689px] w-[145px]" data-node-id="32:124">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[8px] rounded-tl-[8px] size-full" src={imgRectangle297} />
      </div>
      <div className="absolute border border-[#ac7d0c] border-solid h-[220px] left-[80px] rounded-[8px] top-[7689px] w-[406px]" data-node-id="32:98" />
      <div className="absolute bg-[#dcc685] h-[37px] left-[992px] rounded-[6px] top-[8348px] w-[137px]" data-node-id="29:38" />
      <div className="absolute bg-gradient-to-b from-[#c9a84c] h-[139px] left-[170px] rounded-[10px] to-[#fffaed] top-[8247px] w-[324px]" data-node-id="29:40" />
      <div className="absolute bg-[#201a14] h-[40px] left-[-2px] top-[8500px] w-[1440px]" data-node-id="28:14" />
      <p className="[word-break:break-word] absolute font-['Playfair:Bold'] font-bold h-[106px] leading-[0] left-[calc(50%-106px)] text-[#201a14] text-[0px] top-[5806px] w-[772px]" data-node-id="5:107" style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}>
        <span className="font-['DM_Serif_Display:Regular'] leading-[normal] not-italic text-[36px]">Kalkata Jewels</span>
        <span className="font-['DM_Serif_Display:Regular'] leading-[normal] not-italic text-[36px]">{` `}</span>
        <span className="leading-[normal] text-[36px]">{`– `}</span>
        <span className="font-['Playfair_Display:Regular'] font-normal leading-[normal] text-[36px]">India’s leading gold jewellery B2B ecommerce Marketplace for Retailers</span>
      </p>
      <p className="[word-break:break-word] absolute font-['Poppins:Regular'] leading-[normal] left-[calc(50%-108px)] not-italic text-[#201a14] text-[15px] top-[5931px] w-[743px]" data-node-id="5:108">
        Kalkata Jewels is India’s leading B2B gold jewellery eCommerce Marketplace that connects manufacturers to retailers across India. Designed especially for jewellery businesses, it offers a seamless way to explore, compare, and purchase from 250+ verified sellers across India. With a Great mix of varieties and 100% certified designs, the platform brings together every category of gold jewellery, including bangles, necklaces, mangalsutras, chains, and All Types of Jewellery collections. Retailers can now buy directly from verified manufacturers at the lowest wastage and enjoy doorstep delivery with complete trust and transparency. Kalkata Jewels empowers jewellers to expand their sourcing of unique ornaments digitally, saving time and increasing profits. With its simple interface and vast product range, it’s redefining how India’s gold jewellery industry does business.
      </p>
      <div className="-translate-x-1/2 absolute h-[499px] left-[calc(50%-396px)] rounded-[16px] top-[5740px] w-[412px]" data-node-id="5:109">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgRectangle272} />
      </div>
      <p className="[word-break:break-word] absolute font-['Kanit:Light'] h-[17px] leading-[16px] left-[calc(50%-297px)] not-italic text-[16px] text-white top-[6889px] w-[609px]" data-node-id="5:111">
        Grow your business with our premium gold products and exceptional customer service
      </p>
      <p className="[word-break:break-word] absolute font-['Playfair_Display_SC:Regular'] h-[35px] leading-[32px] left-[calc(50%-214px)] not-italic text-[42px] text-white top-[6831px] w-[444px]" data-node-id="5:112">
        Grow Your Business
      </p>
      <div className="absolute h-[5.5px] left-[757.5px] top-[7747px] w-[9px]" data-node-id="32:107">
        <div className="absolute inset-[-9%_-5.5%_-16.62%_-4.52%]">
          <img alt="" className="block max-w-none size-full" src={imgVector10} />
        </div>
      </div>
      <div className="absolute h-[5.5px] left-[321.5px] top-[7747px] w-[9px]" data-node-id="32:116">
        <div className="absolute inset-[-9%_-5.5%_-16.62%_-4.52%]">
          <img alt="" className="block max-w-none size-full" src={imgVector10} />
        </div>
      </div>
      <div className="absolute bg-[rgba(201,168,76,0.2)] h-[536px] left-[-2px] top-[7964px] w-[1440px]" data-node-id="28:15" />
      <div className="absolute h-[11.5px] left-[1013px] top-[8361px] w-[14px]" data-node-id="29:44">
        <div className="absolute inset-[-4.35%_-4.49%_-4.35%_-4.84%]">
          <img alt="" className="block max-w-none size-full" src={imgVector9} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['DM_Serif_Display:Regular'] leading-[normal] left-[991px] not-italic text-[13px] text-black top-[8036px] whitespace-nowrap" data-node-id="28:21">
        Kalkata Jewels
      </p>
      <div className="absolute bg-[rgba(255,255,255,0.9)] left-[992px] rounded-[6px] size-[28px] top-[8281px]" data-node-id="28:30" />
      <div className="absolute bg-white left-[1044px] rounded-[6px] size-[28px] top-[8281px]" data-node-id="28:31" />
      <div className="absolute bg-white left-[1096px] rounded-[6px] size-[28px] top-[8281px]" data-node-id="28:32" />
      <div className="absolute bg-white left-[1148px] rounded-[6px] size-[28px] top-[8430px]" data-node-id="28:33" />
      <div className="absolute left-[175px] size-[32px] top-[8451px]" data-node-id="30:68">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse67} />
      </div>
      <div className="absolute left-[230px] size-[32px] top-[8451px]" data-node-id="30:69">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse67} />
      </div>
      <div className="absolute left-[285px] size-[32px] top-[8451px]" data-node-id="30:70">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse67} />
      </div>
      <div className="absolute left-[340px] size-[32px] top-[8451px]" data-node-id="30:71">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse67} />
      </div>
      <div className="absolute left-[183px] size-[16px] top-[8459px]" data-node-id="30:67" data-name="instagram-letter-white-logo-icon-ig-app-transparent-background-premium-social-media-design-for-digital-download-free-png 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgInstagramLetterWhiteLogoIconIgAppTransparentBackgroundPremiumSocialMediaDesignForDigitalDownloadFreePng1} />
      </div>
      <div className="absolute left-[345px] size-[22px] top-[8456px]" data-node-id="30:72" data-name="pinterest 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPinterest1} />
      </div>
      <div className="absolute left-[237px] size-[18px] top-[8458px]" data-node-id="30:74" data-name="facebook-app-round-white-icon 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFacebookAppRoundWhiteIcon1} />
      </div>
      <div className="absolute left-[290px] size-[21px] top-[8457px]" data-node-id="30:75" data-name="linkedin-icon-png-transparent-background-8 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLinkedinIconPngTransparentBackground81} />
      </div>
      <div className="absolute h-[49px] left-[188px] top-[8317px] w-[144px]" data-node-id="30:77" data-name="app-store-google-play-logo-png_seeklogo-370449 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[293.58%] left-0 max-w-none top-[-48.62%] w-full" src={imgAppStoreGooglePlayLogoPngSeeklogo3704491} />
        </div>
      </div>
      <div className="absolute h-[71px] left-[325px] top-[8319px] w-[139px]" data-node-id="30:78" data-name="app-store-google-play-logo-png_seeklogo-370449 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[196.32%] left-0 max-w-none top-[-96.32%] w-full" src={imgAppStoreGooglePlayLogoPngSeeklogo3704491} />
        </div>
      </div>
      <div className="absolute left-[1047px] size-[23px] top-[8284px]" data-node-id="30:80" data-name="chat-78 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChat781} />
      </div>
      <div className="absolute flex items-center justify-center left-[995px] size-[22.227px] top-[8284px]" data-node-id="30:81">
        <div className="flex-none rotate-[-13.2deg]">
          <div className="relative size-[18.493px]" data-name="15407 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img154071} />
          </div>
        </div>
      </div>
      <div className="absolute left-[1100px] size-[20px] top-[8285px]" data-node-id="30:82" data-name="whatsapp-black-logo-icon--24 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhatsappBlackLogoIcon241} />
      </div>
      <div className="absolute left-[1151px] size-[23px] top-[8433px]" data-node-id="30:83" data-name="email-and-mail-icon-black-free-png 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgEmailAndMailIconBlackFreePng1} />
      </div>
      <div className="absolute h-[37px] left-[995px] top-[8446px] w-[73px]" data-node-id="30:86" data-name="unified-payment-interface-upi-logo-png_seeklogo-333088 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[197.3%] left-0 max-w-none top-[-48.65%] w-full" src={imgUnifiedPaymentInterfaceUpiLogoPngSeeklogo3330881} />
        </div>
      </div>
      <div className="absolute h-[37px] left-[1076px] top-[8446px] w-[73px]" data-node-id="30:87" data-name="rtgsneft-722x368 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRtgsneft722X3681} />
      </div>
      <div className="absolute border border-[#ac7d0c] border-solid h-[220px] left-[517px] rounded-[8px] top-[7689px] w-[406px]" data-node-id="32:111" />
      <div className="absolute h-[5.5px] left-[757px] top-[7747px] w-[9px]" data-node-id="32:134">
        <div className="absolute inset-[-9%_-5.5%_-16.62%_-4.52%]">
          <img alt="" className="block max-w-none size-full" src={imgVector10} />
        </div>
      </div>
      <div className="absolute h-[5.5px] left-[1195px] top-[7746px] w-[9px]" data-node-id="32:136">
        <div className="absolute inset-[-9%_-5.5%_-16.62%_-4.52%]">
          <img alt="" className="block max-w-none size-full" src={imgVector10} />
        </div>
      </div>
      <div className="absolute border border-[#ac7d0c] border-solid h-[220px] left-[953px] rounded-[8px] top-[7689px] w-[406px]" data-node-id="32:123" />
      <div className="absolute contents left-[685px] top-[7716px]" data-node-id="32:110">
        <div className="absolute flex items-center justify-center left-[685px] size-[12px] top-[7716px]" data-node-id="32:100">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="relative size-[12px]" data-name="7408613 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img74086131} />
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-center left-[699px] size-[12px] top-[7716px]" data-node-id="32:101">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="relative size-[12px]" data-name="7408613 2">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img74086131} />
            </div>
          </div>
        </div>
        <div className="absolute flex h-[12px] items-center justify-center left-[713px] top-[7716px] w-[13px]" data-node-id="32:102">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[12px] relative w-[13px]" data-name="7408613 3">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img74086131} />
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-center left-[728px] size-[12px] top-[7716px]" data-node-id="32:103">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="relative size-[12px]" data-name="7408613 4">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img74086131} />
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-center left-[742px] size-[12px] top-[7716px]" data-node-id="32:105">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="relative size-[12px]" data-name="7408613 5">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img74086131} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[1121px] top-[7716px]" data-node-id="32:125">
        <div className="absolute flex items-center justify-center left-[1121px] size-[12px] top-[7716px]" data-node-id="32:126">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="relative size-[12px]" data-name="7408613 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img74086131} />
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-center left-[1135px] size-[12px] top-[7716px]" data-node-id="32:127">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="relative size-[12px]" data-name="7408613 2">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img74086131} />
            </div>
          </div>
        </div>
        <div className="absolute flex h-[12px] items-center justify-center left-[1149px] top-[7716px] w-[13px]" data-node-id="32:128">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[12px] relative w-[13px]" data-name="7408613 3">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img74086131} />
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-center left-[1164px] size-[12px] top-[7716px]" data-node-id="32:129">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="relative size-[12px]" data-name="7408613 4">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img74086131} />
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-center left-[1178px] size-[12px] top-[7716px]" data-node-id="32:130">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="relative size-[12px]" data-name="7408613 5">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img74086131} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[249px] top-[7716px]" data-node-id="32:117">
        <div className="absolute flex items-center justify-center left-[249px] size-[12px] top-[7716px]" data-node-id="32:118">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="relative size-[12px]" data-name="7408613 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img74086131} />
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-center left-[263px] size-[12px] top-[7716px]" data-node-id="32:119">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="relative size-[12px]" data-name="7408613 2">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img74086131} />
            </div>
          </div>
        </div>
        <div className="absolute flex h-[12px] items-center justify-center left-[277px] top-[7716px] w-[13px]" data-node-id="32:120">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[12px] relative w-[13px]" data-name="7408613 3">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img74086131} />
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-center left-[292px] size-[12px] top-[7716px]" data-node-id="32:121">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="relative size-[12px]" data-name="7408613 4">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img74086131} />
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-center left-[306px] size-[12px] top-[7716px]" data-node-id="32:122">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="relative size-[12px]" data-name="7408613 5">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img74086131} />
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold'] font-semibold leading-[normal] left-[calc(50%-470px)] not-italic text-[#ac7d0c] text-[13px] top-[7741px] w-[68px]" data-node-id="32:113">
        Vikas Raut
      </p>
      <p className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium leading-[138.84500122070312%] left-[calc(50%-470px)] not-italic text-[#7b7b7b] text-[13px] top-[7776px] w-[210px]" data-node-id="32:114">{`I placed a custom earring order with kalkata jewels, and it tred out absolutely beautiful. `}</p>
      <p className="[word-break:break-word] absolute font-['Inter:Italic'] font-normal italic leading-[normal] left-[calc(50%-375px)] text-[#7b7b7b] text-[11px] top-[7743px] w-[74px]" data-node-id="32:115">
        Verified Buyer
      </p>
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
      <div className="absolute h-[418px] left-[-7px] top-[6303px] w-[1454px]" data-node-id="38:67">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[130.83%] left-[0.05%] max-w-none top-[-7.14%] w-full" src={imgRectangle303} />
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
      <div className="absolute left-[545px] size-[114px] top-[8247px]" data-node-id="48:484" data-name="QR_code_for_mobile_English_Wikipedia (1) 1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgQrCodeForMobileEnglishWikipedia11} />
      </div>
      <p className="[word-break:break-word] absolute font-['Kanit:SemiBold'] leading-[16px] left-[calc(50%-183px)] not-italic text-[#ac7d0c] text-[16px] top-[8369px] whitespace-nowrap" data-node-id="48:486">
        Scan to download
      </p>
      <div className="absolute contents left-[382px] top-[6954px]" data-node-id="5:124" data-name="Mask group">
        <div className="absolute h-[66.706px] left-[379.8px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.198px_2.224px] mask-size-[62.277px_63px] rounded-[375px] top-[6682.78px] w-[65.941px]" data-node-id="5:126" style={{ maskImage: `url("${imgBuyer1}")` }} data-name="Buyer 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[375px] size-full" src={imgBuyer2} />
        </div>
      </div>
      <div className="absolute contents left-[381px] top-[7073px]" data-node-id="130:27" data-name="Mask group">
        <div className="absolute h-[66.706px] left-[378.8px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.198px_2.224px] mask-size-[62.277px_63px] rounded-[375px] top-[6801.78px] w-[65.941px]" data-node-id="130:29" style={{ maskImage: `url("${imgBuyer1}")` }} data-name="Buyer 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[375px] size-full" src={imgBuyer2} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Playfair_Display:SemiBold'] font-semibold h-[45px] leading-[42px] left-[calc(50%-252px)] text-[20px] text-white top-[6974px] uppercase w-[242px]" data-node-id="5:119">
        JEWELLERS
      </p>
      <p className="[word-break:break-word] absolute font-['Playfair_Display:SemiBold'] font-semibold h-[45px] leading-[42px] left-[calc(50%-253px)] text-[20px] text-white top-[7093px] uppercase w-[242px]" data-node-id="130:30">
        mANUFACTURER
      </p>
      <p className="[word-break:break-word] absolute font-['Poppins:SemiBold'] h-[45px] leading-[0px] left-[calc(50%-252px)] not-italic text-[#e1b63b] text-[11px] top-[6970px] tracking-[1.21px] uppercase w-[242px]" data-node-id="130:25">
        fOR retailers
      </p>
      <p className="[word-break:break-word] absolute font-['Poppins:SemiBold'] h-[45px] leading-[0px] left-[calc(50%-255px)] not-italic text-[#e1b63b] text-[11px] top-[7089px] tracking-[1.21px] uppercase w-[242px]" data-node-id="130:31">
        for manufacturer
      </p>
      <div className="absolute left-[1026px] size-[33px] top-[6968px]" data-node-id="5:116">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse26} />
      </div>
      <div className="absolute left-[1025px] size-[33px] top-[7087px]" data-node-id="130:32">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse26} />
      </div>
      <div className="absolute flex inset-[77.81%_27.01%_22.07%_71.81%] items-center justify-center" data-node-id="37:123" style={{ containerType: "size" }}>
        <div className="-scale-x-100 flex-none h-[hypot(-0.225634cqw,99.3565cqh)] rotate-[0.22deg] w-[hypot(-99.7744cqw,-0.643488cqh)]">
          <div className="relative size-full" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[79.19%_27.08%_20.69%_71.74%] items-center justify-center" data-node-id="130:33" style={{ containerType: "size" }}>
        <div className="-scale-x-100 flex-none h-[hypot(-0.225634cqw,99.3565cqh)] rotate-[0.22deg] w-[hypot(-99.7744cqw,-0.643488cqh)]">
          <div className="relative size-full" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Italic'] font-normal italic leading-[normal] left-[calc(50%+498px)] text-[#7b7b7b] text-[11px] top-[7742px] w-[74px]" data-node-id="32:133">
        Verified Buyer
      </p>
          </div>
        </div>
      </div>
    </>
  );
}
