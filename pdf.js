
function sub()
{
}
// //Import the library into your project
// var easyinvoice = require('easyinvoice');
// var fs = require('fs');
// {/* <script src="https://unpkg.com/easyinvoice/dist/easyinvoice.min.js"></script> */}

// // const data = {};
// // const result = await easyinvoice.createInvoice(data);                       

// var data = {
//     //"documentTitle": "RECEIPT", //Defaults to INVOICE
//     "currency": "USD",
//     "taxNotation": "vat", //or gst
//     "marginTop": 25,
//     "marginRight": 25,
//     "marginLeft": 25,
//     "marginBottom": 25,
//     "logo": "https://www.easyinvoice.cloud/img/logo.png", //or base64
//     //"logoExtension": "png", //only when logo is base64
//     "sender": {
//         "company": "Sample Corp",
//         "address": "Sample Street 123",
//         "zip": "1234 AB",
//         "city": "Sampletown",
//         "country": "Samplecountry"
//         //"custom1": "custom value 1",
//         //"custom2": "custom value 2",
//         //"custom3": "custom value 3"
//     },
//     "client": {
//         "company": "Client Corp",
//         "address": "Clientstreet 456",
//         "zip": "4567 CD",
//         "city": "Clientcity",
//         "country": "Clientcountry"
//         //"custom1": "custom value 1",
//         //"custom2": "custom value 2",
//         //"custom3": "custom value 3"
//     },
//     "invoiceNumber": "2020.0001",
//     "invoiceDate": "05-01-2020",
//     "products": [
//         {
//             "quantity": "2",
//             "description": "Test1",
//             "tax": 6,
//             "price": 33.87
//         },
//         {
//             "quantity": "4",
//             "description": "Test2",
//             "tax": 21,
//             "price": 10.45
//         }
//     ],
//     "bottomNotice": "Kindly pay your invoice within 15 days."
// };

//Create your invoice! Easy!
// easyinvoice.createInvoice(data, async function (result) {
//     //The response will contain a base64 encoded PDF file
//     console.log(result.pdf);
   
   
//     await fs.writeFileSync("invoice.pdf", result.pdf, 'base64');
// });

                      
function download(){

    var a = ['','One ','Two ','Three ','Four ', 'Five ','Six ','Seven ','Eight ','nine ','Ten ','Eleven ','Twelve ','Thirteen ','Fourteen ','Fifteen ','Sixteen ','Seventeen ','Eighteen ','Nineteen '];
var b = ['', '', 'Twenty','Thirty','Forty','Fifty', 'Sixty','Seventy','Eighty','Ninety'];

function inWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'Lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'Thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'Hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    return str;
}

number = function () {
     amt= inWords(s);
    console.log(amt);
}
number()
    
    var a = document.getElementById("uid").value
    var b = document.getElementById("bill").value
    var c = document.getElementById("email").value
    var d = document.getElementById("Address").value
    var e = document.getElementById("example-date-input").value
    var f = document.getElementById("dis").value
    var g = -f
    var h = document.getElementById("texts").value
    var i =  h
    
  console.log(list);
    console.log(a);
    console.log(g);
    console.log(f);

var data = {
   "documentTitle": "RECEIPT", //Defaults to INVOICE
   "currency": "INR",
   "": "", //or gst
   "marginTop": 25,
   "marginRight": 25,
   "marginLeft": 25,
   "marginBottom": 25,
   "logo": "https://samashtimedia.com/wp-content/uploads/2018/10/smv-fevicon.png" , //or base64
  // "logoExtension": "", //only when logo is base64
   "sender": {
       "company": "Proplus Media ",
       "address": "Yedthare, Byndoor",
       "zip": "576214",
       "city": "9738877358",
       "country": "proplusmedia2017@gmail.com"
       //"custom1": "custom value 1",
       //"custom2": "custom value 2",
       //"custom3": "custom value 3"
   },
   "client": {
       "company": `${a}`,
       "address": `${d}`,
       "zip": `${b}`,
       "city": "",
       "country": `${c}`
       //"custom1": "custom value 1",
       //"custom2": "custom value 2",
       //"custom3": "custom value 3"
   },
   "invoiceNumber": `${b}`,
   "invoiceDate": `${e}`,
   
   "products": [
       {
           "quantity": "1",
           "description": `${list[0]}`,
           "tax": "",
           "price": `${num[1]}`
       },

       
      
   ],
   
   "bottomNotice":"Amount In Words : "+ `${amt}`+"."
   

};

// for(var i=0; i<list.length; i++)  {
//     data.products.push( {
//         "quantity": "1",
//         "description": `${list[i]}`,
//         "tax": "",
//         "price": `${num[i++]}`
//     },
    
//     )
//     // data.push({label: lab[i], value: val[i]});
// }
if(num[3]>0){
data.products.push( {
    "quantity": "1",
    "description": `${list[2]}`,
    "tax": "",
    "price": `${num[3]}`
},)

}
 if(num[5]>0){
    data.products.push( {
        "quantity": "1",
        "description": `${list[4]}`,
        "tax": "",
        "price": `${num[5]}`
    },)
    
    }
    if(num[7]>0){
        data.products.push( {
            "quantity": "1",
            "description": `${list[6]}`,
            "tax": "",
            "price": `${num[7]}`
        },)
        
        }
        if(num[9]>0){
            data.products.push( {
                "quantity": "1",
                "description": `${list[8]}`,
                "tax":"" ,
                "price": `${num[9]}`
            },)
            
            }
            if(num[11]>0){
                data.products.push( {
                    "quantity": "1",
                    "description": `${list[10]}`,
                    "tax": "",
                    "price": `${num[11]}`
                },)
                
                }   
                if(num[13]>0){
                    data.products.push( {
                        "quantity": "1",
                        "description": `${list[12]}`,
                        "tax": "",
                        "price": `${num[13]}`
                    },)
                    
                    }
                    if(num[15]>0){
                        data.products.push( {
                            "quantity": "1",
                            "description": `${list[14]}`,
                            "tax": "",
                            "price": `${num[15]}`
                        },)
                        
                        }  
                        if(num[17]>0){
                            data.products.push( {
                                "quantity": "1",
                                "description": `${list[16]}`,
                                "tax": "",
                                "price": `${num[17]}`
                            },)
                            
                            } 
                            if(num[19]>0){
                                data.products.push( {
                                    "quantity": "1",
                                    "description": `${list[18]}`,
                                    "tax": "",
                                    "price": `${num[19]}`
                                },)
                                
                                }

                                var x =list.lenght
                                if(list[x-1]==x){
                                    data.products.push(
                                    {
                                        "quantity": "1",
                                          "description": "Discount",
                                          "tax": "",
                                          "price": `${g}`
                                      }
                                ) }
                                
easyinvoice.createInvoice(data, function (result) {
   //console.log(result.pdf);
     easyinvoice.download("SMV Billing"+" " +`${e}`+".pdf");
   });
  }

 

  