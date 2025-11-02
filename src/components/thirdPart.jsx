import './../index.css';

export default function ThirdPart() {
  return (
    <section className="w-full flex flex-col md:flex-row gap-12 pl-6 py-16 bg-[#F4F4F4]">
       
      <div className="flex-1 flex flex-col gap-8">
        {[ 
          {
            img: '/n1.png',
            title: 'Created to Make The Web Better',
            desc: 'Aenean cursus imperdiet nisl id fermentum. Aliquam pharetra dui laoreet vulputate dignissim. Sed id metus id quam auctor molestie eget ut augue.'
          },
          {
            img: '/n2.png',
            title: 'Incredibly Powerful Tool',
            desc: 'Maecenas eu dictum felis, a dignissim nibh. Mauris rhoncus felis odio, ut volutpat massa placerat ac. Curabitur dapibus iaculis mi gravida luctus. Aliquam erat volutpat.'
          },
          {
            img: '/n3.png',
            title: 'Experimental Stuff',
            desc: 'Maecenas eu dictum felis, a dignissim nibh. Mauris rhoncus felis odio, ut volutpat massa placerat ac. Curabitur dapibus iaculis mi gravida luctus. Aliquam erat volutpat.'
          },
          {
            img: '/n4.png',
            title: 'Created to Make The Web Better',
            desc: 'Maecenas eu dictum felis, a dignissim nibh. Mauris rhoncus felis odio, ut volutpat massa placerat ac. Curabitur dapibus iaculis mi gravida luctus. Aliquam erat volutpat.'
          }
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-6">
            <div className="w-[150px]">
                <img src={item.img} alt={`icon ${index + 1}`} className="object-contain" />
            </div>
            <div>
              <h3 className="text-[24px] font-bold text-[#323232]">{item.title}</h3>
              <p className="mt-2 text-[#848E97]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
 
      <div className="flex-1 flex flex-col gap-6"> 
  <h2 className="text-[48px] font-bold text-[#8D81AC]">
    {"<Here is what you get>"}
  </h2>
 
  <img
    src="/code.png"
    alt="Main Feature"
    className="w-full self-end"
  />
</div>


    </section>
  );
}
