function superbowlWin(array){
   const found = array.find(winResults)
   if(found){
       return found.year
   }
//    else{
//        return found.year
//    }
}

winResults = function(element){
    if (element.result === "W"){
        return element.year
    }
}