import React from 'react';

function FormSection({ label, children }) {
  return (
    <section className="mt-6 max-md:max-w-full">
      <h2 className="text-xl text-black mb-2">{label}</h2>
      {children}
    </section>
  );
}

export default FormSection;