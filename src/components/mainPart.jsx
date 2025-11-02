import './../index.css';

export default function MainPart() {
  return (
    <div
      className="min-h-screen text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/bg.png')` }}
    >
      <main className="pt-34 text-center">
        <h1 className="text-[84px] font-bold">Fork App</h1>
        <p className="mt-[19px] text-[30px] text-[#8D81AC]">
          A real gamechanger in the world of web development
        </p>
        <p className="mt-[19px] text-[#848E97] text-[16px] font-montserrat uppercase">
          v. 2.8 For Mac and Windows
        </p>
      </main>
      <div className="w-[100%] justify-center items-center">
        <button
        className="
          absolute left-1/2 -translate-x-1/2
          bottom-[-30px]
          text-[21px]
          bg-[#8D81AC] text-white font-bold
          px-[45px] py-[19px] rounded-full
          shadow-lg hover:bg-white hover:text-[#8D81AC] transition
        "
      >
        Download For Free Now
      </button>
 
      <p className="absolute left-1/2 -translate-x-1/2 bottom-[-70px] text-[#848E97] text-[16px]">
        Unlimited 30-Days Trial Period
      </p>
      </div>
    </div>
  );
}
