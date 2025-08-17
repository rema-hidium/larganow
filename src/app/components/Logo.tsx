import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center">
      {/* Logo Image */}
      <div className="w-[60px] h-[60px] relative flex-shrink-0">
        <Image
          src="/images/logo.png"
          alt="LargaNow Logo"
          width={60}
          height={60}
          className="object-contain"
          priority
        />
      </div>
      
      <div className="flex flex-col ml-2">
        <div>
        <Image
          src="/images/larganow.png"
          alt="LargaNow Text Logo"
          width={120}
          height={32}
          className="object-contain"
          priority
        />
        </div>
        <div className="text-[10px] font-bold text-[#333332]">ONLINE BOOKING</div>
      </div>
    </div>
  );
} 