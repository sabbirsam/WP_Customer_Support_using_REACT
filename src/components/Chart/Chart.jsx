import './chart.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// recharts start
const data = [
  {
    day: 'Saturday',
    sabbir: 50,
    toukir: 12,
    zakir: 12,
  },
  {
    day: 'Sunday',
    sabbir: 60,
    toukir: 60,
    zakir: 60,
  },
  {
    day: 'Monday',
    sabbir: 70,
    toukir: 70,
    zakir: 70,
  },
  {
    day: 'Tuesday',
    sabbir: 30,
    toukir: 25,
    zakir: 20,
  },
  {
    day: 'Wednesday',
    sabbir: 40,
    toukir: 30,
    zakir: 40,
  },
  {
    day: 'Thursday',
    sabbir: 80,
    toukir: 50,
    zakir: 80,
  },
  {
    day: 'Friday',
    sabbir: 20,
    toukir: 45,
    zakir: 10,
  },
];


const Chart = () => {
  return (
    <div className='wcs_chart'>
      <div className="wcs_title">Support Engineer Performance:</div>
      <ResponsiveContainer width="100%" aspect={2/0.8}>
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorSabbir" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>

              <linearGradient id="colorToukir" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff7300" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#ff7300" stopOpacity={0}/>
              </linearGradient>

              <linearGradient id="colorZakir" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
              </linearGradient>
             
            </defs>

            <XAxis dataKey="day" stroke='gray' />
            <YAxis />

            <CartesianGrid strokeDasharray="3 3" className='wcs_chartGrid'/>
            <Tooltip />
            <Area type="monotone" dataKey="sabbir" stroke="#8884d8" fillOpacity={1} fill="url(#colorSabbir)" />
            <Area type="monotone" dataKey="toukir" stroke="#ff7300" fillOpacity={1} fill="url(#colorToukir)" />
            <Area type="monotone" dataKey="zakir" stroke="#82ca9d" fillOpacity={1} fill="url(#colorZakir)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart