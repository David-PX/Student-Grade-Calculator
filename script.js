function getMarks(){
    var maths = Number(document.getElementById("Maths").value);
    var physics = Number(document.getElementById("Physics").value);
    var chemistry = Number(document.getElementById("Chemistry").value);
    var english = Number(document.getElementById("English").value);
    var totalMarks = 400;
    var percent = (maths + physics + chemistry + english)/totalMarks;
    var percentage = percent * 100;
    

    document.getElementById("percentage").innerHTML = percentage + "%";
    
    if(percentage > 89 && percentage < 101){
        setGradeAndPercent("A", "You have been passed!")
    } else if (percentage > 79 && percentage < 90){
           setGradeAndPercent("B", "You have been passed!");
    }else if (percentage > 69 && percentage < 80){
          setGradeAndPercent("C", "You have been passed!");
    }else if (percentage < 70 ){
          setGradeAndPercent("F", "Sorry you failed :c");
    }


    function setGradeAndPercent(grade, message){
        document.getElementById("grade").innerHTML = grade;
        document.getElementById("alert").classList.remove("invisible"); 
        document.getElementById("alert").innerHTML = message;
         
      

    }


}