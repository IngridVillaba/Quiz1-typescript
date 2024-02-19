import React from 'react';

import TypeScriptBasics from '../Quiz-1/Exercise1';
import Person from '../Quiz-1/Exercise2';
import Counter from '../Quiz-1/Exercise3';
import EventHandling from '../Quiz-1/Exercise4';
import OptionalMessage from '../Quiz-1/Exercise5';
// import APITheme from '../Quiz-1/Exercise6';
// import GenericList from '../Quiz-1/Exercise7';
import ReadOnlyCompt from '../Quiz-1/Exercise8';
import UbicationInfo from '../Quiz-1/Exercise9';
import InfoTuple from '../Quiz-1/Exercise10';






function App() {
  const typeScriptBasic = [
    'Functions',
    'Classes',
    'Types',
    'Interfaces',
    'Modules'
  ];


  return (
    <div className='App'>
      <TypeScriptBasics basics={typeScriptBasic}/>
      <Person name='Ingrid' lastname='Villalba' age={26} hobbies={['Play with my son,', 'listen music', 'travel']}/>
      <Counter/>
      <EventHandling/>
      <OptionalMessage message='Hello, good day'/>
      {/* <GenericList items={string} renderItem={(item) => <span>{item}</span>}/> */}
      <ReadOnlyCompt name={['Ingrid','Villalba']}/>
      <UbicationInfo ubication={265}/>
      <InfoTuple/>
    </div>
  );
};

export default App;
