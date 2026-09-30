let arr = [10, 45, 23, 89, 12, 67];

let max = 0;

for(let i=0;i<=arr.length-1;i++)
{
    if(max<arr[i])
    {
        max =arr[i];
    }
}

console.log(max)


// 
console.log(Math.max(arr))