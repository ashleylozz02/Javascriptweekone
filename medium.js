/////Medium///
function personTone(){
    let input = prompt("What Your Name?" )
    var  inputUpper = input.toUpperCase()
    var inputLower = input.toLowerCase()
    
    if(input === inputUpper){
      console.log(" Please Stop Shouting")
      return
  
    }
    
    if (input === inputLower){
          console.log(" Please Do not whisper")
          return   
    }
    
    console.log("Thank you for not shouting and not whispering!")
    
  }
  
  
   personTone()