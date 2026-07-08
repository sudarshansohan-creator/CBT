import React from 'react';
import katex from 'katex';

interface LatexRendererProps {
  text: string;
  className?: string;
}

export const LatexRenderer: React.FC<LatexRendererProps> = ({ text, className = "" }) => {
  if (!text) return null;

  // Split by block math $$...$$ first, then inline math $...$
  // This regex matches and captures both $$...$$ and $...$
  const regex = /(\$\$[^\$]+\$\$|\$[^\$]+\$)/g;
  const parts = text.split(regex);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
          const math = part.slice(2, -2);
          try {
            const html = katex.renderToString(math, { displayMode: true, throwOnError: false });
            return (
              <span
                key={index}
                dangerouslySetInnerHTML={{ __html: html }}
                className="block my-2 overflow-x-auto max-w-full math-block"
              />
            );
          } catch (e) {
            return <code key={index} className="bg-slate-800 px-1 py-0.5 rounded text-rose-300">{part}</code>;
          }
        } else if (part.startsWith('$') && part.endsWith('$')) {
          const math = part.slice(1, -1);
          try {
            const html = katex.renderToString(math, { displayMode: false, throwOnError: false });
            return (
              <span
                key={index}
                dangerouslySetInnerHTML={{ __html: html }}
                className="inline-block px-0.5 math-inline"
              />
            );
          } catch (e) {
            return <code key={index} className="bg-slate-800 px-1 py-0.5 rounded text-rose-300">{part}</code>;
          }
        } else {
          // Normal text
          const lines = part.split('\n');
          return lines.map((line, lIdx) => (
            <React.Fragment key={`${index}-${lIdx}`}>
              {line}
              {lIdx < lines.length - 1 && <br />}
            </React.Fragment>
          ));
        }
      })}
    </span>
  );
};
