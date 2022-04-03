import {
  Area,
  Bar,
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const LineDataChart2 = () => {
  const Data = [
    {
      x: 80,
      name: 'Jan',
      y: 2,
    },
    {
      x: 110,
      name: 'Feb',
      y: 5,
    },
    {
      x: 170,
      name: 'Mar',
      y: 9,
    },
    {
      x: 120,
      name: 'Apr',
      y: 5.5,
    },
    {
      x: 130,
      name: 'May',
      y: 6,
    },
    {
      x: 124,
      name: 'Jun',
      y: 5.7,
    },
    {
      x: 130,
      name: 'Jul',
      y: 6,
    },
  ]
  return (
    <ResponsiveContainer width={'100%'} height="20%">
      <ComposedChart data={Data}>
        {/* <Bar dataKey={'x'} /> */}
        <Bar dataKey={'x'} fill="#7947F7" />
        <XAxis dataKey={'name'} />
        {/* <YAxis dataKey={'y'} /> */}
        <Tooltip />
      </ComposedChart>
    </ResponsiveContainer>
  )
}

export default LineDataChart2
