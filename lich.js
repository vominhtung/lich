function kiemtra(){
   let month = document.getElementById("month").value;
   if (month <0 || month >12) {
       alert("loi")
   } else {
       switch (month) {
           case '4':
           case '6':
           case '9':
           case '11':
               alert("tháng có 30 ngày");
               break;
           case '2':
               alert("tháng có 28 hoặc 29 ngày");
               break;
           default:
               alert("tháng có 31 ngày");
       }

   }
   }

