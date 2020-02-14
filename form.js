function confirmDate()
{
       var input  = document.getElementById("firstDate").value;
       var inputDate = new Date(input);
       console.log(inputDate);


       var month = inputDate.getMonth() + 1;
       var day = inputDate.getDate();
       var year = inputDate.getFullYear();

       if(month < 10)
        month = '0' + month.toString();
       if(day < 10)
        day = '0' + day.toString();

       var date = '"'+ year + "-" + day +"-" + month +'"';
       console.log(date);

   	  document.getElementById("secondDate").setAttribute("min", date);
      document.getElementById("postingDate").setAttribute("max", date);
}
