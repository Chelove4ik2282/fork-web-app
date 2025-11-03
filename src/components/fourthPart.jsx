import './../index.css';

export default function FourthPart() {
  const features = [
    {
      img: '/smashing.png', 
      desc: 'Sed vestibulum scelerisque urna, eu finibus leo facilisis sit amet. Proin id dignissim magna. Sed varius urna et pulvinar venenatis. '
    },
    {
      img: '/codrops.png', 
      desc: 'Donec euismod dolor ut ultricies consequat. Vivamus urna ipsum, rhoncus molestie neque ac, mollis eleifend nibh.'
    },
    {
      img: '/w.png', 
      desc: 'In efficitur in velit et tempus. Duis nec odio dapibus, suscipit erat fringilla, imperdiet nibh. Morbi tempus auctor felis ac vehicula. '
    },
    {
      img: '/pixelB.png', 
      desc: 'Sed vestibulum scelerisque urna, eu finibus leo facilisis sit amet. Proin id dignissim magna. Sed varius urna et pulvinar venenatis. '
    },
    {
      img: '/CB.png', 
      desc: 'Praesent ut eros tristique, malesuada lectus vel, lobortis massa. Nulla faucibus lorem id arcu consequat faucibus. '
    },
    {
      img: '/TNW.png', 
      desc: 'Fusce pharetra erat id odio blandit, nec pharetra eros venenatis. Pellentesque porttitor cursus massa et vestibulum.'
    },
  ];

  return (
    <section
  className="w-full px-6 md:px-20 py-[80px] text-black"
  style={{ backgroundImage: `url('/bg2.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
> 
  <h2 className="text-[48px] text-white font-bold text-center mb-12">
    People Are Talking About Fork
  </h2>
 
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
    {features.map((feature, index) => (
      <div key={index} className="flex flex-col items-center text-center">
        <div className="max-h-[60px] mb-4">
          <img
            src={feature.img}
            alt={`feature ${index}`}
            className="object-contain mx-auto"
          />
        </div>
        <i className="text-white text-[14px]">{feature.desc}</i>
      </div>
    ))}
  </div> 

  <p className="pt-[115px] text-center text-gray-400 text-[14px] max-w-4xl mx-auto leading-relaxed">
    Duis lobortis arcu sed arcu tincidunt feugiat. Nulla nisi mauris, facilisis vitae 
    aliquet id, imperdiet quis nibh. Donec eget elit eu libero tincidunt consequat nec 
    elementum orci. Cum sociis natoque penatibus et magnis dis parturient montes, 
    nascetur ridiculus mus.
  </p>
  <hr className="border-t border-[#645766] w-[780px] mx-auto my-8" />


</section>

  );
}
