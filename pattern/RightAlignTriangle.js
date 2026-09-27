let a =5;
let i ,j,k,l,m;

for(i=1;i<=a;i++)
{
    for(j=1;j<=a-i;j++)
    {
        process.stdout.write('  ')
    }

    for(k=1;k<=(i*2)-1;k++){
        process.stdout.write(' *')
    }

    console.log();

}
for(i=1;i<=a;i++)
{
    for(k=1;k<=(i*2)-1;k++){
        process.stdout.write(' *')
    }
    
    for(j=1;j<=a-i;j++)
        {
            process.stdout.write('  ')
        }
        console.log()
}
