function CommentCard() {
  return (
    <div className="w-[650px] h-[250px] flex bg-white shadow-lg rounded-sm overflow-hidden transform transition-transform hover:scale-105 duration-300 ease-in-out">
      {/* Image Section */}
      <div className="w-[40%] h-full relative">
        <img
          src="https://via.placeholder.com/250"
          alt="donation item"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Text Section */}
      <div className="w-[60%] h-full p-5 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Donation Drive Name
          </h2>
          <p className="text-slate-600 text-sm">Type of Donation: Clothes</p>
        </div>
        <p className="text-slate-700 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
          lectus justo. Curabitur eget auctor libero. Nulla facilisi.
        </p>
        <button className="self-start px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default CommentCard;
