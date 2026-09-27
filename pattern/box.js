let a =30;

for(let i=1;i<=a;i++)
{
    for(let j=1;j<=a;j++)
    {
        if(i===1 || i===a ||j===1 ||j===a)
        {process.stdout.write(' *')}else{process.stdout.write('  ')}
    }
    console.log()
}