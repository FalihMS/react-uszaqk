import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const Pie = ({ data }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    activeOuterRadiusOffset={8}
    enableArcLinkLabels={false}
    enableArcLabels={false}
    height={400}
    width={800}
    colors={{ datum: 'data.color' }}
    legends={[
      {
        anchor: 'right',
        direction: 'column',
        justify: false,
        translateX: 0,
        translateY: 0,
        itemsSpacing: 10,
        itemWidth: 100,
        itemHeight: 20,
        itemTextColor: '#999',
        itemDirection: 'left-to-right',
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: 'circle',
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: '#000',
            },
          },
        ],
      },
    ]}
  />
);

export default Pie;
