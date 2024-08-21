import Image from 'next/image';

const BottomSlider = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex justify-between items-center w-full max-w-4xl p-8 bg-white rounded-xl shadow-lg">
        
        {/* Left Section */}
        <div className="flex flex-col items-center space-y-4 text-center max-w-xs">
          <div className="flex flex-col items-center">
            <div className="text-2xl font-semibold">Out-side Activity</div>
            <p className="text-gray-500">
              Enjoy breathtaking views, plush bedding, and modern amenities to make your stay unforgettable.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl font-semibold">Swimming Pool</div>
            <p className="text-gray-500">
              At Paradise Resort, we offer a range of luxurious accommodations to suit every need.
            </p>
          </div>
        </div>

        {/* Center Section */}
        <div className="rounded-full overflow-hidden w-64 h-64 flex-shrink-0">
          <img src={"logo.jpeg"} alt="Center Image" className="object-cover w-full h-full" />
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center space-y-4 text-center max-w-xs">
          <div className="flex flex-col items-center">
            <div className="text-2xl font-semibold">24*7 Service</div>
            <p className="text-gray-500">
              At Paradise Resort, we offer a range of luxurious accommodations to suit every need.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl font-semibold">Unlimited Food</div>
            <p className="text-gray-500">
              Enjoy breathtaking views, plush bedding, and modern amenities to make your stay unforgettable.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BottomSlider;
