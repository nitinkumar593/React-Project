function groupForecast(list) {

    let groupedData = list.reduce((result, item) => {

        let date = item.dt_txt.split(" ")[0];

        if (!result[date]) {
            result[date] = [];
        }

        result[date].push(item);

        return result;

    }, {});

    return groupedData;
}

function getDailyForecast(groupedData) {

    let dailyData = Object.keys(groupedData).map((date) => {

        let dayData = groupedData[date];

        let selectedData = dayData.find((item) => {
            return item.dt_txt.includes("12:00:00")
        });

        if (!selectedData) {
            selectedData = dayData[0];
        }

        return {
            date,
            weather: selectedData
        }
    });
    return dailyData;
}

export {groupForecast, getDailyForecast}