import React from 'react';
import { HTMLContent } from '../../common/layout';
import { HomeParallax } from './components/HomeParallax';
import { HomeSection } from './components/HomeSection';
import { HomeContext } from './home.context';

export const HomePage: React.FC = () => {
  const { homeSectionList } = React.useContext(HomeContext);
  return (
    <>
      <HomeParallax />
      {homeSectionList.map((homeSectionData, index) => (
        <HomeSection ContentComponent={HTMLContent} key={index} {...homeSectionData} />
      ))}
    </>
  );
};
