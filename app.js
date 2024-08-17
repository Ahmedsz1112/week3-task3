
let arr = [10 , 5, 7, 20, 40, 90, 150, 30 , 10 ];
// All the Nambers
let total = arr.reduce((total , value) => {
    return total + value;
});
console.log(total);

// Search for the largest number
function maxNum(arr){
    return Math.max(...arr);
}
console.log(maxNum(arr));

//Inverse matrix
function textAll() {
    let text = ["Ahmed" , "Mohamed","Hany" , "Eman" , "Salah"] ;
    return text.reverse()
}
console.log(textAll());

// Remove duplicate from array
function newArray(){
    let arr = [1, 6, 8, 4, 3, 9, 4, 8, 1, 1, 10, 5, 1];
    let arr1 = [];
    arr.forEach((i) => {
        if(arr1.indexOf(i) == -1){
            arr1.push(i)
        };
    })
    return arr1;
};
console.log(newArray());






