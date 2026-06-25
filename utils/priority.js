export const PRIORITY = {
    Placement: 3,
    Result: 2,
    Event: 1
};

export const getScore = (notification) => {
    return PRIORITY[notification.Type] || 0;
};