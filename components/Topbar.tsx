import Image from 'next/image'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BsPersonFill } from 'react-icons/bs'

const TopBar = () => {
  return (
    <header className="flex h-16 w-full items-center justify-end space-x-6 border-b border-[#EFECEC] px-6">
      <IoMdNotificationsOutline className="iconAnimation  text-3xl" />
      <BsPersonFill className="iconAnimation text-3xl" />
      <div>
        <Image
          className="rounded-full"
          src="https://i.pravatar.cc/150?img=4"
          width={50}
          height={50}
        />
      </div>
    </header>
  )
}

export default TopBar
