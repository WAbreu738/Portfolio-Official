import React from 'react';
import CertificateText from './components/CertificateText';
import Badge from './components/Badge';

const Certificate = () => {
  return (
    <section id="certificate" className="container my-16 mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 md:m-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/4 md:pr-10">
            <CertificateText />
          </div>
          <div className="w-full md:w-1/4">
            <Badge />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
