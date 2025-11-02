import './../index.css';

export default function FifthPart() {
  const plans = [
    { title: "Students", price: "$29", period: "per month", license: "Personal License" },
    { title: "professional", price: "$59", period: "per month", license: "Professional License Email Support" },
    { title: "agency", price: "$99", period: "per month", license: "1-12 Team Members Phone Support" },
    { title: "enterprise", price: "$159", period: "per month", license: "Unlimited Team Members 24/ 7 Phone Support" },
  ];

  return (
    <section className="w-full px-6 md:px-20 py-[80px] bg-white-900 flex flex-col items-center"
    style={{ backgroundImage: `url('/bg3.png')` }}>
      <h2 className="text-[48px] font-bold text-white text-center mb-[112px]">
        Fork Subscription Pricing
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="relative w-[257px] h-[457px] bg-white/6 backdrop-blur-lg border border-white/20
                       overflow-hidden transform transition-transform duration-300 hover:scale-115 hover:bg-[#463048] cursor-pointer"
          > 
            <div className="absolute top-0 left-0 w-full h-[97px] bg-white/6"></div>
 
            <p className="absolute top-[36px] left-1/2 -translate-x-1/2 text-white text-[24px] font-montserrat font-normal uppercase text-center uppercase ">
              {plan.title}
            </p>
            <p className="absolute top-[127px] left-0 w-full text-white text-[60px] font-montserrat font-normal uppercase text-center leading-[90px]">
              {plan.price}
            </p>
            <p className="absolute top-[204px] left-0 w-full text-white text-[14px] font-montserrat font-normal uppercase text-center leading-[16px]">
              {plan.period}
            </p>
            <div className="absolute top-[260px] left-1/2 -translate-x-1/2 w-[60px] h-[5px] bg-[#8D81AC]"></div>
            <p className="absolute top-[301px] left-1/2 -translate-x-1/2 w-full text-white text-[16px] font-montserrat text-center leading-[18px]">
                {plan.license}
            </p>

            <div className="absolute top-[378px] left-1/2 -translate-x-1/2 w-[160px] h-[42px] bg-white/15 rounded-full"></div>

            <button className="absolute top-[378px] left-1/2 -translate-x-1/2 w-[160px] h-[42px] text-white font-montserrat font-normal uppercase hover:bg-white hover:text-[#8D81AC] rounded-full transition">
              Purchase
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
