
function superbowlWin(record){
    const getResult = record.find(season => season.result === "W")
        if (getResult){
            return getResult.year
    }
}
