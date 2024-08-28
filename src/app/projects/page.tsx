'use client';

import React from 'react';
import ProjectsComponent from './components/ProjectsComponent';
import PageFloatContainer from '@/components/Common/PageFloatContainer';
import Footer from '@/components/Common/Footer';

function page() {
  return (
    <div className="min-h-screen bg-mainBlack">
      <PageFloatContainer notUseSectionToGo={true} />
      <ProjectsComponent />
      <Footer />
    </div>
  );
}

export default page;
