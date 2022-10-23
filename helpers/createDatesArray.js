const getDayFromNow = (amountOfDays) => {
    const day = new Date();
    day.setDate(new Date().getDate() - amountOfDays);
    
    return day;
}

const createDatesArray = () => {
    const yesterday = getDayFromNow(1);
    const lastWeek = getDayFromNow(7);
    const lastMonth = getDayFromNow(30);
    const lastYear = getDayFromNow(365);

    const todayString = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`;
    const yesterdayString = `${yesterday.getFullYear()}-${yesterday.getMonth()}-${yesterday.getDate()}`;
    const lastWeekString = `${lastWeek.getFullYear()}-${lastWeek.getMonth()}-${lastWeek.getDate()}`;
    const lastMonthString = `${lastMonth.getFullYear()}-${lastMonth.getMonth()}-${lastMonth.getDate()}`;
    const lastYearString = `${lastYear.getFullYear()}-${lastYear.getMonth()}-${lastYear.getDate()}`;

    return [
        {
            label: "All Time"
        },
        {
            label: "Today",
            from: todayString,
            to: todayString,
        },
        {
            label: "Yesterday",
            from: todayString,
            to: yesterdayString,
        },
        {
            label: "Last Week",
            from: todayString,
            to: lastWeekString,
        },
        {
            label: "Last Month",
            from: todayString,
            to: lastMonthString,
        },
        {
            label: "Last Year",
            from: todayString,
            to: lastYearString,
        }
    ]
}


export default createDatesArray