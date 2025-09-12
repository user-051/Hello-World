import { Search, MapPin, ChevronDown } from "lucide-react";

// Status Bar Component
function StatusBar() {
  return (
    <div className="flex w-full px-4 py-5 justify-between items-center h-[62px] font-sf-pro">
      <div className="flex-1 text-center">
        <span className="text-black text-[17px] font-semibold">9:41</span>
      </div>
      <div className="flex items-center gap-2">
        {/* Signal bars */}
        <div className="flex items-end gap-1">
          <div className="w-1 h-3 bg-black rounded-sm"></div>
          <div className="w-1 h-4 bg-black rounded-sm"></div>
          <div className="w-1 h-4 bg-black rounded-sm"></div>
          <div className="w-1 h-5 bg-black rounded-sm"></div>
        </div>
        {/* WiFi icon */}
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M1.5 7.5C4.5 4.5 9 4.5 12 7.5M3 10.5C5.5 8 10.5 8 13 10.5M6 13.5C7 12.5 11 12.5 12 13.5"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        {/* Battery */}
        <div className="flex items-center">
          <div className="w-6 h-3 border border-black rounded-sm flex items-center">
            <div className="w-full h-2 bg-black rounded-sm m-0.5"></div>
          </div>
          <div className="w-1 h-2 bg-black rounded-r ml-0.5"></div>
        </div>
      </div>
    </div>
  );
}

// Transport Mode Icon Component
function TransportIcon({ type }: { type: "bus" | "auto" }) {
  const isAuto = type === "auto";
  return (
    <div
      className={`flex items-center justify-center w-20 h-20 rounded-lg border-2 border-black shadow-lg ${
        isAuto ? "bg-rideon-white-trans" : "bg-rideon-green-trans"
      }`}
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        pointerEvents: 'auto',
      }}
    >
      {type === "bus" ? (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <path
            d="M12.5 43.75C11.9583 43.75 11.4896 43.5504 11.0938 43.151C10.698 42.7515 10.5 42.2833 10.5 41.6667V37.3958C9.79167 36.7014 9.21875 35.9271 8.78125 35.0729C8.34375 34.2188 8.125 33.2986 8.125 32.3125V12.5C8.125 9.61458 9.33854 7.50868 11.7656 6.18229C14.1927 4.85590 18.4028 4.19271 25 4.16667C31.7361 4.16667 36.0104 4.80903 38.8229 6.09375C41.6354 7.37847 43.0417 9.51389 43.0417 12.5V32.3125C43.0417 33.2986 42.8229 34.2188 42.3854 35.0729C41.9479 35.9271 41.375 36.7014 40.6667 37.3958V41.6667C40.6667 42.2833 40.4688 42.7515 40.0729 43.151C39.6771 43.5504 39.2083 43.75 38.6458 43.75H36.4583C35.8958 43.75 35.4271 43.5504 35.0313 43.151C34.6354 42.7515 34.4375 42.2833 34.4375 41.6667V39.5833H15.5625V41.6667C15.5625 42.2833 15.3646 42.7515 14.9688 43.151C14.5729 43.5504 14.1042 43.75 13.5417 43.75H12.5ZM12.5 20.8333H37.5V14.5833H12.5V20.8333ZM17.7083 33.3333C18.5764 33.3333 19.3229 33.0295 19.9479 32.4219C20.5729 31.8142 20.8854 31.0764 20.8854 30.2083C20.8854 29.3403 20.5816 28.6024 19.974 27.9948C19.3663 27.3871 18.6285 27.0833 17.7604 27.0833C16.8924 27.0833 16.1545 27.3871 15.5469 27.9948C14.9392 28.6024 14.6354 29.3403 14.6354 30.2083C14.6354 31.0764 14.9392 31.8142 15.5469 32.4219C16.1545 33.0295 16.8924 33.3333 17.7083 33.3333ZM32.2917 33.3333C33.1597 33.3333 33.8976 33.0295 34.5052 32.4219C35.1129 31.8142 35.4167 31.0764 35.4167 30.2083C35.4167 29.3403 35.1129 28.6024 34.5052 27.9948C33.8976 27.3871 33.1597 27.0833 32.2917 27.0833C31.4236 27.0833 30.6858 27.3871 30.0781 27.9948C29.4705 28.6024 29.1667 29.3403 29.1667 30.2083C29.1667 31.0764 29.4705 31.8142 30.0781 32.4219C30.6858 33.0295 31.4236 33.3333 32.2917 33.3333Z"
            fill="black"
          />
        </svg>
      ) : (
        // Tuk-tuk (auto rickshaw) icon
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M37 20h-2.5c-.7 0-1.2.5-1.4 1.1L31 26h-12l-2.1-4.9C16.5 20.5 16 20 15.3 20H12c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h1.2c-.1.5-.2 1-.2 1.5 0 2 1.5 3.5 3.5 3.5S23 34.5 23 32.5c0-.5-.1-1-.2-1.5h7.4c-.1.5-.2 1-.2 1.5 0 2 1.5 3.5 3.5 3.5s3.5-1.5 3.5-3.5c0-.5-.1-1-.2-1.5H38c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2zM18 32.5c-.8 0-1.5-.7-1.5-1.5S17.2 29.5 18 29.5s1.5.7 1.5 1.5S18.8 32.5 18 32.5zm16 0c-.8 0-1.5-.7-1.5-1.5S33.2 29.5 34 29.5s1.5.7 1.5 1.5S34.8 32.5 34 32.5zM13 24h6.5v3H13v-3z" fill="black" />
        </svg>
      )}
    </div>
  );
}

// Search Field Component
function SearchField({
  placeholder,
  isDestination = false,
}: {
  placeholder: string;
  isDestination?: boolean;
}) {
  return (
    <div
      className={`relative flex items-center w-48 h-14 rounded-lg border border-black shadow-md ${
        isDestination
          ? "bg-gradient-to-r from-rideon-green-bg to-rideon-gray-search"
          : "bg-gradient-to-r from-[#E7F8D0] to-rideon-gray-search"
      }`}
    >
      <Search className="w-8 h-8 ml-3 text-black" />
      <span className="ml-3 text-black text-opacity-60 font-poppins text-xl font-bold">
        {placeholder}
      </span>
      <ChevronDown className="w-4 h-4 ml-auto mr-3 text-black" />
    </div>
  );
}

// History Item Component
function HistoryItem({
  routeNumber,
  route,
  time,
  type,
}: {
  routeNumber: string;
  route: string;
  time: string;
  type: "bus" | "auto";
}) {
  return (
    <div className="flex items-center py-3 border-b border-black last:border-b-0">
      <div className="w-7 h-7 flex items-center justify-center mr-4">
        {type === "bus" ? (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path
              d="M7 24.5C6.66944 24.5 6.39236 24.3882 6.16875 24.1646C5.94514 23.941 5.83333 23.6639 5.83333 23.3333V20.9416C5.48333 20.5528 5.20139 20.1201 4.9875 19.6437C4.77361 19.1673 4.66667 18.6472 4.66667 18.0833V6.99998C4.66667 5.38609 5.41528 4.20484 6.9125 3.45623C8.40972 2.70762 10.7722 2.33331 14 2.33331C17.3444 2.33331 19.7361 2.69304 21.175 3.41248C22.6139 4.13192 23.3333 5.32776 23.3333 6.99998V18.0833C23.3333 18.6472 23.2264 19.1673 23.0125 19.6437C22.7986 20.1201 22.5167 20.5528 22.1667 20.9416V23.3333C22.1667 23.6639 22.0549 23.941 21.8313 24.1646C21.6076 24.3882 21.3306 24.5 21 24.5H19.8333C19.5028 24.5 19.2257 24.3882 19.0021 24.1646C18.7785 23.941 18.6667 23.6639 18.6667 23.3333V22.1666H9.33333V23.3333C9.33333 23.6639 9.22153 23.941 8.99792 24.1646C8.77431 24.3882 8.49722 24.5 8.16667 24.5H7Z"
              fill="black"
            />
          </svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path
              d="M19.4263 12.1307C18.1945 12.1307 17.1923 13.1328 17.1923 14.3647C17.1923 15.5966 18.1945 16.5988 19.4263 16.5988C20.6582 16.5988 21.6604 15.5966 21.6604 14.3647C21.6604 13.1328 20.6582 12.1307 19.4263 12.1307Z"
              fill="black"
            />
          </svg>
        )}
      </div>
      <span className="font-poppins text-base text-black mr-6">{routeNumber}</span>
      <div className="w-5 h-px bg-black mr-4"></div>
      <span className="font-poppins text-base text-black flex-1">{route}</span>
      <div className="w-5 h-px bg-black mr-4"></div>
      <span className="font-poppins text-base text-black">{time}</span>
    </div>
  );
}

export default function Index() {
  return (
    <div className="w-full max-w-sm mx-auto bg-white min-h-screen relative overflow-hidden font-poppins sm:max-w-md lg:max-w-lg">
      {/* Status Bar */}
      <StatusBar />

      {/* Main Header with Gradient */}
      <div className="relative">
        <div className="h-44 bg-gradient-to-r from-rideon-green-dark/95 to-rideon-green-light rounded-b-[40px] shadow-lg relative">
          {/* RideOn Title */}
          <div className="absolute left-20 top-10">
            <h1 className="text-rideon-green-bg text-3xl font-bold font-poppins tracking-wide drop-shadow-lg">
              RideOn
            </h1>
          </div>

          {/* Location Badge */}
          <div className="absolute right-8 top-7 flex items-center bg-rideon-green-bg rounded-2xl px-3 py-3 h-12">
            <MapPin className="w-7 h-7 text-black mr-1" />
            <span className="text-black text-xl font-poppins">Jaipur</span>
          </div>
        </div>

        {/* Transport Mode Selection */}
        <div className="absolute left-24 top-32 flex gap-20">
          <TransportIcon type="bus" />
          <TransportIcon type="auto" />
        </div>

        {/* Background Cityscape Image */}
        <div className="absolute left-4 top-52 w-96 h-32 opacity-70 transform -rotate-20 z-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/20e1117d2c514b737574f16546596e3e5a1ef4b8?width=350"
            alt="Cityscape"
            className="object-cover rounded-xl"
            style={{ width: '60%', margin: '56px 0 0 112px', height: '100%' }}
          />
        </div>
      </div>

      {/* Search Section */}
      <div className="px-4 mt-20 relative z-10">
        {/* From Field */}
        <div style={{ margin: '-2px 0 24px' }}>
          <SearchField placeholder="From" />
        </div>

        {/* Connection Line with Circle */}
        <div className="flex items-center justify-center mb-6 relative">
          <div className="absolute left-40 top-0 w-12 h-12 rounded-full bg-rideon-green-bg border-2 border-black z-10"></div>
          <svg
            width="140"
            height="90"
            viewBox="0 0 140 90"
            fill="none"
            style={{ position: 'absolute', left: '-588px', top: '-475px' }}
          >
            <path
              d="M20 20 Q70 -15 120 80"
              stroke="black"
              strokeWidth="3"
              strokeDasharray="6,6"
              fill="none"
            />
          </svg>
        </div>

        {/* To Field */}
        <div className="flex justify-end mb-8">
          <SearchField placeholder="To" isDestination />
        </div>

        {/* Find Bus Button */}
        <div className="flex justify-center mb-8">
          <button className="bg-rideon-yellow rounded-lg px-6 py-3 shadow-lg flex items-center gap-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 21C5.71667 21 5.47917 20.9042 5.2875 20.7125C5.09583 20.5208 5 20.2833 5 20V17.95C4.7 17.6167 4.45833 17.2458 4.275 16.8375C4.09167 16.4292 4 15.9833 4 15.5V6C4 4.61667 4.64167 3.60417 5.925 2.9625C7.20833 2.32083 9.23333 2 12 2C14.8667 2 16.9167 2.30833 18.15 2.925C19.3833 3.54167 20 4.56667 20 6V15.5C20 15.9833 19.9083 16.4292 19.725 16.8375C19.5417 17.2458 19.3 17.6167 19 17.95V20C19 20.2833 18.9042 20.5208 18.7125 20.7125C18.5208 20.9042 18.2833 21 18 21H17C16.7167 21 16.4792 20.9042 16.2875 20.7125C16.0958 20.5208 16 20.2833 16 20V19H8V20C8 20.2833 7.90417 20.5208 7.7125 20.7125C7.52083 20.9042 7.28333 21 7 21H6Z"
                fill="black"
              />
            </svg>
            <span className="text-black text-xl font-semibold font-poppins">Find Bus</span>
          </button>
        </div>
      </div>

      {/* Search History */}
      <div className="px-4 mb-6">
        <h2 className="text-black text-base font-poppins mb-4">Search History</h2>
        <div className="bg-rideon-green-bg rounded-lg border border-black p-4">
          <HistoryItem
            routeNumber="6A"
            route="Jagatpura → Jaipur JN"
            time="7:45 AM"
            type="bus"
          />
          <HistoryItem
            routeNumber="3A"
            route="Sanganer → Choti"
            time="9:00 PM"
            type="auto"
          />
        </div>
      </div>

      {/* Map Section */}
      <div className="px-4 mb-6">
        <div className="relative rounded-lg overflow-hidden">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/c45ddb958cd81a93cd5a0f317e88c4485cf94a95?width=764"
            alt="Jaipur Map"
            className="w-full h-60 object-cover"
          />
          {/* Map Overlay Elements */}
          <div className="absolute bottom-12 right-8">
            <div className="w-16 h-16 bg-gradient-to-b from-green-700 to-green-400 rounded-full shadow-lg flex items-center justify-center">
              <div className="w-14 h-14 bg-green-400 border-2 border-green-300 rounded-full flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M16 8L20 12H18V20H14V12H12L16 8Z"
                    fill="black"
                  />
                  <circle cx="16" cy="24" r="2" fill="black" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
