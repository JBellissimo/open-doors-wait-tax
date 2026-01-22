import { useState } from 'react';
import { Zap, Menu, X } from 'lucide-react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Whitepaper } from './pages/Whitepaper';

type Page = 'home' | 'about' | 'whitepaper';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'whitepaper':
        return <Whitepaper />;
      default:
        return <Home />;
    }
  };

  const navItems = [
    { label: 'Dashboard', page: 'home' as Page },
    { label: 'About Us', page: 'about' as Page },
    { label: 'Technical Whitepaper', page: 'whitepaper' as Page },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 font-mono flex flex-col">
      <header className="border-b border-gray-800 bg-gray-900/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setCurrentPage('home')}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Zap className="w-6 h-6 text-red-500" />
              <h1 className="text-lg font-bold tracking-tight hidden sm:inline">OPEN DOORS</h1>
            </button>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    setCurrentPage(item.page);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-sm uppercase tracking-wider transition-colors ${
                    currentPage === item.page
                      ? 'text-red-500 font-bold'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    setCurrentPage(item.page);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-sm uppercase tracking-wider transition-colors text-left ${
                    currentPage === item.page
                      ? 'text-red-500 font-bold'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      <main className="flex-1">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
