import { Button } from "@/components/ui/button";

export default function ButtonShowcase() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6 font-alata">
          LargaNow Button Design System
        </h2>
        
        {/* Primary Buttons */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 font-alata">
            Primary Buttons (#EFEC1D)
          </h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="default" size="sm" fontFamily="alata">Small Primary</Button>
            <Button variant="default" size="default" fontFamily="alata">Medium Primary</Button>
            <Button variant="default" size="lg" fontFamily="alata">Large Primary</Button>
            <Button variant="default" size="xl" fontFamily="alata">Extra Large Primary</Button>
          </div>
        </div>

        {/* Secondary Buttons */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 font-alata">
            Secondary Buttons
          </h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="secondary" size="sm" fontFamily="alata">Small Secondary</Button>
            <Button variant="secondary" size="default" fontFamily="alata">Medium Secondary</Button>
            <Button variant="secondary" size="lg" fontFamily="alata">Large Secondary</Button>
            <Button variant="secondary" size="xl" fontFamily="alata">Extra Large Secondary</Button>
          </div>
        </div>

        {/* Outline Buttons */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 font-alata">
            Outline Buttons
          </h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" size="sm" fontFamily="alata">Small Outline</Button>
            <Button variant="outline" size="default" fontFamily="alata">Medium Outline</Button>
            <Button variant="outline" size="lg" fontFamily="alata">Large Outline</Button>
            <Button variant="outline" size="xl" fontFamily="alata">Extra Large Outline</Button>
          </div>
        </div>

        {/* Ghost Buttons */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 font-alata">
            Ghost Buttons
          </h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="ghost" size="sm" fontFamily="alata">Small Ghost</Button>
            <Button variant="ghost" size="default" fontFamily="alata">Medium Ghost</Button>
            <Button variant="ghost" size="lg" fontFamily="alata">Large Ghost</Button>
            <Button variant="ghost" size="xl" fontFamily="alata">Extra Large Ghost</Button>
          </div>
        </div>

        {/* Success & Danger Buttons */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 font-alata">
            Success & Danger Buttons
          </h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="success" size="default" fontFamily="alata">Success Button</Button>
            <Button variant="destructive" size="default" fontFamily="alata">Danger Button</Button>
            <Button variant="warning" size="default" fontFamily="alata">Warning Button</Button>
          </div>
        </div>

        {/* Link Buttons */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 font-alata">
            Link Buttons
          </h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="link" fontFamily="alata">Link Button</Button>
          </div>
        </div>

        {/* Full Width Buttons */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 font-alata">
            Full Width Buttons
          </h3>
          <div className="space-y-4">
            <Button variant="default" size="lg" fontFamily="alata" className="w-full">Full Width Primary</Button>
            <Button variant="secondary" size="lg" fontFamily="alata" className="w-full">Full Width Secondary</Button>
          </div>
        </div>

        {/* Disabled Buttons */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 font-alata">
            Disabled Buttons
          </h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="default" disabled fontFamily="alata">Disabled Primary</Button>
            <Button variant="secondary" disabled fontFamily="alata">Disabled Secondary</Button>
            <Button variant="outline" disabled fontFamily="alata">Disabled Outline</Button>
          </div>
        </div>

        {/* Font Family Examples */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 font-alata">
            Font Family Examples
          </h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="default" fontFamily="alata">Alata Font</Button>
            <Button variant="default" fontFamily="almarai">Almarai Font</Button>
            <Button variant="default" fontFamily="default">Default Font</Button>
          </div>
        </div>

        {/* Icon Buttons */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 font-alata">
            Icon Buttons
          </h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="default" size="icon" fontFamily="alata">+</Button>
            <Button variant="secondary" size="icon" fontFamily="alata">×</Button>
            <Button variant="outline" size="icon" fontFamily="alata">⚙</Button>
          </div>
        </div>
      </div>
    </div>
  );
} 