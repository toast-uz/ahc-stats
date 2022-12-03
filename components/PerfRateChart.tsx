import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, Label, CartesianGrid, Tooltip } from 'recharts';
import { ContestResult } from '../types';

type Props = { userName: string, latestContestName: string,
  latestContestResults: ContestResult[], myLatestContestResult: ContestResult }

const PerfRateChart = ({ userName, latestContestName,
    latestContestResults, myLatestContestResult }: Props) => (
  <div className="container">
    <ScatterChart width={700} height={350}
      margin={{top: 50, right: 20, left: 20, bottom: 50}}>
      <text x={700 / 2} y={10} fill="black" textAnchor="middle" dominantBaseline="central">
          <tspan fontSize="1.2rem"> {latestContestName} Heuristic Rate vs Perf ({userName} is red)</tspan>
      </text>
      <CartesianGrid />
      <XAxis type="number" dataKey="HRateOld" name="Heuristic Rate (old)"
        ticks={[0, 400, 800, 1200, 1600, 2000, 2400, 2800]} domain={[0, 3200]}
        label={{ value: "Heuristic Rate (old)", position: "bottom"}} />
      <YAxis type="number" dataKey="Perf" name="Heuristic Perf"
        ticks={[0, 400, 800, 1200, 1600, 2000, 2400, 2800]}
        label={{ value: 'Heuristic Perf', angle: -90, position: 'insideBottomLeft'}} />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Scatter name="all" fill="#8884d8" data={latestContestResults} />
      <Scatter name="you" fill="red"
        data={[myLatestContestResult]} />
      <Label value="Pages of my website" offset={0} position="top" />
    </ScatterChart>
  </div>
);

export default PerfRateChart;
