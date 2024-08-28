'use client';

import React from 'react';

const dividerItems = [
  {
    name: 'JavaScript',
  },
  {
    name: 'React',
  },
  {
    name: 'Next.js',
  },
  {
    name: 'TypeScript',
  },
  {
    name: 'Angular',
  },
  {
    name: 'Vue.js',
  },
  {
    name: 'Vite',
  },
  {
    name: 'Nest.js',
  },
  {
    name: 'Node',
  },
  {
    name: 'JQuery',
  },
  {
    name: 'PHP',
  },
  {
    name: 'Java',
  },
  {
    name: 'React native',
  },
  {
    name: 'Python',
  },
];

function DividerSection() {
  const [looperInstances, setLooperInstances] = React.useState(1);
  const outerRef = React.useRef<HTMLDivElement>(null);
  const innerRef = React.useRef<HTMLDivElement>(null);

  function resetAnimation() {
    if (innerRef?.current) {
      innerRef.current.setAttribute('data-animate', 'false');

      setTimeout(() => {
        if (innerRef?.current) {
          innerRef.current.setAttribute('data-animate', 'true');
        }
      }, 10);
    }
  }

  const setupInstances = React.useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return;

    const { width } = innerRef.current.getBoundingClientRect();

    const { width: parentWidth } = outerRef.current.getBoundingClientRect();

    const widthDeficit = parentWidth - width;

    const instanceWidth = width / innerRef.current.children.length;

    if (widthDeficit) {
      setLooperInstances(
        looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1
      );
    }

    resetAnimation();
  }, [looperInstances]);

  /*
    6 instances, 200 each = 1200
    parent = 1700
  */

  React.useEffect(() => setupInstances(), [setupInstances]);

  React.useEffect(() => {
    window.addEventListener('resize', setupInstances);

    return () => {
      window.removeEventListener('resize', setupInstances);
    };
  }, [looperInstances, setupInstances]);

  return (
    <div className="border-y-main border-y-white border-y-solid py-5">
      <div className="looper" ref={outerRef}>
        <div className="looper__innerList" ref={innerRef} data-animate="true">
          {[...Array(looperInstances)].map((_, ind) => (
            <div
              key={ind}
              className="looper__listInstance"
              style={{
                animationDuration: '28s',
                // can be reverse or normal
                animationDirection: 'normal',
              }}
            >
              {dividerItems.map((item, i) => {
                return (
                  <div key={i} className={`flex items-center gap-5 ml-3`}>
                    <span className="text-3xl font-bold text-white uppercase">
                      {item.name}
                    </span>

                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full border-[1px] border-solid border-white bg-orange-600"></span>
                      <span className="w-5 h-5 rounded-full border-[1px] border-solid border-white bg-orange-600"></span>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DividerSection;
