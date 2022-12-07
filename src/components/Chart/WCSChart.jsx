import './chart.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// recharts start
const data = [
  {
    day: 'Saturday',
    x: 50,
    toukir: 12,
    dummy: 12,
  },
  {
    day: 'Sunday',
    x: 60,
    data: 60,
    dummy: 60,
  },
  {
    day: 'Monday',
    x: 70,
    data: 70,
    dummy: 70,
  },
  {
    day: 'Tuesday',
    x: 30,
    data: 25,
    dummy: 20,
  },
  {
    day: 'Wednesday',
    x: 40,
    data: 30,
    dummy: 40,
  },
  {
    day: 'Thursday',
    x: 80,
    data: 50,
    dummy: 80,
  },
  {
    day: 'Friday',
    x: 20,
    data: 45,
    dummy: 10,
  },
];


const WCSChart = () => {
  return (
    <div className='wcs_chart wcs_chart_free'>
      <h4 className='pro_badge'>PRO</h4>
      <div className="wcs_left wec_left_free">
      <div className="wcs_title">Support Engineer Performance:</div>
      <ResponsiveContainer width="100%" aspect={2/0.8}>
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorDummy" x1="0" y1="0" x2="0" y2="1">
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
            <Area type="monotone" dataKey="x" stroke="#8884d8" fillOpacity={1} fill="url(#colorDummy)" />
            <Area type="monotone" dataKey="data" stroke="#ff7300" fillOpacity={1} fill="url(#colorToukir)" />
            <Area type="monotone" dataKey="dummy" stroke="#82ca9d" fillOpacity={1} fill="url(#colorZakir)" />
        </AreaChart>
      </ResponsiveContainer>
     </div>
    </div>
  )
}

export default WCSChart