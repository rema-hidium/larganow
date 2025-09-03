'use client';
import { useState } from 'react';
import { LargaNowButton } from "./ui/LargaNowButton";
import { LocationDropdown, ShippingLineDropdown } from "./ui/LargaNowDropdown";
import { DatePicker } from "./ui/DatePicker";
import { TripTypeRadio } from "./ui/TripTypeRadio";
import { LargaNowInput } from "./ui/LargaNowInput";
import { LargaNowCheckbox } from "./ui/LargaNowCheckbox";
import Image from 'next/image';

import { CarFront, UserIcon } from 'lucide-react';

export default function BookingForm() {
  const [activeTab, setActiveTab] = useState('passenger');
  const [tripType, setTripType] = useState('round-trip');
  const [fromLocation, setFromLocation] = useState('surigao-city');
  const [toLocation, setToLocation] = useState('dapa');
  const [departureDate, setDepartureDate] = useState<Date>();
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to?: Date | undefined }>();
  
  // Passenger form state
  const [passengers, setPassengers] = useState(4);
  const [promoCode, setPromoCode] = useState('');

  // Function to format promo code input
  const formatPromoCode = (input: string) => {
    // Remove all non-alphanumeric characters
    const cleaned = input.replace(/[^A-Za-z0-9]/g, '');
    
    // Limit to 11 characters (3 + 3 + 5)
    const limited = cleaned.slice(0, 11);
    
    // Format as XXX-XXX-XXXXX
    if (limited.length <= 3) {
      return limited;
    } else if (limited.length <= 6) {
      return `${limited.slice(0, 3)}-${limited.slice(3)}`;
    } else {
      return `${limited.slice(0, 3)}-${limited.slice(3, 6)}-${limited.slice(6)}`;
    }
  };

  // Function to handle promo code input changes
  const handlePromoCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const formatted = formatPromoCode(input);
    setPromoCode(formatted);
  };

  // Function to validate promo code format
  const isValidPromoCode = (code: string) => {
    const promoCodeRegex = /^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{5}$/;
    return promoCodeRegex.test(code);
  };
  const [shippingLine, setShippingLine] = useState('evaristo-son');
  const [preferredShipping, setPreferredShipping] = useState(true);

  // Vehicle form state
  const [vehicleType, setVehicleType] = useState('car');
  const [vehicleBrand, setVehicleBrand] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');

  const isRoundTrip = tripType === 'round-trip';

  return (
    <section className="bg-gray-50 mt-[-50px] font-almarai">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Booking Form Card */}
        <div className="bg-white shadow-lg -mt-20 relative z-20 rounded-b-2xl">
          {/* Tabs */}
          <div className="flex">
            <LargaNowButton
              variant="ghost"
              size="lg"
              fontFamily="alata"
              onClick={() => setActiveTab('passenger')}
              className={`!py-6 ${activeTab === 'passenger' ? 'bg-gray-100' : ''}`}
              icon={<UserIcon className="w-4 h-4" />}
            >
              PASSENGER
            </LargaNowButton>
            <LargaNowButton
              variant="ghost"
              size="lg"
              fontFamily="alata"
              onClick={() => setActiveTab('vehicle')}
              className={`!py-6 ${activeTab === 'vehicle' ? 'bg-gray-100' : ''}`}
              icon={<CarFront className="w-4 h-4" />}
            >
              VEHICLE
            </LargaNowButton>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Common Trip Details Section */}
            <div className="md:col-span-3 space-y-6 bg-gray-100 px-10 py-4">
              {/* Trip Type, From, To, Departure Date - Horizontal Layout */}
              <div className="flex flex-col md:flex-row md:items-end md:space-x-4 space-y-4 md:space-y-0">
                {/* Trip Type */}
                <div className="flex-1 min-w-[140px] flex items-end">
                  <TripTypeRadio
                    value={tripType}
                    onValueChange={setTripType}
                    label="Choose way:"
                    size="default"
                    fontFamily="almarai"
                  />
                </div>

                {/* From */}
                <div className="flex-1 min-w-[140px] flex items-end">
                  <LocationDropdown
                    value={fromLocation}
                    onValueChange={setFromLocation}
                    placeholder="Select departure"
                    label="From"
                    size="default"
                    className="bg-gray-100"
                  />
                </div>

                {/* Switch Button */}
                <div className="flex items-end justify-center pt-0 md:pt-0 min-w-[40px]">
                  <button
                    className="p-2 text-gray-500 hover:text-orange-500"
                    onClick={() => {
                      const temp = fromLocation;
                      setFromLocation(toLocation);
                      setToLocation(temp);
                    }}
                    aria-label="Switch From and To"
                  >
                    ↔
                  </button>
                </div>

                {/* To */}
                <div className="flex-1 min-w-[140px] flex items-end">
                  <LocationDropdown
                    value={toLocation}
                    onValueChange={setToLocation}
                    placeholder="Select destination"
                    label="To"
                    size="default"
                    className="bg-gray-100"
                  />
                </div>

                {/* Departure Date */}
                <div className="flex-1 min-w-[160px] flex items-end">
                  <DatePicker
                    date={isRoundTrip ? undefined : departureDate}
                    dateRange={isRoundTrip ? dateRange : undefined}
                    onDateChange={isRoundTrip ? undefined : setDepartureDate}
                    onDateRangeChange={isRoundTrip ? setDateRange : undefined}
                    placeholder={isRoundTrip ? "Select dates" : "Select departure date"}
                    label={isRoundTrip ? "Travel Dates" : "Departure Date"}
                    size="default"
                    className="bg-gray-100"
                    isRoundTrip={isRoundTrip}
                  />
                </div>
              </div>
            </div>

            {/* Passenger Form */}
            {activeTab === 'passenger' && (
              <div className="md:col-span-2 space-y-6 pl-10">
                {/* Passengers */}
                <div className="grid md:grid-cols-4 gap-4">
                  <LargaNowInput
                    type="number"
                    label="Passengers"
                    value={passengers}
                    onChange={(e) => setPassengers(parseInt(e.target.value) || 0)}
                    variant="bottom"
                    size="default"
                  />
                  <div className="space-y-1">
                    <LargaNowInput
                      type="text"
                      label="Promo Code"
                      value={promoCode}
                      onChange={handlePromoCodeChange}
                      variant="bottom"
                      size="default"
                      placeholder="VXS-45Y-RE23Z"
                      maxLength={13}
                      className="uppercase"
                    />
                      {promoCode && (
                       <div className="text-xs text-gray-500">
                         Format: XXX-XXX-XXXXX (letters and numbers only)
                         {isValidPromoCode(promoCode) && (
                           <span className="text-green-600 ml-2">✓ Valid format</span>
                         )}
                       </div>
                     )}
                  </div>
                </div>

                {/* Shipping Line - Only show when checkbox is checked */}
                {preferredShipping && (
                  <ShippingLineDropdown
                    value={shippingLine}
                    onValueChange={setShippingLine}
                    placeholder="Select shipping line"
                    label="Shipping Line"
                    size="default"
                    className="bg-white border-b-1 border-gray-300 !rounded-none"
                  />
                )}
                <div className="flex p-0">
                  {/* Preferred Shipping Checkbox */}
                  <LargaNowCheckbox
                    checked={preferredShipping}
                    onCheckedChange={setPreferredShipping}
                    label="Do you have a preferred shipping line?"
                    size="default"
                    fontFamily="almarai"
                    className="flex-1 pl-0"
                  />

                  {/* Book Now Button */}
                  <LargaNowButton
                    variant="primary"
                    size="xl"
                    className="min-w-[200px] rounded-[50px] px-8 py-4"
                  >
                    BOOK NOW
                  </LargaNowButton>
                </div>
              </div>
            )}

            {/* Vehicle Form */}
            {activeTab === 'vehicle' && (
              <div className="md:col-span-2 space-y-6 pl-10 py-5">
                {/* Vehicle Details */}
                <div className="grid md:grid-cols-4 gap-4">
                  <LargaNowInput
                    type="text"
                    label="Vehicle Brand"
                    value={vehicleBrand}
                    onChange={(e) => setVehicleBrand(e.target.value)}
                    variant="bottom"
                    size="default"
                    placeholder="e.g., Toyota"
                  />
                  <LargaNowInput
                    type="text"
                    label="Vehicle Model"
                    value={vehicleModel}
                    onChange={(e) => setVehicleModel(e.target.value)}
                    variant="bottom"
                    size="default"
                    placeholder="e.g., Vios"
                  />
                  <LargaNowInput
                    type="number"
                    label="Vehicle Year"
                    value={vehicleYear}
                    onChange={(e) => setVehicleYear(e.target.value)}
                    variant="bottom"
                    size="default"
                    placeholder="e.g., 2020"
                  />
                  <LargaNowInput
                    type="text"
                    label="Vehicle Type"
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                    variant="bottom"
                    size="default"
                    placeholder="e.g., Car, Motorcycle"
                  />
                </div>

                {/* Shipping Line - Only show when checkbox is checked */}
                {preferredShipping && (
                  <ShippingLineDropdown
                    value={shippingLine}
                    onValueChange={setShippingLine}
                    placeholder="Select shipping line"
                    label="Shipping Line"
                    size="default"
                    className="bg-white border-b-1 border-gray-300 !rounded-none"
                  />
                )}
                <div className="flex">
                  {/* Preferred Shipping Checkbox */}
                  <LargaNowCheckbox
                    checked={preferredShipping}
                    onCheckedChange={setPreferredShipping}
                    label="Do you have a preferred shipping line?"
                    size="default"
                    fontFamily="almarai"
                    className="flex-1 pl-0"
                  />

                  {/* Book Now Button */}
                  <LargaNowButton
                    variant="primary"
                    size="xl"
                    className="min-w-[200px] rounded-[50px] px-8 py-4"
                  >
                    BOOK NOW
                  </LargaNowButton>
                </div>
              </div>
            )}

                         {/* QR Code Image Section */}
             <div className="flex flex-col items-center justify-center">
               <div className="w-48 h-48 bg-white border-2 border-gray-300 rounded-lg p-2">
                 <Image 
                   src="/images/qr.png" 
                   alt="QR Code for Mobile App" 
                   width={176}
                   height={176}
                   className="w-full h-full object-contain"
                   priority
                 />
               </div>
               <div className="text-center">
                 <p className="text-sm font-bold text-gray-600 pt-2">Faster Booking? Scan our Mobile App</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
} 