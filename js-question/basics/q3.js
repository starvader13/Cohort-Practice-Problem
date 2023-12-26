/*
Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

function currentDate(){
    let d = new Date()
    let month = d.getMonth() + 1;
    let date = d.getDate()
    let year = d.getFullYear()

    console.log(`mm-dd-yyyy: ${month}-${date}-${year}`)
    console.log(`mm/dd/yyyy: ${month}/${date}/${year}`)
    console.log(`dd-mm-yyyy: ${date}-${month}-${year}`)
    console.log(`dd/mm/yyyy: ${date}/${month}/${year}`)
}

currentDate()