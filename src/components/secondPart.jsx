
import GitHubButtons from "./githubButtons";
import './../index.css';

export default function SecondPart() {
  return (
    <section className="pb-[70px] flex flex-col pt-[150px] items-center bg-white text-black px-6 md:px-20">
      <h2 className="text-[54px] md:text-[64px] text-[#635C73] font-bold font-montserrat text-center uppercase">
        Revolutionary editor
      </h2>
      <p className="mt-6 text-center text-black font-lato text-[21px] md:text-[20px] leading-relaxed max-w-3xl">
        Aenean cursus imperdiet nisl id fermentum. Aliquam pharetra dui laoreet 
        vulputate dignissim. Sed id metus id quam auctor molestie eget ut augue.
      </p>
      <div className="pt-[20px]">
      <GitHubButtons />
      </div>
    </section>
  );
}
