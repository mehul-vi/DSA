let a = 5;

for (let i = 1; i <= a; i++) {


   

    for(let k =(a*2)-i;k>=i;k--)
    {
        process.stdout.write('  x'); 
    }


    for(let j=a ;j<=(i*2)-2;j--)
        {
            process.stdout.write('  _')
        }

    

  
   console.log()
}