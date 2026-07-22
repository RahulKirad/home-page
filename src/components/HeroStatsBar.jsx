export default function HeroStatsBar({ className = '' }) {
  return (
    <div className={`relative z-20 w-full bg-[#201a14] h-[47px] ${className}`} data-node-id="38:99">
      <p className="[word-break:break-word] absolute font-['Poppins:Regular'] leading-[normal] left-[calc(50%-614px)] not-italic text-[15px] text-white top-[12px] whitespace-nowrap" data-node-id="38:47">
        India&apos;s 1st B2B Gold Jewellery sourcing network
      </p>
      <p className="[word-break:break-word] absolute font-['Poppins:SemiBold'] leading-[0] left-[calc(50%+19px)] not-italic text-[15px] text-white top-[12px] whitespace-nowrap" data-node-id="38:100">
        <span className="leading-[normal] text-[#fcdd53]">50K+</span>
        <span className="leading-[normal]">{` CATEGORIES`}</span>
      </p>
      <p className="[word-break:break-word] absolute font-['Poppins:SemiBold'] leading-[0] left-[calc(50%+246px)] not-italic text-[15px] text-white top-[12px] whitespace-nowrap" data-node-id="38:101">
        <span className="leading-[normal] text-[#fcdd53]">250+</span>
        <span className="leading-[normal]">{` MANUFACTURER`}</span>
      </p>
      <p className="[word-break:break-word] absolute font-['Poppins:SemiBold'] leading-[0] left-[calc(50%+500px)] not-italic text-[15px] text-white top-[12px] whitespace-nowrap" data-node-id="38:102">
        <span className="leading-[normal] text-[#fcdd53]">7K+</span>
        <span className="leading-[normal]">{` RETAILERS`}</span>
      </p>
      <p className="[word-break:break-word] absolute font-['Poppins:SemiBold'] leading-[0] left-[calc(50%-178px)] not-italic text-[15px] text-white top-[12px] whitespace-nowrap" data-node-id="38:103">
        <span className="leading-[normal] text-[#fcdd53]">30K+</span>
        <span className="leading-[normal]">{` DESIGNS`}</span>
      </p>
    </div>
  );
}
