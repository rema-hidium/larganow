'use client';
import { useState } from 'react';
import { LargaNowButton } from "./ui/LargaNowButton";
import { LocationDropdown, ShippingLineDropdown } from "./ui/LargaNowDropdown";
import { DatePicker } from "./ui/DatePicker";
import { TripTypeRadio } from "./ui/TripTypeRadio";

export default function BookingForm() {
  const [activeTab, setActiveTab] = useState('passenger');
  const [tripType, setTripType] = useState('round-trip');
  const [fromLocation, setFromLocation] = useState('surigao-city');
  const [toLocation, setToLocation] = useState('dapa');
  const [departureDate, setDepartureDate] = useState<Date>();
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to?: Date | undefined }>();
  const [adults, setAdults] = useState(4);
  const [children, setChildren] = useState(1);
  const [infants, setInfants] = useState(0);
  const [promoCode, setPromoCode] = useState('VXS-45Y-RE23Z');
  const [shippingLine, setShippingLine] = useState('evaristo-son');
  const [preferredShipping, setPreferredShipping] = useState(true);

  // Deterministic QR code pattern (same on server and client)
  const qrCodePattern = [
    1, 1, 1, 1, 1, 1, 1, 0,
    1, 0, 0, 0, 0, 0, 1, 0,
    1, 0, 1, 1, 1, 0, 1, 0,
    1, 0, 1, 1, 1, 0, 1, 0,
    1, 0, 1, 1, 1, 0, 1, 0,
    1, 0, 0, 0, 0, 0, 1, 0,
    1, 1, 1, 1, 1, 1, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 0
  ];

  const isRoundTrip = tripType === 'round-trip';

  return (
    <section className="bg-gray-50 mt-[-150px] font-almarai">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Booking Form Card */}
        <div className="bg-white shadow-lg -mt-20 relative z-20">
          {/* Tabs */}
          <div className="flex">
            <LargaNowButton
              variant={activeTab === 'passenger' ? 'primary' : 'ghost'}
              size="lg"
              fontFamily="alata"
              onClick={() => setActiveTab('passenger')}
              className={`rounded-none ${activeTab === 'passenger' ? 'bg-gray-100' : ''}`}
            >
              PASSENGER
            </LargaNowButton>
            <LargaNowButton
              variant={activeTab === 'vehicle' ? 'primary' : 'ghost'}
              size="lg"
              fontFamily="alata"
              onClick={() => setActiveTab('vehicle')}
              className={`rounded-none ${activeTab === 'vehicle' ? 'bg-gray-100' : ''}`}
            >
              VEHICLE
            </LargaNowButton>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-3 space-y-6 bg-gray-100 p-4">
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
            <div className="md:col-span-2 space-y-6">
              {/* Passengers */}
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Adults</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={adults}
                      onChange={(e) => setAdults(parseInt(e.target.value) || 0)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <div className="absolute right-3 top-3 space-y-1">
                      <button
                        className="text-xs block"
                        onClick={() => setAdults(prev => Math.max(0, prev + 1))}
                      >
                        ▲
                      </button>
                      <button
                        className="text-xs block"
                        onClick={() => setAdults(prev => Math.max(0, prev - 1))}
                      >
                        ▼
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Children</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={children}
                      onChange={(e) => setChildren(parseInt(e.target.value) || 0)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <div className="absolute right-3 top-3 space-y-1">
                      <button
                        className="text-xs block"
                        onClick={() => setChildren(prev => Math.max(0, prev + 1))}
                      >
                        ▲
                      </button>
                      <button
                        className="text-xs block"
                        onClick={() => setChildren(prev => Math.max(0, prev - 1))}
                      >
                        ▼
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Infant</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={infants}
                      onChange={(e) => setInfants(parseInt(e.target.value) || 0)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <div className="absolute right-3 top-3 space-y-1">
                      <button
                        className="text-xs block"
                        onClick={() => setInfants(prev => Math.max(0, prev + 1))}
                      >
                        ▲
                      </button>
                      <button
                        className="text-xs block"
                        onClick={() => setInfants(prev => Math.max(0, prev - 1))}
                      >
                        ▼
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Promo Code */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Promo Code / Voucher Code</label>
                <div className="relative">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <div className="absolute right-3 top-3 text-green-500">✓</div>
                </div>
              </div>

              {/* Shipping Line */}
              <ShippingLineDropdown
                value={shippingLine}
                onValueChange={setShippingLine}
                placeholder="Select shipping line"
                label="Shipping Line"
                size="default"
                className="bg-white"
              />

              {/* Preferred Shipping Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="preferredShipping"
                  checked={preferredShipping}
                  onChange={(e) => setPreferredShipping(e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="preferredShipping" className="text-sm text-gray-700">
                  Do you have a preferred shipping line?
                </label>
              </div>

              {/* Book Now Button */}
              <LargaNowButton
                variant="primary"
                size="xl"
                className="w-full rounded-[50px]"
              >
                BOOK NOW
              </LargaNowButton>
            </div>

            {/* QR Code Section */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="bg-white border-2 border-gray-300 p-4 rounded-lg">
                <div className="w-32 h-32 bg-gray-900 grid grid-cols-8 grid-rows-8 gap-0.5 p-2">
                  {/* Deterministic QR code pattern */}
                  {qrCodePattern.map((pixel, index) => (
                    <div
                      key={index}
                      className={`w-full h-full ${
                        pixel === 1 ? 'bg-white' : 'bg-gray-900'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center">
                Faster Booking?<br />
                Scan our Mobile App
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 