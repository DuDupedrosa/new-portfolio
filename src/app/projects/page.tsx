'use client';

import React from 'react';
import ProjectsComponent from './components/ProjectsComponent';
import PageFloatContainer from '@/components/Common/PageFloatContainer';

function page() {
  return (
    <div className="min-h-screen bg-mainBlack">
      <PageFloatContainer notUseSectionToGo={true} />
      <ProjectsComponent />
    </div>
  );
}

export default page;
