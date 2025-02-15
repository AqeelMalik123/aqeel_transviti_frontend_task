import coverImage from "../assets/images/coverimage.png";
import dp from "../assets/images/dp.png";
export default function ProfileCard() {
  return (
    <div className=" bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Cover Image */}
      <div className="relative">
        <img
          src={coverImage}
          alt="Cover"
          className="w-full h-36 object-cover"
        />
        {/* Profile Image */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-10">
          <img
            src={dp}
            alt="Profile"
            className="w-20 h-20 rounded-full border-4 border-white"
          />
        </div>
      </div>

      {/* Profile Details */}
      <div className="p-6 pt-12 pb-6  text-center">
        <h2 className="text-xl font-semibold">Albert Flores</h2>
        <p className="text-gray-600 text-sm">
          Senior Product Designer | UI/UX Designer | Graphic Designer
        </p>
        <p className="text-gray-500 text-sm mt-1 font-light">
          Clinton, Maryland
        </p>
      </div>
    </div>
  );
}
