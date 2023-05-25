//dom-provides you with different functionalities which can be used access and manipulate the webpage
//there are 2 main objects that we deal with in general:document and window   console.log(document);
 console.dir(document);
      console.log(document.domain);
      console.log(document.URL);
      console.log(document.body);
      console.log(document.title);
      console.log(document.all);
      document.__proto__;
    //  create window
    //  window.open("","",width =100,height=100;
   //   window.print();
     window.open("https:google.com");
    //  promt-user can send something to the server
      var age = prompt("Please Enter Your Age:");
      if (age > 20) {
        alert("great you are a valid user");
      } else {
        console.log("age is :" + age);
      }
      var head = document.getElementById('head');
      //console.dir(head);
      var list = document.getElementsByClassName('hobby');
      console.dir(list);
      var tagName = document.getElementsByTagName("p");
      console.log(tagName);
    //console.log(tagName[0]);

    //document.querySelector(); # . etc
    var query = document.querySelector(".list");//pick only one element
    console.log(query);
    var loh = document.querySelectorAll(".list");//pick all the elemnt



    //manipulating style
    document.getElementById("new").style.color = "red";
    // textContent onlt display the text
    // innerHTML only display the text with style tags

   //manipulating Attributes


   // all the elemnt present in  the program
    var x= document.getElementsByTagName("*");
    var len = x.length;
    for(var i=0;i<len;i++){
        console.log(x[i].tagName)+"<br>";
    }

    //DOM eVENTS
    function change(id){
        id.innerHTML = "changed";
    }
    
    document.getElementById("btn").addEventListener('click',function(){
        console.log("button was clicked");
    });

    var x= document.querySelectorAll("li");
    for(var i=0;i<=x.length;i++){
        x[i].addEventListener('mousehover',function(){
            this.style.color="red";
        });
    }