
"use client"
import {useState} from "react";
import { useRouter } from "next/navigation";


import HomeCard from "./HomeCard"

const MeetingTypeList = () => {

    const router=useRouter();

    const [meetingState,setMeetingState]= useState<'isScheduleMeeting'| "isJoiningMeeting"| "isInstantMeeting"| undefined>();
  return (
    <div>
      <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
       <HomeCard 
       img="/icons/add-meeting.svg"
       title="New Meeting"
       description="Start an instant meeting"
       handleClick={()=>setMeetingState("isInstantMeeting")}
       className="bg-orange-1"/>


       <HomeCard img="/icons/schedule.svg"
       title="Schedule Meeting"
       description="Plan your meeting"
       handleClick={()=>setMeetingState("isScheduleMeeting")} className="bg-blue-1"/>


       <HomeCard  img="/icons/recordings.svg"
       title="View Recordings"
       description="Check out your recordings"
       handleClick={()=>router.push("/recordings")} className="bg-purple-1"/>


       <HomeCard  img="/icons/join-meeting.svg"
       title="Join Meeting"
       description="via invitation link"
       handleClick={()=>setMeetingState("isJoiningMeeting")} className="bg-yellow-1"/>
      </section>
    </div>
  )
}

export default MeetingTypeList
