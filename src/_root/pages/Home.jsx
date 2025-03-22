import React from 'react'
import ExtensionsTab from '../../components/ExtensionList/ExtensionsTab';
import ExtensionList from '../../components/ExtensionList/ExtensionList';

function Home() {
  return (
    <div className="mt-16">
      <ExtensionsTab />
      <ExtensionList />
    </div>
  );
}

export default Home
