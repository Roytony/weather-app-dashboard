import Image from 'next/image'
import { BiDownArrow, BiUpArrow } from 'react-icons/bi'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import AreaChart from './AreaChart'
import LineDataChart from './LineDataChart'
import LineDataChart2 from './LineDataChart2'

const Main = () => {
  return (
    <div className="flex">
      <div className="flex w-1/2 flex-col items-center">
        <h2 className="py-4 text-2xl font-bold">Weather Reports</h2>
        <div className="my-20 flex space-x-10">
          <div className="flex h-[350px] w-[200px] cursor-pointer flex-col justify-between rounded-3xl bg-[#E0FFCF] p-4 shadow-xl ring-green-200 hover:shadow-2xl hover:ring">
            <div>
              <h2 className="text-2xl">Moscow</h2>
              <p className="text-sm font-bold">Russia</p>
            </div>
            <Image
              objectFit="contain"
              src="/Asset1.png"
              width={150}
              height={200}
            />
          </div>
          <div className=" flex h-[350px] w-[200px] cursor-pointer flex-col justify-between rounded-3xl bg-[#FFD4FB] p-4 shadow-lg ring-pink-300 hover:shadow-xl hover:ring">
            <div>
              <h2 className="text-2xl">Moscow</h2>
              <p className="text-sm font-bold">Russia</p>
            </div>
            <Image
              src="/Asset2.png"
              objectFit="contain"
              width={150}
              height={200}
            />
          </div>
          <div className="flex h-[350px] w-[200px] cursor-pointer flex-col justify-between rounded-3xl bg-[#D7DAFF] p-4 shadow-lg ring-blue-200 hover:shadow-xl hover:ring">
            <div>
              <h2 className="text-2xl">Moscow</h2>
              <p className="text-sm font-bold">Russia</p>
            </div>
            <Image
              src="/Asset3.png"
              objectFit="contain"
              width={150}
              height={200}
            />
          </div>
        </div>
        <h2 className="my-4 text-2xl font-bold text-[#1b2767]">
          Interesting Weather Videos{' '}
        </h2>
        <div className="flex space-x-10">
          <div className="grid h-28 cursor-pointer place-items-center rounded-lg bg-green-300 px-16 transition duration-100 ease-out hover:px-24">
            <AiOutlinePlayCircle className="text-3xl text-white" />
          </div>
          <div className="grid h-28 cursor-pointer place-items-center rounded-lg bg-green-300 px-16 transition duration-100 ease-out hover:px-24">
            <AiOutlinePlayCircle className="text-3xl text-white" />
          </div>
          <div className="grid h-28 cursor-pointer place-items-center rounded-lg bg-green-300 px-16 transition duration-100 ease-out hover:px-24">
            <AiOutlinePlayCircle className="text-3xl text-white" />
          </div>
        </div>
      </div>
      <div className="w-1/2 flex-1  border-l px-8">
        <div className="flex justify-between py-4">
          <h2 className="text-2xl font-bold">Statictics</h2>
          <select className="bg-transparent">
            <option>Lahore,Pakistan</option>
            <option>Delhi,India</option>
            <option>Bejing,China</option>
            <option>katmandu,Nepal</option>
          </select>
        </div>
        <div>
          <div className="flex w-full justify-between">
            <h2 className="text-2xl font-bold  text-[#1B2767]">
              Poplulation index
            </h2>
            <select className="bg-transparent">
              <option>This year</option>
              <option>last 5 year</option>
              <option>last 10 year</option>
              <option>last 50 year</option>
            </select>
          </div>
        </div>
        <AreaChart />
        <div className="flex items-center space-x-5">
          <h2 className="text-3xl font-bold text-[#1B2767]">4.93%</h2>
          <div className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full  border-2 border-[#FF2F5E]">
              <BiDownArrow className="text-lg text-[#FF2F5E]" />
            </div>
            <p className="font-bold text-[#FF2F5E]">-2.3%</p>
          </div>
        </div>
        <div className="my-10">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold text-[#1B2767]">
              Avrage Monthly temparature
            </h2>
            <select className="bg-transparent">
              <option>2022</option>
              <option>last 5 year</option>
              <option>last 10 year</option>
              <option>last 50 year</option>
            </select>
          </div>
        </div>
        <LineDataChart />
        <div className="my-10">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold text-[#1B2767]">
              Avrage Monthly Rainfall
            </h2>
            <select className="bg-transparent">
              <option>2022</option>
              <option>last 5 year</option>
              <option>last 10 year</option>
              <option>last 50 year</option>
            </select>
          </div>
        </div>
        <LineDataChart2 />
        <div className="flex items-center space-x-5">
          <h2 className="text-2xl font-bold text-[#1B2767]">50mm</h2>
          <div className="flex items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full  border-2 border-green-500">
              <BiUpArrow className="text-lg text-green-500" />
            </div>
            <p className="font-bold text-green-500">+12%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
