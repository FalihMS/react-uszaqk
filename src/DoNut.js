import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const CenteredMetric = ({ dataWithArc, centerX, centerY }) => {
  let total = 0;
  dataWithArc.forEach((datum) => {
    total += datum.value;
  });

  return (
    <text
      x={centerX}
      y={centerY}
      textAnchor="middle"
      dominantBaseline="central"
      style={{
        fontSize: '52px',
        fontWeight: 600,
      }}
    >
      {total}%
    </text>
  );
};

const DoNut = ({ data }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    activeOuterRadiusOffset={8}
    enableArcLinkLabels={false}
    enableArcLabels={false}
    height={400}
    width={800}
    colors={{ datum: 'data.color' }}
    innerRadius={0.8}
    layers={['arcs', 'arcLabels', 'arcLinkLabels', 'legends', CenteredMetric]}
    legendLabel={(datum) => <h1>{datum.id}</h1>}
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
        itemTextColor: '#000',
        itemDirection: 'left-to-right',
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: 'circle',
        // toggleSerie: true,
        // effects: [
        //   {
        //     on: 'hover',
        //     style: {
        //       itemTextColor: '#000',
        //     },
        //   },
        // ],
      },
    ]}
  />
);

export default DoNut;
