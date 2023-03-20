import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const Bar = ({ data }) => (
  <ResponsiveBar
    data={data}
    keys={['hot dog']}
    indexBy="country"
    margin={{ top: 10, right: 10, bottom: 40, left: 150 }}
    padding={0.5}
    minValue={-20}
    layout="horizontal"
    colors={{ scheme: 'purple_orange' }}
    borderRadius={5}
    // borderColor={{ from: 'color', modifiers: [['brighter', 1.6]] }}
    enableGridY={false}
    axisBottom={null}
    role="application"
    ariaLabel="Nivo bar chart demo"
    barAriaLabel={function (e) {
      return e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue;
    }}
  />
);

export default Bar;
