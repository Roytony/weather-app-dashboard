import {
  Area,
  ComposedChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts'

const AreaChart = () => {
  const Data = [
    {
      x: 20,
      name: 'JAN',
    },
    {
      x: 24,
      name: 'FEB',
    },
    {
      x: 32,
      name: 'MAR',
    },
    {
      x: 36,
      name: 'APR',
    },
    {
      x: 28,
      name: 'MAY',
    },
    {
      x: 20,
      name: 'JuN',
    },
    {
      x: 24,
      name: 'JUL',
    },
    {
      x: 30,
      name: 'AUG',
    },
  ]
  return (
    <ResponsiveContainer width="100%" height={'20%'}>
      <ComposedChart data={Data} width={200} height={60}>
        <Line type="natural" dataKey={'x'} stroke="#FF2F5E" strokeWidth={'4'} />
        <Area dataKey={'x'} fill="#FAD9D9" type="natural" />
        <XAxis dataKey={'name'} />
        <Tooltip />
      </ComposedChart>
    </ResponsiveContainer>
  )
}

export default AreaChart
