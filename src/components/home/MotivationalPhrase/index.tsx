import React from 'react';

function MotivationalPhrase() {
  return (
    <div className="py-16 px-6 md:px-14">
      {/* container para centralizar */}
      <div className="grid place-items-center">
        {/* conteúdo */}
        <div>
          <h4
            className="block text-3xl font-bold text-center text-white mb-9 md:text-5xl max-w-2xl leading-[100px]"
            style={{ lineHeight: 1.2 }}
          >
            “Programming is the language of the future and everyone should learn
            to speak it”
          </h4>
          <span className="block text-center font-medium text-white text-xl">
            Mark Zuckerberg
          </span>
        </div>
      </div>
    </div>
  );
}

export default MotivationalPhrase;
