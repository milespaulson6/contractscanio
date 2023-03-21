import React from 'react';

const bandNames = [
  {
    name: "Joji", 
    members: "Joji 1, Joji 2, Joji 3", 
    formed: 2008
  },
  {
    name: "Keshi", 
    members: "Keshi 1, Joji 2, Joji 3", 
    formed: 2018
  },
  {
    name: "Rich Brian", 
    members: "RB 1, Joji 2, Joji 3", 
    formed: 2016
  }
];

function Welcome() {
  return (<h1>The Best Music Artists</h1>);
}

class Band extends React.Component {
  render() {
    // console.log(bandNames);
    //for this object in memory, get the properties for it
    const oneBand = this.props;
    
    return (
      <div>
        <img/>
        <h2>{oneBand.name}</h2>
        <h3>Members: {oneBand.members}</h3>
        <h3>Formed: {oneBand.formed}</h3>
      </div>
    );
  }
}

function BandList() {
  return (
    <div>
      {bandNames.map(oneBand => <Band {...oneBand}/>)}
    </div>
  );
}

export default BandList;