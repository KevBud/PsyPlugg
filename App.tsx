import React, { useState } from 'react';
import { COURSE_MODULES } from './constants';
import ModuleContent from './components/ModuleContent';

function App() {
  const [activeModuleId, setActiveModuleId] = useState(COURSE_MODULES[0].id);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeModule = COURSE_MODULES.find(m => m.id === activeModuleId) || COURSE_MODULES[0];

  const handleModuleChange = (id: string) => {
    setActiveModuleId(id);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 safe-area-inset-bottom">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm safe-area-inset-top">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer select-none" onClick={() => handleModuleChange('lydnad')}>
              <div className="w-9 h-9 bg-academic-700 rounded-xl shadow-lg flex items-center justify-center text-white font-serif font-bold text-xl">
                Ψ
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight tracking-tight text-slate-900">Socialpsykologi</span>
                <span className="text-xs text-academic-600 font-semibold tracking-wide uppercase">Guiden</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {COURSE_MODULES.map((module) => (
                <button
                  key={module.id}
                  onClick={() => handleModuleChange(module.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeModuleId === module.id
                      ? 'bg-academic-100 text-academic-900 shadow-sm ring-1 ring-academic-200'
                      : 'text-slate-600 hover:text-academic-700 hover:bg-slate-100'
                  }`}
                >
                  {module.title.split(':')[1] || module.title}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 p-2 rounded-lg hover:bg-slate-100 active:bg-slate-200 transition-colors"
                aria-label="Meny"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 absolute w-full shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <p className="px-3 pt-4 pb-2 text-xs font-bold text-slate-400 uppercase tracking-widest">Kursmoment</p>
              {COURSE_MODULES.map((module) => (
                <button
                  key={module.id}
                  onClick={() => handleModuleChange(module.id)}
                  className={`w-full text-left px-4 py-4 rounded-xl text-base font-semibold transition-all active:scale-[0.98] ${
                    activeModuleId === module.id
                      ? 'bg-academic-50 text-academic-700 border border-academic-100 shadow-sm'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {module.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow pt-4 sm:pt-8 pb-12">
        <ModuleContent key={activeModuleId} module={activeModule} />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <div className="w-12 h-12 bg-academic-800 rounded-full flex items-center justify-center mx-auto text-white font-serif font-bold text-xl">Ψ</div>
          <p className="font-serif italic text-lg opacity-80">"Människan är av naturen ett socialt djur."</p>
          <div className="text-xs text-slate-500 uppercase tracking-widest">
            © {new Date().getFullYear()} Socialpsykologi Guiden
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;