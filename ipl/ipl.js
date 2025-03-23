const deliveries = require("./deliveries.json");

// find top Players With Highest Strike Rate Against R Ashwin
const batsmanWithRuns = {};
deliveries.filter(data => data.bowler === "R Ashwin").forEach(del => {
    batsmanWithRuns[del.batsman] = (batsmanWithRuns[del.batsman] || 0) + del.batsman_runs
});

console.log(batsmanWithRuns)     //Pending