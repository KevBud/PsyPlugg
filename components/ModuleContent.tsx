import React from 'react';
import { CourseModule } from '../types';
import Flashcards from './Flashcards';
import Quiz from './Quiz';

interface ModuleContentProps {
  module: CourseModule;
}

const ModuleContent: React.FC<ModuleContentProps> = ({ module }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-24 animate-in fade-in duration-500 slide-in-from-bottom-4">
      {/* Header */}
      <header className="mb-8 md:mb-12 text-center mt-4">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 font-serif leading-tight">{module.title}</h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">{module.description}</p>
      </header>

      {/* Main Content */}
      <div className="space-y-8 md:space-y-12">
        {module.content.map((section, idx) => (
          <section key={idx} className="bg-white rounded-2xl p-5 md:p-10 shadow-sm border border-slate-100">
            <h2 className="text-xl md:text-2xl font-bold text-academic-900 mb-4 md:mb-6 border-b pb-2 border-slate-100">
              {section.title}
            </h2>
            <div className="space-y-4 md:space-y-6">
              {section.sections.map((item, i) => {
                switch (item.type) {
                  case 'paragraph':
                    return <p key={i} className="text-slate-700 leading-relaxed text-base md:text-lg">{item.text}</p>;
                  case 'heading':
                    return <h3 key={i} className="text-lg md:text-xl font-bold text-slate-800 mt-4 md:mt-6">{item.text}</h3>;
                  case 'list':
                    return (
                      <ul key={i} className="list-disc list-outside pl-5 md:pl-6 space-y-2 text-slate-700 text-base md:text-lg marker:text-academic-500">
                        {item.items?.map((li, liIdx) => (
                          <li key={liIdx}>{li}</li>
                        ))}
                      </ul>
                    );
                  case 'factbox':
                    return (
                      <div key={i} className="bg-academic-50 border-l-4 border-academic-500 p-4 md:p-6 rounded-r-lg my-4 md:my-6">
                        <h4 className="font-bold text-academic-900 mb-2 uppercase tracking-wide text-xs md:text-sm">
                          {item.title || 'Fakta'}
                        </h4>
                        <p className="text-slate-800 italic text-base md:text-lg">{item.text}</p>
                      </div>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Interactive Sections */}
      <div className="mt-12 md:mt-16">
        <div className="flex items-center gap-4 mb-6 md:mb-8">
           <div className="h-px bg-slate-200 flex-1"></div>
           <h2 className="text-lg md:text-2xl font-serif font-bold text-slate-400 uppercase tracking-widest text-center">Öva & Repetera</h2>
           <div className="h-px bg-slate-200 flex-1"></div>
        </div>

        <div className="space-y-2 mb-4 text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-800">Begreppskort</h3>
            <p className="text-slate-600 text-sm">Klicka på korten för att vända dem.</p>
        </div>
        <Flashcards cards={module.flashcards} />

        <div className="mt-12 md:mt-16">
           <Quiz questions={module.quiz} />
        </div>
      </div>
    </div>
  );
};

export default ModuleContent;