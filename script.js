
const genbtn = document.getElementById('generate-btn');

genbtn.addEventListener('click',function(){

    var n = 3;
    ran = Math.random(n);
    rslt = Math.round(ran*100000);

    document.getElementById('input-bar').value = rslt;
    document.getElementById('press-input').value = "";
})
document.getElementById('backSpace').addEventListener('click', function(){
    var str = document.getElementById("press-input").value;
        str = str.substr(0, str.length - 1);
        document.getElementById("press-input").value = str;
})

document.getElementById('cancel').addEventListener('click', function(){
    document.getElementById("press-input").value = "";
})

var number = document.getElementsByClassName('button');

for (var i = 0; i<number.length; i++){

    number[i].addEventListener('click', function(){

  
        var inputKey = document.getElementById('press-input');
        inputKey.value = inputKey.value + parseFloat(this.innerText);
        
        
        document.getElementById('submitBtn').addEventListener('click', function(){

            if (inputKey.value == rslt){
        
                document.getElementById('yes').style.display = 'block';
                document.getElementById('no').style.display = 'none';
                
            }

            else{
               
                document.getElementById('no').style.display = 'block';
                document.getElementById('press-input').value = "";
                document.getElementById('yes').style.display = 'none';
                

                
            }
            


            
        })
        
    

    })

 
}
