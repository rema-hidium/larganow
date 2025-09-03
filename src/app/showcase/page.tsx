'use client';
import { useState } from 'react';
import ButtonShowcase from '../components/ui/ButtonShowcase';
import { LargaNowButton } from '../components/ui/LargaNowButton';
import { LargaNowDropdown, LocationDropdown, ShippingLineDropdown, DateRangeDropdown } from '../components/ui/LargaNowDropdown';

export default function ShowcasePage() {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedShipping, setSelectedShipping] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const customOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3 (Disabled)', disabled: true },
    { value: 'option4', label: 'Option 4' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8 font-alata">
          LargaNow Design System
        </h1>
        
        {/* Button Showcase */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 font-alata">Button System</h2>
          <ButtonShowcase />
        </div>

        {/* LargaNow Button Examples */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 font-alata">LargaNow Button Wrapper</h2>
          <div className="p-8 space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 font-alata">Default Primary (Almarai)</h3>
              <div className="flex flex-wrap gap-4">
                <LargaNowButton variant="primary">Default Primary</LargaNowButton>
                <LargaNowButton variant="primary" size="lg">Large Primary</LargaNowButton>
                <LargaNowButton variant="primary" size="xl">XL Primary</LargaNowButton>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 font-alata">With Alata Font</h3>
              <div className="flex flex-wrap gap-4">
                <LargaNowButton variant="primary" fontFamily="alata">Alata Primary</LargaNowButton>
                <LargaNowButton variant="secondary" fontFamily="alata">Alata Secondary</LargaNowButton>
                <LargaNowButton variant="outline" fontFamily="alata">Alata Outline</LargaNowButton>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 font-alata">Other Variants</h3>
              <div className="flex flex-wrap gap-4">
                <LargaNowButton variant="success">Success</LargaNowButton>
                <LargaNowButton variant="destructive">Destructive</LargaNowButton>
                <LargaNowButton variant="warning">Warning</LargaNowButton>
                <LargaNowButton variant="ghost">Ghost</LargaNowButton>
              </div>
            </div>
          </div>
        </div>

        {/* Dropdown Showcase */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 font-alata">Dropdown System</h2>
          <div className="p-8 space-y-8">
            {/* Generic Dropdown with Labels */}
            <div>
              <h3 className="text-lg font-semibold mb-4 font-alata">Generic Dropdown with Labels</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <LargaNowDropdown
                    options={customOptions}
                    value={selectedLocation}
                    onValueChange={setSelectedLocation}
                    placeholder="Select option"
                    label="Small Dropdown"
                    size="sm"
                  />
                </div>
                <div>
                  <LargaNowDropdown
                    options={customOptions}
                    value={selectedLocation}
                    onValueChange={setSelectedLocation}
                    placeholder="Select option"
                    label="Default Dropdown"
                    size="default"
                  />
                </div>
                <div>
                  <LargaNowDropdown
                    options={customOptions}
                    value={selectedLocation}
                    onValueChange={setSelectedLocation}
                    placeholder="Select option"
                    label="Large Dropdown"
                    size="lg"
                  />
                </div>
                <div>
                  <LargaNowDropdown
                    options={customOptions}
                    value={selectedLocation}
                    onValueChange={setSelectedLocation}
                    placeholder="Select option"
                    label="Extra Large Dropdown"
                    size="xl"
                  />
                </div>
              </div>
            </div>

            {/* Specialized Dropdowns with Labels */}
            <div>
              <h3 className="text-lg font-semibold mb-4 font-alata">Specialized Dropdowns with Labels</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <LocationDropdown
                    value={selectedLocation}
                    onValueChange={setSelectedLocation}
                    placeholder="Select location"
                    label="Location"
                  />
                </div>
                <div>
                  <ShippingLineDropdown
                    value={selectedShipping}
                    onValueChange={setSelectedShipping}
                    placeholder="Select shipping line"
                    label="Shipping Line"
                  />
                </div>
                <div>
                  <DateRangeDropdown
                    value={selectedDate}
                    onValueChange={setSelectedDate}
                    placeholder="Select date range"
                    label="Date Range"
                  />
                </div>
              </div>
            </div>

            {/* Dropdowns without Labels */}
            <div>
              <h3 className="text-lg font-semibold mb-4 font-alata">Dropdowns without Labels</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <LocationDropdown
                    value={selectedLocation}
                    onValueChange={setSelectedLocation}
                    placeholder="Select location"
                  />
                </div>
                <div>
                  <ShippingLineDropdown
                    value={selectedShipping}
                    onValueChange={setSelectedShipping}
                    placeholder="Select shipping line"
                  />
                </div>
                <div>
                  <DateRangeDropdown
                    value={selectedDate}
                    onValueChange={setSelectedDate}
                    placeholder="Select date range"
                  />
                </div>
              </div>
            </div>

            {/* Font Family Examples */}
            <div>
              <h3 className="text-lg font-semibold mb-4 font-alata">Font Family Examples</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <LargaNowDropdown
                    options={customOptions}
                    value={selectedLocation}
                    onValueChange={setSelectedLocation}
                    placeholder="Select option"
                    label="Alata Font"
                    fontFamily="alata"
                  />
                </div>
                <div>
                  <LargaNowDropdown
                    options={customOptions}
                    value={selectedLocation}
                    onValueChange={setSelectedLocation}
                    placeholder="Select option"
                    label="Almarai Font (Default)"
                    fontFamily="almarai"
                  />
                </div>
              </div>
            </div>

            {/* Disabled State */}
            <div>
              <h3 className="text-lg font-semibold mb-4 font-alata">Disabled State</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <LargaNowDropdown
                    options={customOptions}
                    value={selectedLocation}
                    onValueChange={setSelectedLocation}
                    placeholder="Select option"
                    label="Disabled Dropdown"
                    disabled={true}
                  />
                </div>
                <div>
                  <LargaNowDropdown
                    options={customOptions}
                    value={selectedLocation}
                    onValueChange={setSelectedLocation}
                    placeholder="Select option"
                    label="With Disabled Options"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 font-alata">Usage Examples</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4 font-alata">Code Examples</h3>
            <div className="space-y-4 text-sm font-mono bg-gray-100 p-4 rounded">
              <div>
                <p className="text-gray-600 mb-2">{'// Using NavLink component (no fontFamily needed)'}</p>
                <p className="text-green-600">{'<NavLink href="#">PROMOTIONS</NavLink>'}</p>
              </div>
              <div>
                <p className="text-gray-600 mb-2">{'// Using LargaNowButton (defaults to Almarai)'}</p>
                <p className="text-green-600">{'<LargaNowButton variant="primary">Book Now</LargaNowButton>'}</p>
              </div>
              <div>
                <p className="text-gray-600 mb-2">{'// Using LargaNowButton with Alata font'}</p>
                <p className="text-green-600">{'<LargaNowButton variant="primary" fontFamily="alata">Navigation</LargaNowButton>'}</p>
              </div>
              <div>
                <p className="text-gray-600 mb-2">{'// Using specialized dropdowns with labels'}</p>
                <p className="text-green-600">{'<LocationDropdown value={location} onValueChange={setLocation} label="From" />'}</p>
              </div>
              <div>
                <p className="text-gray-600 mb-2">{'// Using generic dropdown with label'}</p>
                <p className="text-green-600">{'<LargaNowDropdown options={options} value={value} onValueChange={setValue} label="Custom Field" />'}</p>
              </div>
              <div>
                <p className="text-gray-600 mb-2">{'// Using dropdown without label'}</p>
                <p className="text-green-600">{'<LocationDropdown value={location} onValueChange={setLocation} />'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 