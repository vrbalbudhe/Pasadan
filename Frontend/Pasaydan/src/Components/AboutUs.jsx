import React, { useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa"; // For double inverted commas

const AboutUs = () => {
  const sectionsRef = useRef([]);

  return (
    <div
      ref={(el) => (sectionsRef.current[1] = el)}
      className="mb-20 section w-full flex justify-center items-center flex-col"
    >
      {/* Header Section */}
      <div className="w-full flex flex-col justify-center items-center p-10">
        {" "}
        {/* Added more padding from the top */}
        <h2 className="text-4xl tracking-tighter text-[#032d60] font-semibold text-center">
          The Meaning of Pasaydan
        </h2>
        {/* Double Inverted Commas Icon */}
        <div className="mt-4">
          <FaQuoteLeft className="text-[#032d60] text-3xl" />{" "}
          {/* Adjust icon size and color */}
        </div>
      </div>

      {/* Content Section */}
      <div className="w-[80%] h-60 flex flex-col justify-center items-center p-5">
        {/* Marathi Text */}
        <p className="text-xl text-slate-600 text-center font-semibold mt-4">
          पसायदान हा शब्द पासा (पसा) या दोन शब्दांची रचना आहे ज्याचा अर्थ हाताचे
          तळवे एकमेकांना जोडलेले आहेत (जसे आपण कोणीतरी आपल्या हातात भरपूर चॉकलेट
          देणार असेल तेव्हा बनवतो ) आणि दान (दान) म्हणजे भेट. एकत्रितपणे त्यांचा
          अर्थ एक भेटवस्तू आहे जी हस्तरेखांमध्ये एकत्र जोडली जाऊ शकते किंवा
          घेतली जाऊ शकते. सहसा भारतात, विशेषतः हिंदू पासा (पसा ) मध्ये प्रसाद
          (देवाची भेट) स्वीकारतात.
        </p>

        {/* English Translation */}
        <p className="text-xl text-center text-slate-600 font-semibold mt-10">
          Here's a refined version of your text in a more structured format with
          proper spacing for readability: The word Pasaydan is a composition of
          two words: Pasa (पसा), which means palms spread joined together (like
          we make when someone is about to give us a lot of chocolates in our
          hands), and Dan (दान), which means gift. Together, they symbolize a
          gift that can be received with open hands.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
