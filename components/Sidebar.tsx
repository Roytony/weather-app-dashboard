import Link from 'next/link'
import { GiPolarStar } from 'react-icons/gi'
import { BiHome } from 'react-icons/bi'
import { MdExplore, MdDashboard, MdPeople } from 'react-icons/md'
import {
  AiOutlineBug,
  AiOutlineSetting,
  AiOutlineRollback,
} from 'react-icons/ai'
import { BsCalculatorFill } from 'react-icons/bs'

const Sidebar = () => {
  return (
    <aside className="flex min-h-screen w-full max-w-[80px] flex-col items-center justify-between border-r border-[#EFECEC]">
      <div>
        <div className="my-10 flex h-12 w-12 items-center  justify-center  rounded-lg bg-orange-500">
          <GiPolarStar className="text-2xl text-white" />
        </div>
        <nav className="flex flex-col items-center space-y-8">
          <Link href="/">
            <BiHome className="iconAnimation  text-3xl" />
          </Link>
          <Link href="/">
            <MdExplore className="iconAnimation text-3xl" />
          </Link>
          <Link href="/">
            <AiOutlineBug className="iconAnimation text-2xl" />
          </Link>
          <Link href="/">
            <MdDashboard className="iconAnimation text-2xl" />
          </Link>
          <Link href="/">
            <MdPeople className="iconAnimation text-3xl" />
          </Link>
          <Link href="/">
            <BsCalculatorFill className="iconAnimation text-2xl" />
          </Link>
          <Link href="/">
            <AiOutlineSetting className="iconAnimation text-2xl" />
          </Link>
        </nav>
      </div>
      <div className="my-10">
        <Link href="/">
          <AiOutlineRollback className="iconAnimation text-xl" />
        </Link>
      </div>
    </aside>
  )
}

export default Sidebar
