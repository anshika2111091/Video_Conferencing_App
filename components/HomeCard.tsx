
import { cn } from "@/lib/utils"
import Image from "next/image"


interface HomeCardProps{
    className:string,
    img:string,
    title:string,
    description:string,
    handleClick:()=>void
}
const HomeCard = ({className,img,title,description,handleClick}:HomeCardProps) => {
  return (
    <div className={cn("flex justify-between px-4 py-6  flex-col w-full xl:max-w-[270px] min-h-[200px] rounded-[14px] cursor-pointer",className)} onClick={handleClick}>
           <div className="flex-center glassmorphism size-12 rounded-[10px]">
            <Image src={img} alt="add-meeting" width={20} height={20}/>
           </div>
           <div className="flex flex-col gap-2">
            <h1 className="text-[18px] font-semibold">{title}</h1>
            <p className="text-[12px] font-normal">{description}</p>
           </div>
        </div>
  )
}

export default HomeCard
