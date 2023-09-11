

    const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    let day = weekDay[date.getDay()];
    document.getElementById('dayOfWeek').innerHTML = day;

    const now = new Date();
    const currentUTC = now.toISOString();
    document.getElementById('uTcTime').innerHTML = currentUTC