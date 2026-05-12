// Here i practice about error handling

let num = 1;
try {
  num.toUpperCase();
} catch(err) {
  let text = err.name;
}

try{
    let res = 10/0

    if(!isFinite(res)){
        throw new Error("Cannot Divided By Zero")
    }

    console.log(res);
}

catch(e){
    console.log(`error occured : ${e}`);
}

finally{
    console.log("Code Execution Done..");
}



function age_check(age){

    if(age<16){
        throw new Error("Age must be 18 or above...")
    }

    console.log("Access Granted....");
}

try{
    age_check(16)
}
catch(e){
    console.log(`Error occured: ${e}`);
}
finally{
    console.log("Final code end here...");
}


async function data_get() {

    try{
        let res = await fetch("api")
        res = await res.json()
        console.log(res);
    }
    catch(error){

        console.log("error occure");
    }
    finally{
        console.log("Code end here...");
    }
}

function check_charge(c){

    try{
    if(c<10){
        console.log("Low bettery");
    }

    else if(c>=10 && c<50){
        console.log("Bettery is good");
    }

    else{
        console.log("Battery is full");
    }
}
catch(e){
    console.log(`Error occured: ${e}`);
}
}


// try {
//   Block of code to try
// } catch(err) {
//   Block of code to handle errors
// } finally {
//   Block of code to be executed regardless of the try / catch result
// }