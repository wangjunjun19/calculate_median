function calculate_median(arr) {
  //请勿改动函数名
    var evenArray=buildEvenArray(arr);
    var median=findMedian(evenArray);

    return median;
}

function buildEvenArray(arr) {
    var evenArray=[];
    var n=0;
    
    for(var i=0;i<arr.length;i++){
        if(i%2==1){
            evenArray[n]=arr[i];
            n++;
        }
    }
    /*arr.forEach(function (value, index) {
        if(index%2==1){
            evenArray[n]=value;
            n++;
        }
    })*/
    
    return evenArray;
}

function findMedian(evenArray) {
    var median;
    if(evenArray.length%2==0){
        median=(evenArray[parseInt(evenArray .length/2)]+evenArray[parseInt(evenArray .length/2)-1])/2;
    }
    else{
        median=evenArray[parseInt(evenArray .length/2)];
    }

    return median;
}

module.exports = calculate_median;
