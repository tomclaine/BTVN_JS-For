// Bai1 Viết function truyền vào 1 chuỗi bất kỳ, hãy sao chép chuỗi đó lên 10 lần.
function repeatString(str){
    let loopResult = "";
    for(let i = 0; i<10; i++){
        loopResult += str;
    }
    document.querySelector(".bai1").innerText = loopResult;
}
repeatString("a");



// Bai2 Viết function truyền vào 1 chuỗi bất kỳ, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.
function repeatString1(str){
    let loopResult = "";
    for(let i = 0; i<10; i++){
        loopResult += `${str}-`;
    }
    document.querySelector(".bai2").innerText = loopResult.slice(0,-1); 
}
repeatString1("a");



// Bai3 Viết function truyền vào 1 chuỗi bất kỳ và 1 số nguyên dương n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.
function repeatString2(str,num){
    let loopResult = "";
    for(let i = 0; i < num; i++){
        loopResult += `${str}-`;
    }
    document.querySelector(".bai3").innerText = loopResult.slice(0,-1); 
}
repeatString2("a",5);



// Bai4 Viết function tính tổng các số chia hết cho 5 từ 0 -> 100
function calcSum(){
    let total = 0;
    for(let i = 0; i<=100;i++){
        if(i%5==0){
            total+=i;
        }
    }
    document.querySelector(".bai4").innerText = total;
}
calcSum();



// Bai5 Viết function tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
function calcSphericalVolume(banKinh){
    let pi = Math.PI;
    let sphericalVolume = (4/3)*pi*Math.pow(banKinh,3);
    document.querySelector(".bai5").innerText = `Thể tích hình cầu là ${sphericalVolume}`; 
}
calcSphericalVolume(2);



// Bai6 Viết hàm function vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
function calcSum1(a,b){
    let min = Math.min(a,b);
    let max = Math.max(a,b);
    let range = [];
    let total = 0;
    for(let i = min; i < max; i++){
        range.push(i);
    }
    let range1 = range.slice(1);
    for(let j = 0; j<range1.length;j++){
        total+=range1[j]; 
    }
    document.querySelector(".bai6").innerText = total;
}   
calcSum1(8,3);



// Bai7 Cho 1 số, viết function kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
function isPrime(num) { 
    if (num <= 1) return false; 
    if (num % 2 == 0 && num > 2) return false; 
    const s = Math.sqrt(num); 
    for(let i = 3; i <= s; i += 2) { 
        if(num % i === 0) return false; 
    }
    return true;
  }
  document.querySelector(".bai7").innerText = isPrime(11);



// Bai8 Cho 1 số nguyên dương bất kỳ. Viết function tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.
function isPrime(n)
{
    if (n < 2)
        return false;
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;
 
    return true;
}
function calcSumPrimeNum(n){
    let total = 0;
    for (let i = 2; i <= n; i++){
        if(isPrime(i)){
            total+=i;
        }
        document.querySelector(".bai8").innerText = total;
    }
}
calcSumPrimeNum(10);



// Bai9 Cho 1 số nguyên dương, viết function tính tổng tất cả các ước số của số đó.
function calcSumDivisor(n){
    total = 0;
    for(let i = 1;i<=n;i++){
        if(n%i==0){
            total+=i;
        }
        document.querySelector(".bai9").innerText = total;
    }
}
calcSumDivisor(4);
