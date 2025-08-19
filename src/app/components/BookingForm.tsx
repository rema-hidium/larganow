'use client';
import { useState } from 'react';
import { LargaNowButton } from "./ui/LargaNowButton";
import { LocationDropdown, ShippingLineDropdown } from "./ui/LargaNowDropdown";
import { DatePicker } from "./ui/DatePicker";
import { TripTypeRadio } from "./ui/TripTypeRadio";
import { LargaNowInput } from "./ui/LargaNowInput";
import { LargaNowCheckbox } from "./ui/LargaNowCheckbox";
import { LargaNowImage } from "./ui/LargaNowImage";

import { CarFront, CarIcon, UserIcon } from 'lucide-react';

export default function BookingForm() {
  const [activeTab, setActiveTab] = useState('passenger');
  const [tripType, setTripType] = useState('round-trip');
  const [fromLocation, setFromLocation] = useState('surigao-city');
  const [toLocation, setToLocation] = useState('dapa');
  const [departureDate, setDepartureDate] = useState<Date>();
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to?: Date | undefined }>();
  
  // Passenger form state
  const [adults, setAdults] = useState(4);
  const [children, setChildren] = useState(1);
  const [infants, setInfants] = useState(0);
  const [promoCode, setPromoCode] = useState('VXS-45Y-RE23Z');
  const [shippingLine, setShippingLine] = useState('evaristo-son');
  const [preferredShipping, setPreferredShipping] = useState(true);

  // Vehicle form state
  const [vehicleType, setVehicleType] = useState('car');
  const [vehicleLength, setVehicleLength] = useState('');
  const [vehicleWidth, setVehicleWidth] = useState('');
  const [vehicleHeight, setVehicleHeight] = useState('');
  const [vehicleWeight, setVehicleWeight] = useState('');
  const [vehicleBrand, setVehicleBrand] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');

  const isRoundTrip = tripType === 'round-trip';

  return (
    <section className="bg-gray-50 mt-[-100px] font-almarai">
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
            <div className="md:col-span-3 space-y-6 bg-gray-100 p-10 py-5">
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
              <div className="md:col-span-2 space-y-6 pl-10 py-5">
                {/* Passengers */}
                <div className="grid md:grid-cols-4 gap-4">
                  <LargaNowInput
                    type="number"
                    label="Adults"
                    value={adults}
                    onChange={(e) => setAdults(parseInt(e.target.value) || 0)}
                    variant="bottom"
                    size="default"
                  />
                  <LargaNowInput
                    type="number"
                    label="Children"
                    value={children}
                    onChange={(e) => setChildren(parseInt(e.target.value) || 0)}
                    variant="bottom"
                    size="default"
                  />
                  <LargaNowInput
                    type="number"
                    label="Infant"
                    value={infants}
                    onChange={(e) => setInfants(parseInt(e.target.value) || 0)}
                    variant="bottom"
                    size="default"
                  />
                  <LargaNowInput
                    type="text"
                    label="Promo Code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    variant="bottom"
                    size="default"
                  />
                </div>

                {/* Shipping Line */}
                <ShippingLineDropdown
                  value={shippingLine}
                  onValueChange={setShippingLine}
                  placeholder="Select shipping line"
                  label="Shipping Line"
                  size="default"
                  className="bg-white border-b-1 border-gray-300"
                />
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

                {/* Shipping Line */}
                <ShippingLineDropdown
                  value={shippingLine}
                  onValueChange={setShippingLine}
                  placeholder="Select shipping line"
                  label="Shipping Line"
                  size="default"
                  className="bg-white border-b-1 border-gray-300"
                />
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
              <div className="bg-white border-1 border-gray-200 rounded-lg p-2">
                <LargaNowImage
                  src="/images/qr.png"
                  alt="QR Code for Mobile App"
                  size="xl"
                  objectFit="contain"
                  fallbackSrc="/images/qr-fallback.png"
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