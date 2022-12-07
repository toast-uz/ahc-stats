import React from 'react';
import styles from '../styles/Charts.module.scss';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, TooltipProps } from 'recharts';
import { ValueType, NameType } from 'recharts/src/component/DefaultTooltipContent';
import { UserResult } from '../types';
import AtCoderColorByRate from '../lib/AtCoderColor';

type Props = { userName: string, myContestHist: UserResult[]}

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const duration = payload[0].value as number;
    const perf = payload[1].value as number;
    return (
      <div className={styles.tooltip}>
        <p className={styles.introduction}>{payload[0].payload.contestName}</p>
        <p className={styles.description}>duration: {duration}h</p>
        <p className={styles['description-' + AtCoderColorByRate(perf)]}>perf: {perf}</p>
      </div>
    );
  }
  return null;
};

const DurationPerfChart = ({ userName, myContestHist }: Props) => (
  <div>
    <ScatterChart width={700} height={350}
      margin={{top: 50, right: 20, left: 20, bottom: 50}}>
      <text x={700 / 2} y={10} fill="black" textAnchor="middle" dominantBaseline="central">
          <tspan fontSize="1.2rem">Contest duration and {userName}&apos;s perf</tspan>
      </text>
      <CartesianGrid />
      <XAxis type="number" dataKey="duration" name="duration"
        ticks={[1, 2, 5, 10, 20, 50, 100, 200, 500]} domain={['dataMin', 'dataMax']} scale="log"
        label={{ value: 'contest duration (hours)', position: 'bottom'}} />
      <YAxis type="number" dataKey="perf" name="perf"
        label={{ value: 'perf', angle: -90, position: 'left'}}
        ticks={[0, 400, 800, 1200, 1600, 2000, 2400, 2800]} />
      <Tooltip content={<CustomTooltip />} />
      <Scatter name="Contest duration and perf"
        data={myContestHist} fill="red" />
    </ScatterChart>
  </div>
);

export default DurationPerfChart;