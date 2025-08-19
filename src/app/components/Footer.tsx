export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-200 py-8 z-10" style={{ fontFamily: 'var(--font-almarai)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-gray-600 text-sm mb-4 md:mb-0">
            Copyright © LargaNow.com
          </div>

          {/* Links */}
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
              Want to be our Partner?
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 