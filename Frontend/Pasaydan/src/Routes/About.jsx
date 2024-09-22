import { useEffect, useRef } from "react";
import pasaydanLogo from "../assets/pixelcut-export.png";
import { CiSquareInfo } from "react-icons/ci";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { LuGoal } from "react-icons/lu";
import { GoGoal } from "react-icons/go";
import { FaRegEye } from "react-icons/fa6";

function About() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const sections = sectionsRef.current.filter(Boolean);

    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-8");
          entry.target.classList.add("opacity-100", "translate-y-0");
        } else {
          entry.target.classList.add("opacity-0", "translate-y-8");
          entry.target.classList.remove("opacity-100", "translate-y-0");
        }
      });
    }, options);

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="w-full max-w-7xl bg-white p-10">
        {/* Pasaydan Title */}
        <div
          ref={(el) => (sectionsRef.current[0] = el)}
          className="w-full h-80 bg-gradient-to-l rounded-2xl from-white via-violet-500 to-white text-center mb-8 section opacity-0 translate-y-8 transition-opacity duration-700 ease-in-out flex justify-center items-center gap-20"
        >
          <div className="w-fit h-full flex justify-end items-center">
            <img
              className="rounded-full"
              src={pasaydanLogo}
              alt="Pasaydan Logo"
            />
          </div>
          <div className="w-fit h-full flex justify-center items-center flex-col">
            <h1 className="text-[50px] font-bold text-gray-800 tracking-wider">
              पसायदान
            </h1>
            <h2 className="text-4xl text-white font-serif mt-2">पसायदान</h2>
            <p className="text-xl text-white font-semibold mt-2">
              जो जे वांछिल, तो तें लाहो । प्राणिजात ॥
            </p>
            <p className="text-sm italic text-white mt-2">
              ~ संत ज्ञानेश्वर महाराज ~
            </p>
          </div>
        </div>

        {/* Pasaydan Meaning */}
        <div
          ref={(el) => (sectionsRef.current[1] = el)}
          className="mb-20 section opacity-0 translate-y-8 transition-opacity duration-700 ease-in-out"
        >
          <div className="w-full h-10 flex justify-start items-center p-5">
            <h2 className="w-full text-2xl tracking-tighter text-slate-800 font-semibold">
              <span className="mr-2 inline-block">
                <CiSquareInfo />
              </span>
              The Meaning of Pasaydan
            </h2>
          </div>
          <div className="w-full h-60 flex flex-col justify-center items-center p-5">
            <p className="text-md text-gray-600 text-center font-semibold mt-4">
              पसा यदा न हा शब्द पा सा (पसा ) या दो न शब्दां ची रचना आहे ज्या चा
              अर्थ हा ता चे तळवे एकमेकां ना जो डलेले आहेत (जसे आपण को णी तरी
              आपल्या हा ता त भरपूर चॉ कलेट देणा र असेल तेव्हा बनवतो ) आणि दा न
              (दा न) म्हणजे भेट. एकत्रि तपणे त्यां चा अर्थ एक भेटवस्तू आहे जी
              हस्तरेखां रे खांमध्ये एकत्र जो डली जा ऊ शकते किं वा घेतली जा ऊ
              शकते. सहसा भा रता त, वि शेषतः हिं दू पा सा (पसा ) मध्ये प्रसा द
              (देवा ची भेट) स्वी का रता त.
            </p>
            <p className="text-md text-center text-gray-600 font-semibold mt-10">
              Here's a refined version of your text in a more structured format
              with proper spacing for readability: The word Pasaydan is a
              composition of two words: Pasa (पसा), which means palms spread
              joined together (like we make when someone is about to give us a
              lot of chocolates in our hands), and Dan (दान), which means gift.
              Together, they symbolize a gift that can be received with open
              hands.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div
          ref={(el) => (sectionsRef.current[2] = el)}
          className="w-full flex flex-col gap-5 md:flex-row justify-between items-start mt-10 section opacity-0 translate-y-8 transition-opacity duration-700 ease-in-out"
        >
          <div className="w-full border border-slate-300 rounded-2xl shadow-sm md:w-1/2 p-8">
            <h2 className="text-2xl text-violet-500 font-semibold mb-4">
              <span className="inline-block mr-1 justify-center text-slate-800">
                <FaRegEye />
              </span>
              Vision
            </h2>
            <p className="text-sm font-semibold text-slate-800">
              To prescribe - by preach or by practice - the remedy to human
              suffering, whether spiritual, moral, physical, or material.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-8 border border-slate-300 rounded-2xl shadow-sm">
            <h2 className="text-2xl text-violet-500 font-semibold mb-4">
              <span className="font-xs mr-1 inline-block text-slate-800">
                <GoGoal />
              </span>
              Mission
            </h2>
            <p className="text-sm font-semibold text-gray-800">
              To adopt ways and means for the spiritual, moral & material
              progress of society based on Indian culture and traditions...
            </p>
          </div>
        </div>

        {/* Executive Committee */}
        <div
          ref={(el) => (sectionsRef.current[3] = el)}
          className="w-full h-fit flex flex-col justify-center items-center mt-10 section opacity-0 translate-y-8 transition-opacity duration-700 ease-in-out"
        >
          <h2 className="w-full h-10 flex justify-start p-5 items-center text-2xl text-slate-800 font-semibold">
            <span className="mr-1 font-xs">
              <HiOutlineUserGroup />
            </span>
            Executive Committee
          </h2>
          <div className="flex flex-wrap justify-center items-center mt-4">
            <p className="border border-slate-300 px-2 py-2 shadow-sm text-md hover:bg-violet-400 hover:text-white font-semibold text-gray-700 m-4">
              Vilas Khade
            </p>
            <p className="border border-slate-300 px-2 py-2 shadow-sm text-md hover:bg-violet-400 hover:text-white font-semibold text-gray-700 m-4">
              Rajesh Badre
            </p>
            <p className="border border-slate-300 px-2 py-2 shadow-sm text-md hover:bg-violet-400 hover:text-white font-semibold text-gray-700 m-4">
              Shraddha Borkar
            </p>
            <p className="border border-slate-300 px-2 py-2 shadow-sm text-md hover:bg-violet-400 hover:text-white font-semibold text-gray-700 m-4">
              Usha Girish
            </p>
            <p className="border border-slate-300 px-2 py-2 shadow-sm text-md hover:bg-violet-400 hover:text-white font-semibold text-gray-700 m-4">
              Sanjay Kamble
            </p>
            <p className="border border-slate-300 px-2 py-2 shadow-sm text-md hover:bg-violet-400 hover:text-white font-semibold text-gray-700 m-4">
              Varsha Yelge
            </p>
            <p className="border border-slate-300 px-2 py-2 shadow-sm text-md hover:bg-violet-400 hover:text-white font-semibold text-gray-700 m-4">
              Avadhut Joshi
            </p>
          </div>
        </div>

        {/* Achievements */}
        <div
          ref={(el) => (sectionsRef.current[4] = el)}
          className="w-full mt-10 section opacity-0 translate-y-8 transition-opacity duration-700 ease-in-out"
        >
          <div className="w-full h-10 mb-5 flex justify-start items-center p-5 ">
            <h2 className="text-2xl text-slate-800 font-semibold mb-6">
              <span className="mr-1 font-xs inline-block">
                <LuGoal />
              </span>
              Our Achievements & Donation Drives
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-4 border border-slate-200 rounded-xl bg-gradient-to-t from-white via-violet-100 to-white shadow-sm">
              <h3 className="text-xl text-violet-500 font-semibold mb-2">
                Grocery Kit Donation
              </h3>
              <p className="text-gray-700 font-semibold">
                We have conducted grocery kit donation drives during the COVID
                phase at Mahatma Gandhi School...
              </p>
            </div>
            <div className="p-4 border border-slate-200 rounded-xl bg-gradient-to-t from-white via-violet-100 to-white shadow-sm">
              <h3 className="text-xl text-violet-500 font-semibold mb-2">
                Baby Care Items Donation
              </h3>
              <p className="text-gray-700 font-semibold">
                Donations of baby care items were made at Renuka Shishu Gruh...
              </p>
            </div>
            <div className="p-4 border border-slate-200 rounded-xl bg-gradient-to-t from-white via-violet-100 to-white shadow-sm">
              <h3 className="text-xl text-violet-500 font-semibold mb-2">
                Cycle Donation Drive
              </h3>
              <p className="text-gray-700 font-semibold">
                Donations of cycles to the needy students ...
              </p>
            </div>
            <div className="p-4 border border-slate-200 rounded-xl bg-gradient-to-t from-white via-violet-100 to-white shadow-sm">
              <h3 className="text-xl text-violet-500 font-semibold mb-2">
                Medical Help To Needy
              </h3>
              <p className="text-gray-700 font-semibold">
                Donations of medical products to the injured and needy
                peoples...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
