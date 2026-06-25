import {useEffect,useState} from "react";
import NotificationList from "./components/NotificationList";
import {fetchNotifications} from "./services/notificationService";
import {getScore} from "./utils/priority";

function App(){

    const [notifications,setNotifications]=useState([]);
    const [top,setTop]=useState(10);

    useEffect(()=> {
        loadNotifications();
    })


    async function loadNotifications(){

        try{

            const data=await fetchNotifications();

            const unread=data.notifications.filter(
                (item)=>!item.read
            );

            unread.sort((a,b)=>{

                const priority=getScore(b)-getScore(a);

                if(priority!==0)
                    return priority;

                return new Date(b.Timestamp)-new Date(a.Timestamp);

            });

            setNotifications(unread.slice(0,top));

        }

        catch(err){

            console.log(err);

        }

    }

    return(

        <div style={{width:"700px",margin:"40px auto"}}>

            <h1>Priority Inbox</h1>

            <label>

                Top Notifications :

                <select
                value={top}
                onChange={(e)=>setTop(Number(e.target.value))}
                >

                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>

                </select>

            </label>

            <NotificationList
            notifications={notifications}
            />

        </div>

    );

}

export default App;