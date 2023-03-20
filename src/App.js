import React from 'react';
import './style.css';
import Bar from './Bar';
import Pie from './Pie';
import DoNut from './DoNut';
import Data from './Data.json';

const data = [
  {
    id: 1,
    company: 'Omba',
    industry: 'B',
    year: 2022,
    type: 'IT',
    amount: 1586,
  },
  {
    id: 2,
    company: 'Voolia',
    industry: 'A',
    year: 2021,
    type: 'IT',
    amount: 1926,
  },
  {
    id: 3,
    company: 'Twitterworks',
    industry: 'A',
    year: 2021,
    type: 'Finance',
    amount: 4438,
  },
  {
    id: 4,
    company: 'Divanoodle',
    industry: 'B',
    year: 2022,
    type: 'Finance',
    amount: 3336,
  },
  {
    id: 5,
    company: 'Jabberbean',
    industry: 'D',
    year: 2021,
    type: 'IT',
    amount: 3910,
  },
  {
    id: 6,
    company: 'Cogidoo',
    industry: 'A',
    year: 2022,
    type: 'Warehouse',
    amount: 3606,
  },
  {
    id: 7,
    company: 'Skidoo',
    industry: 'B',
    year: 2020,
    type: 'Warehouse',
    amount: 2246,
  },
  {
    id: 8,
    company: 'Devpoint',
    industry: 'A',
    year: 2022,
    type: 'Warehouse',
    amount: 2065,
  },
  {
    id: 9,
    company: 'Yakijo',
    industry: 'C',
    year: 2022,
    type: 'Finance',
    amount: 2123,
  },
  {
    id: 10,
    company: 'Pixonyx',
    industry: 'A',
    year: 2022,
    type: 'IT',
    amount: 3655,
  },
  {
    id: 11,
    company: 'Babbleset',
    industry: 'B',
    year: 2021,
    type: 'Finance',
    amount: 1969,
  },
  {
    id: 12,
    company: 'Wikibox',
    industry: 'A',
    year: 2020,
    type: 'IT',
    amount: 2449,
  },
  {
    id: 13,
    company: 'Zooveo',
    industry: 'C',
    year: 2021,
    type: 'Warehouse',
    amount: 4645,
  },
  {
    id: 14,
    company: 'Leenti',
    industry: 'A',
    year: 2021,
    type: 'Finance',
    amount: 1631,
  },
  {
    id: 15,
    company: 'Zoovu',
    industry: 'C',
    year: 2021,
    type: 'IT',
    amount: 1447,
  },
  {
    id: 16,
    company: 'Zoovu',
    industry: 'C',
    year: 2020,
    type: 'IT',
    amount: 1957,
  },
  {
    id: 17,
    company: 'Muxo',
    industry: 'C',
    year: 2021,
    type: 'Operation',
    amount: 4525,
  },
  {
    id: 18,
    company: 'Trupe',
    industry: 'C',
    year: 2020,
    type: 'Finance',
    amount: 2283,
  },
  {
    id: 19,
    company: 'Trunyx',
    industry: 'C',
    year: 2022,
    type: 'Operation',
    amount: 2825,
  },
  {
    id: 20,
    company: 'Linkbridge',
    industry: 'D',
    year: 2022,
    type: 'IT',
    amount: 1404,
  },
  {
    id: 21,
    company: 'Jabbersphere',
    industry: 'C',
    year: 2022,
    type: 'Finance',
    amount: 4453,
  },
  {
    id: 22,
    company: 'Thoughtbeat',
    industry: 'C',
    year: 2021,
    type: 'Operation',
    amount: 4090,
  },
  {
    id: 23,
    company: 'Wikibox',
    industry: 'A',
    year: 2022,
    type: 'IT',
    amount: 2304,
  },
  {
    id: 24,
    company: 'Yadel',
    industry: 'C',
    year: 2020,
    type: 'IT',
    amount: 1427,
  },
  {
    id: 25,
    company: 'Twitterbridge',
    industry: 'B',
    year: 2020,
    type: 'Finance',
    amount: 3185,
  },
  {
    id: 26,
    company: 'Buzzdog',
    industry: 'B',
    year: 2021,
    type: 'Finance',
    amount: 4979,
  },
  {
    id: 27,
    company: 'Feedbug',
    industry: 'B',
    year: 2021,
    type: 'Warehouse',
    amount: 2588,
  },
  {
    id: 28,
    company: 'Jetpulse',
    industry: 'D',
    year: 2022,
    type: 'Finance',
    amount: 1833,
  },
  {
    id: 29,
    company: 'Oozz',
    industry: 'A',
    year: 2021,
    type: 'Operation',
    amount: 1688,
  },
  {
    id: 30,
    company: 'Skibox',
    industry: 'C',
    year: 2022,
    type: 'IT',
    amount: 2174,
  },
  {
    id: 31,
    company: 'Twitterworks',
    industry: 'B',
    year: 2022,
    type: 'Warehouse',
    amount: 1905,
  },
  {
    id: 32,
    company: 'Realmix',
    industry: 'B',
    year: 2021,
    type: 'Operation',
    amount: 1564,
  },
  {
    id: 33,
    company: 'Wordpedia',
    industry: 'D',
    year: 2022,
    type: 'Warehouse',
    amount: 4430,
  },
  {
    id: 34,
    company: 'Devbug',
    industry: 'A',
    year: 2022,
    type: 'IT',
    amount: 2499,
  },
  {
    id: 35,
    company: 'Livetube',
    industry: 'A',
    year: 2020,
    type: 'Finance',
    amount: 2177,
  },
  {
    id: 36,
    company: 'Edgepulse',
    industry: 'A',
    year: 2022,
    type: 'Finance',
    amount: 4045,
  },
  {
    id: 37,
    company: 'Mynte',
    industry: 'B',
    year: 2020,
    type: 'Operation',
    amount: 3017,
  },
  {
    id: 38,
    company: 'Eire',
    industry: 'D',
    year: 2020,
    type: 'Operation',
    amount: 3787,
  },
  {
    id: 39,
    company: 'Mynte',
    industry: 'D',
    year: 2022,
    type: 'Finance',
    amount: 1901,
  },
  {
    id: 40,
    company: 'Eabox',
    industry: 'B',
    year: 2021,
    type: 'Finance',
    amount: 3561,
  },
  {
    id: 41,
    company: 'Topiclounge',
    industry: 'D',
    year: 2021,
    type: 'Finance',
    amount: 3481,
  },
  {
    id: 42,
    company: 'Riffpath',
    industry: 'B',
    year: 2022,
    type: 'Finance',
    amount: 4248,
  },
  {
    id: 43,
    company: 'Jabbercube',
    industry: 'C',
    year: 2021,
    type: 'Operation',
    amount: 3531,
  },
  {
    id: 44,
    company: 'Devcast',
    industry: 'D',
    year: 2022,
    type: 'Operation',
    amount: 1052,
  },
  {
    id: 45,
    company: 'Shufflebeat',
    industry: 'A',
    year: 2022,
    type: 'Operation',
    amount: 2331,
  },
  {
    id: 46,
    company: 'Feedmix',
    industry: 'B',
    year: 2022,
    type: 'IT',
    amount: 1417,
  },
  {
    id: 47,
    company: 'Trupe',
    industry: 'C',
    year: 2022,
    type: 'Warehouse',
    amount: 4088,
  },
  {
    id: 48,
    company: 'Brainlounge',
    industry: 'C',
    year: 2021,
    type: 'Operation',
    amount: 3731,
  },
  {
    id: 49,
    company: 'Browsecat',
    industry: 'B',
    year: 2021,
    type: 'IT',
    amount: 3060,
  },
  {
    id: 50,
    company: 'Chatterpoint',
    industry: 'B',
    year: 2022,
    type: 'Finance',
    amount: 1058,
  },
];
const groupList = ['undefined', 'type', 'year', 'industry'];

const pivot = (data, groupList) => {
  if (groupList.length == 1) {
    const res = grouping(data, groupList.shift(), false);
    return res;
  } else {
    const res = grouping(data, groupList.shift(), true);
    res.forEach((val) => {
      val.children = pivot(val.children, [...groupList]);
      return val;
    });
    return res;
  }
};

const grouping = (data, grouping, wc) => {
  const res = data.reduce((acc, cv) => {
    cv['loc'] = cv['amount'];
    if (acc.length == 0) {
      if (wc) {
        acc.push({
          ['name']: cv[grouping],
          ['total']: cv['amount'],
          ['children']: [cv],
        });
      } else {
        acc.push({
          ['name']: cv[grouping],
          ['loc']: cv['amount'],
        });
      }
      return acc;
    }

    const indexOf = acc.map((val) => val['name']).indexOf(cv[grouping]);
    if (indexOf == -1) {
      if (wc) {
        acc.push({
          ['name']: cv[grouping],
          ['total']: cv['amount'],
          ['children']: [cv],
        });
      } else {
        acc.push({
          ['name']: cv[grouping],
          ['loc']: cv['amount'],
        });
      }
      return acc;
    } else {
      if (wc) {
        acc[indexOf]['total'] += cv['amount'];
        acc[indexOf]['children'].push(cv);
      } else {
        acc[indexOf]['loc'] += cv['amount'];
      }
      return acc;
    }
  }, []);
  return res;
};

export default function App() {
  return (
    <div style={{ height: '90vh' }}>
      <Bar data={Data.data} />
      <Pie data={Data.pieData} />
      <DoNut data={Data.doNut} />
      <Sunburst data={JSON.stringify(pivot(data, groupList)[0])} />
      <p>{JSON.stringify(pivot(data, groupList)[0])}</p>
    </div>
  );
}

import { ResponsiveSunburst } from '@nivo/sunburst';

function Sunburst({ data }) {
  return (
    <ResponsiveSunburst
      data={data}
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      id="name"
      value="loc"
      borderColor={{ theme: 'background' }}
      colors={{ scheme: 'accent' }}
      childColor={{
        from: 'color',
        modifiers: [['brighter', '0.12']],
      }}
      enableArcLabels={true}
      arcLabelsRadiusOffset={0.35}
      arcLabelsSkipAngle={11}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 1.4]],
      }}
    />
  );
}
