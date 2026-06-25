{
    notifications: [],
    async fetchNotifications() {
        const response = await fetch(
            "https://4.224.186.213/evaluation-services/notifications",
        )
    }
}
export async fetchNotifications() {
    const response = await fetch (
        "https://4.224.186.213/evaluation-service/notifications",
        {
            headers:{
                "Authorization" : "Bearer"
            }
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch notifications");
    }

    return response.json();
}