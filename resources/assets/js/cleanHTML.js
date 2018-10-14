//function that takes the HTML go clean as a string and returns a new string without the blank comments and data-v-______="" junk
function cleanHTML(toClean){
    //declare a var to store temp strings
    var temp;
    //declare a var to store the cleaned html
    var cleaned;
  
    //loop through the HTML string
    for(var i=0; i<toClean.length; i++) {
      //check if the character is the start of a blank comment aka "<"
      if(toClean[i] == "<"){
        //make sure you won't be reading off the end of toClean
        if(i+7 < toClean.length) {
          //clear temp
          temp = "";
          //set temp to toClean[i] and the following 6 characters
          for (var comLength = i; comLength < i+7; comLength++) {
            temp += toClean[comLength];
          }
          //check if temp is a blank comment
          if (temp == "<!---->") {
            //iterate i so it doesn't add these characters to cleaned
            i += 6;
          }
          else {
            //add the character at i to cleaned
            cleaned += toClean[i];
          }
        }
      }
      //check if the character is the start of data-v-... aka "d"
      else if(toClean[i] == "d") {
        //clear temp
        temp = "";
        //set temp to toClean[i] and the following 6 characters
        for (var comLength = i; comLength < i+7; comLength++) {
          temp += toClean[comLength];
        }
        //check if temp is "data-v-"
        if (temp == "data-v-") {
          //iterate i so it doesn't add these characters to cleaned
          i += 6;
          //declare variable for loop exit
          var ugly = true;
          while(ugly && i<toClean.length) {
            i++;
            //check if you've reached the end of the data-v- ("")
            if(toClean[i]=="\"" && toClean[i-1] == "\""){
              ugly=false;
              //iterate i so it doesn't add these characters to cleaned
              i++;
            }
          }
        }
        else {
          //add the character at i to cleaned
          cleaned += toClean[i];
        }      
      }
      else{
        //add the character at i to cleaned
        cleaned += toClean[i];
      }
    }
    return cleaned;
  }