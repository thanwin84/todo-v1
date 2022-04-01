    
exports.getDate = ()=>{
    const day = new Date();
    const currentDay = day.getDay();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    return day.toLocaleDateString("en-US", options);
}
exports.getDay = ()=>{
    const day = new Date();
    const currentDay = day.getDay();
    const options = {
        weekday: "long",
    }
    return day.toLocaleDateString("en-US", options);
}
