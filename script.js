
$(document).ready(function() {
    $(".add-more").on('click', function(){ 
        var html = $(".copy-fields").clone();
        $(".after-add-more").after(html[0]);
    });

    $("body").on("click",".remove",function(){ 
        $(this).parents(".control-group").remove();
    });
});


$(function() {

    // Dynamically add/remove inputs for any field[]'s
    $('.multi-field-wrapper').each(function() {
      var $wrapper = $('.multi-fields', this);
      // Add button
      $(".add-field", $(this)).click(function(e) {
        $('.multi-field:first-child', $wrapper).clone(true).appendTo($wrapper).find('input').val('').focus();
      });
      // Remove buttons
      $('.multi-field .remove-field', $wrapper).click(function() {
        if ($('.multi-field', $wrapper).length > 1)
          $(this).parents('.multi-field').remove();
      });
    });
  
  });
  // $(document).ready(function() {
  //   $(".modal_button_example_com_self").click(function() {
  //     $('.modal_button_self').hide();
  //     $('#example_com').attr("style", "");
  //   });
  
  //   $(".modal_button_example_net_self").click(function() {
  //     $('.modal_button_self').hide();
  //     $('#example_net').attr("style", "");
  //   });
  
  //   $(".close_self").click(function() {
  //     $('.modal_button_self').attr("style", "");
  //     $('#example_com').hide();
  //     $('#example_net').hide();
  //   });
  
  // });

 
  

//   const vald = document.getElementById("amount").value.childNodes[0]
//   console.log(vald);


$(document).ready(function() {
    var max_fields = 10; //maximum input boxes allowed
    var wrapper = $(".input_fields_wrap"); //Fields wrapper
    var add_button = $(".btn-outline-info"); //Add button ID
  
    var x = 1; //initlal text box count
    $(add_button).click(function(e) { //on add input button click
      e.preventDefault();
      if (x < max_fields) { //max input box allowed
        x++; //text box increment
        $(wrapper).append('<div class="row"><div class="col mb-3"> <input class="form-control" type="text" name="mytext[]" autocomplete="off" placeholder="Particulars"/></div><div class="col-md-2"><input class="form-control" type="number" name="mytext[]" autocomplete="off" placeholder="Amount"/></div><div class="col-md-1"><a href="#" class="remove_field btn btn-outline-warning btn-sm">Remove</a></div></div>'); //add input box
      }
    });
  
    $(wrapper).on("click", ".remove_field", function(e) { //user click on remove text
      e.preventDefault();
      $(this).parents('.row').remove();
      x--;
    });
  
    /* ADDED THIS */
    $('.submit').click(function() {
      list = wrapper.find('input').map(function() {
        return $(this).val();
      }).get();
      // send to server here
       
     console.log(list.length);
       var arrStr=list;

       num = arrStr.map((i)=>Number(i));
      
      function sum (arr){
          s=0;
          for(var i=1; i<arr.length;i+=2){
              
              s=s+arr[i];
              
          }
          
          totVal = document.getElementById("tot")
          
          totVal.value=`${s}`
          console.log(totVal.value);
          
      }
      sum(num)
      
     
    });
    
    
    
    
  });
///pdf 


// function sub()
// {
// }
// // //Import the library into your project
// // var easyinvoice = require('easyinvoice');
// // var fs = require('fs');
// // {/* <script src="https://unpkg.com/easyinvoice/dist/easyinvoice.min.js"></script> */}

// // // const data = {};
// // // const result = await easyinvoice.createInvoice(data);                       

// // var data = {
// //     //"documentTitle": "RECEIPT", //Defaults to INVOICE
// //     "currency": "USD",
// //     "taxNotation": "vat", //or gst
// //     "marginTop": 25,
// //     "marginRight": 25,
// //     "marginLeft": 25,
// //     "marginBottom": 25,
// //     "logo": "https://www.easyinvoice.cloud/img/logo.png", //or base64
// //     //"logoExtension": "png", //only when logo is base64
// //     "sender": {
// //         "company": "Sample Corp",
// //         "address": "Sample Street 123",
// //         "zip": "1234 AB",
// //         "city": "Sampletown",
// //         "country": "Samplecountry"
// //         //"custom1": "custom value 1",
// //         //"custom2": "custom value 2",
// //         //"custom3": "custom value 3"
// //     },
// //     "client": {
// //         "company": "Client Corp",
// //         "address": "Clientstreet 456",
// //         "zip": "4567 CD",
// //         "city": "Clientcity",
// //         "country": "Clientcountry"
// //         //"custom1": "custom value 1",
// //         //"custom2": "custom value 2",
// //         //"custom3": "custom value 3"
// //     },
// //     "invoiceNumber": "2020.0001",
// //     "invoiceDate": "05-01-2020",
// //     "products": [
// //         {
// //             "quantity": "2",
// //             "description": "Test1",
// //             "tax": 6,
// //             "price": 33.87
// //         },
// //         {
// //             "quantity": "4",
// //             "description": "Test2",
// //             "tax": 21,
// //             "price": 10.45
// //         }
// //     ],
// //     "bottomNotice": "Kindly pay your invoice within 15 days."
// // };

// //Create your invoice! Easy!
// // easyinvoice.createInvoice(data, async function (result) {
// //     //The response will contain a base64 encoded PDF file
// //     console.log(result.pdf);
   
   
// //     await fs.writeFileSync("invoice.pdf", result.pdf, 'base64');
// // });

                      
// function download(){
    
   

// var data = {
//    //"documentTitle": "RECEIPT", //Defaults to INVOICE
//    "currency": "USD",
//    "taxNotation": `${valu}`, //or gst
//    "marginTop": 25,
//    "marginRight": 25,
//    "marginLeft": 25,
//    "marginBottom": 25,
//    "logo": "https://www.easyinvoice.cloud/img/logo.png", //or base64
//    //"logoExtension": "png", //only when logo is base64
//    "sender": {
//        "company": "Samisti Media",
//        "address": "Byndoor",
//        "zip": "1234 ",
//        "city": "Byndoor",
//        "country": "India"
//        //"custom1": "custom value 1",
//        //"custom2": "custom value 2",
//        //"custom3": "custom value 3"
//    },
//    "client": {
//        "company": "Client Corp",
//        "address": "Clientstreet 456",
//        "zip": "4567 CD",
//        "city": "Clientcity",
//        "country": "Clientcountry"
//        //"custom1": "custom value 1",
//        //"custom2": "custom value 2",
//        //"custom3": "custom value 3"
//    },
//    "invoiceNumber": "2020.0001",
//    "invoiceDate": "05-01-2020",
//    "products": [
//        {
//            "quantity": "2",
//            "description": "Test1",
//            "tax": 6,
//            "price": 33.87
//        },
//        {
//            "quantity": "4",
//            "description": "Test2",
//            "tax": 21,
//            "price": 10.45
//        }
//    ],
//    "bottomNotice": "Kindly pay your invoice within 15 days."
// };
// easyinvoice.createInvoice(data, function (result) {
//    //console.log(result.pdf);
//      easyinvoice.download("invoice.pdf");
//    });
//   }



  
