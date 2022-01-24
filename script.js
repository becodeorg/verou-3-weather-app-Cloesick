let weather = {
    "apikey": "687a0170dedccd305846958f004f8301"

}

fetch(''){
    .then(res => res
        {
            if(res.ok){
                console.log ('succes')
                
            }else{
                console.log ('no succes')
            }
        )

    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))
}