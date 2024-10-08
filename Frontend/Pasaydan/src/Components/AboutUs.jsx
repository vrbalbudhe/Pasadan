import React, { useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa"; // For double inverted commas

const AboutUs = () => {
  const sectionsRef = useRef([]);

  return (
    <div
      ref={(el) => (sectionsRef.current[1] = el)}
      className="pb-10 section w-full flex justify-center items-center flex-col pt-10 bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/Mean.png')`, // Replace with the correct image path
      }}
    >
      {/* Header Section */}
      <div className="w-full flex flex-col justify-center items-center p-10">
        {" "}
        {/* Added more padding from the top */}
        <h2 className="text-6xl tracking-tight text-slate-900 font-semibold text-center">
          The Meaning of Pasaydan
        </h2>
        {/* Double Inverted Commas Icon */}
        <div className="mt-4">
          <FaQuoteLeft className="text-black text-3xl" />{" "}
          {/* Adjust icon size and color */}
        </div>
      </div>

      {/* Content Section */}
      <div className="w-[70%] h-60 flex flex-col justify-center items-center p-5 bg-white bg-opacity-70 rounded-lg">
        {/* Marathi Text */}
        <p className="w-[80%] tracking-tighter text-slate-600 text-center font-semibold mt-4">
          पसायदान हा शब्द पासा (पसा) या दोन शब्दांची रचना आहे ज्याचा अर्थ हाताचे
          तळवे एकमेकांना जोडलेले आहेत (जसे आपण कोणीतरी आपल्या हातात भरपूर चॉकलेट
          देणार असेल तेव्हा बनवतो) आणि दान (दान) म्हणजे भेट. एकत्रितपणे त्यांचा
          अर्थ एक भेटवस्तू आहे जी हस्तरेखांमध्ये एकत्र जोडली जाऊ शकते किंवा
          घेतली जाऊ शकते. सहसा भारतात, विशेषतः हिंदू पासा (पसा ) मध्ये प्रसाद
          (देवाची भेट) स्वीकारतात.
        </p>

        {/* English Translation */}
        <p className="w-[80%] text-md text-center text-slate-800 font-semibold mt-10">
          The word Pasaydan is a composition of two words: Pasa (पसा), which means palms spread joined together (like
          we make when someone is about to give us a lot of chocolates in our
          hands), and Dan (दान), which means gift. Together, they symbolize a
          gift that can be received with open hands.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
