// function superbowlWin(array){
//    const found = array.find(function(element){
//        if (element.result === "W"){
//            return element
//        }
//    })
//    if(found){
//        return found.year
//    }
// }

function superbowlWin(record){
    const getResult = record.find(season => season.result === "W")
        if (getResult){
        return getResult.year
    }
}
