import NotificationCard from "./NotificationCard";

function NotificationList({notifications}){

    return(

        <>
        {
            notifications.map((item)=>(
                <NotificationCard
                key={item.ID}
                notification={item}
                />
            ))
        }
        </>

    );

}

export default NotificationList;