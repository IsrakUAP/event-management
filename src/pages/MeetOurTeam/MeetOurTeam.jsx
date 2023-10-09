import { useLoaderData } from "react-router-dom";
import Members from "./Members";


const MeetOurTeam = () => {
    const members =useLoaderData()
    return (
        <div className="grid grid-cols-1 md:grid-cols-3">
            {
                members.map((member,idx)=><Members member={member} key={idx}></Members>)
            }
        </div>
    );
};

export default MeetOurTeam;