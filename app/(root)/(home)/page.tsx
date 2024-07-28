import date from 'date-and-time';
import MeetingTypeList from '@/components/MeetingTypeList';

export default function HomePage() {
  const now = new Date();
  return (
   <section className="flex size-full flex-col gap-10 text-white">
    <div className="h-[260px] w-full rounded-[20px] bg-hero bg-cover">
      <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
        <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">Upcomming Meeting at: 12:30 PM</h2>
<div className="flex flex-col gap-2">
  <h1 className="text-2xl font-extrabold md:text-2xl lg:text-5xl">
   {date.format(now, 'hh:mm A ')}
  </h1>
  <p className="text-lg font-medium text-sky-xl lg:text-xl">{date.format(now, 'dddd, MMMM DD YYYY')}</p>
</div>
      </div>
      
    </div>
    <MeetingTypeList/>
   </section>
  )
}
