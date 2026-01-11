import Image from 'next/image';
import Maintext from './maintext';

const Main = () => {
  return (
    <div className="w-full flex items-center h-96 justify-center">
      <main className="flex w-full max-w-4xl flex-col lg:flex-row border border-gray-300 mt-10">
        <Maintext />
        <div className="relative w-112.5 h-65 bg-black">
          <Image
            src="/dTOMI3nTXkkRLlAPSTlMPakchMPgst2khW74zLIS.png"
            alt="Laravel"
            width={900} height={500}
            className="object-cover"
            priority
          />
        </div>

      </main>
    </div>
  )
};

export default Main;
