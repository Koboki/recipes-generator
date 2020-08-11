(function() {
  console.log("RG27");
  var head = document.getElementsByTagName("head")[0];
  
  var commonStyles = ".ccm-wrapper,.ccm-wrapper *{box-sizing:border-box}.ccm-show{display:block!important}.ccm-wrapper{color:#000;max-width:620px;position:relative;padding:20px;margin:20px auto;background:#f2f2f2;border: 6px double #6672E5;}.ccm-wrapper h3{margin:0}.ccm-howto{position:absolute!important;visibility:hidden!important;opacity:0!important}.ccm-name{font-size:20px!important;font-weight:700!important;letter-spacing:0!important}.ccm-info{position:relative;font-size:13px;text-transform:capitalize;margin-bottom:20px}.ccm-author,.ccm-yield{display:inline-block}.ccm-yield{margin-right:30px}.ccm-wrapper img{margin:0!important;padding:0!important}#ccm-printbutton{margin:0;color:#fff;padding:5px;font-size:14px;border-radius:3px;cursor:pointer;width:80px;height:35px;background:#555;text-decoration:none;display:inline-flex;align-items:center;justify-content:center}.ccm-print-options{display:none;white-space:nowrap;position:absolute;top:32px;right:0;z-index:2;background:#fff;border:1px solid #ccc}.ccm-print-options button{display:block;background:0 0;border:0;cursor:pointer;padding:10px;width:100%;text-align:left}.ccm-print-options button:hover{background:#555;color:#fff}.ccm-head{color:#000;font-size:20px!important;font-weight:700!important;margin:30px 0 0!important;text-transform:uppercase!important}.ccm-section-title{font-weight:700;font-size:16px}.ccm-section{padding-left:20px;line-height:1.7;margin:10px 0 30px}.ccm-section ol,.ccm-section ul{margin:0!important;padding:0 0 0 30px!important}.ccm-section li{margin:0 0 6px!important;padding:0!important}.ccm-section-steps li{line-height:1.6;margin-bottom:10px!important}.ccm-posturl{overflow-wrap:break-word;word-break:break-word;padding-top:10px;border-top:1px solid #ccc}.ccm-posturl a{font-size:13px}.ccm-notes{font-size:15px;margin:10px 0;padding-left:30px;font-family:inherit;line-height:1.7;white-space:pre-line}.ccm-link{color:#4193f0}.ccm-copyright{font-size:13px;font-style:italic;line-height:1.6;margin-top:15px;padding-top:15px;border-top:1px solid #ccc}.ccm-credit{font-size:12px;padding:10px;text-align:center;background:#fff;margin:15px -20px -20px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;border-top:1px solid rgba(0,0,0,.15)}.ccm-credit a{color:#00f;text-decoration:none}.ccm-categories,.ccm-cuisine,.ccm-keywords,.ccm-section>br,.ccm-time br,.ccm-video{display:none}.ccm-products{font-size:0}.ccm-product{display:inline-block!important;width:calc(33.33% - 11px);text-align:center;vertical-align:top}.ccm-product:not(:last-child){margin-right:15px}.ccm-product-name{display:block!important;font-size:14px!important;color:#6672e5;margin:10px 0!important}.ccm-product-image{width:100%!important;height:170px!important;-o-object-fit:contain;object-fit:contain;border:1px solid #ccc;background:#fff;border-radius:5px}.ccm-product:hover .ccm-product-image{box-shadow:0 0 10px #ccc}@media screen and (max-width:420px){.ccm-product{width:100%;max-width:200px;margin:10px auto!important}}.ccm-nutrition-info{font-size:0;padding:15px 0;margin:20px 0}.ccm-nutrition-info>div{display:inline-block;vertical-align:top;font-size:14px;width:calc(20% - 10px);min-width:100px;text-align:center;margin:10px 5px}.ccm-nutrition-info>div:nth-child(5)~div{margin-top:20px}.ccm-nutrition-info>div p{margin-top:0;margin-bottom:7px}.ccm-nut-notes{padding:15px;margin:15px 0;border-radius:5px;background:#f7edb8}.ccm-time{text-transform:uppercase;font-size:12px;text-align:center;background:#fff;padding:10px 0;margin-bottom:20px}.ccm-time-child{padding:5px;display:inline-block;white-space:nowrap;}.ccm-time-child:not(:last-child){margin-right:12px}.ccm-time-child:not(:last-child):after{content:'';display:inline-block;height:10px;width:1px;background:#000;vertical-align:middle;margin-left:12px}.ccm-summary{text-align:center;margin:20px 0;line-height:1.7;font-style:italic}.ccm-instagram-credit{background:#6e3b5c;padding:20px 15px;margin:20px -20px -20px;color:#fff;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ccm-instagram-icon { all: unset; width: 65px; height: 65px; flex-shrink: 0;margin-right: 15px; border: 5px solid; border-radius: 20px; box-sizing: border-box; } .ccm-instagram-icon:before { content: ''; display: block; width: 60%; height: 60%; margin: 20% auto; border-radius: 50%; border: 5px solid; box-sizing: border-box; box-shadow: 16px -17px 0 -13px; }.ccm-instagram-credit svg{width:80px;fill:#fff;margin-right:20px}.ccm-instagram-credit h5{font-size:24px!important;line-height:1!important;margin:0 0 12px!important}.ccm-instagram-credit a{color:inherit!important}#ccm-pinit{width:35px;height:35px;display:block;background:#fff;position:absolute;top:-18px;font-size:0;left:-15px;border-radius:50%;border:2px solid #fff;z-index:3}.ccm-card [class^='PIN']{display:block!important;position:absolute!important;top:-18px!important;left:-15px!important;z-index:3!important;}";
  
          var styles = [];

          styles[0] = "[data-ccmcardnum='1'] .ccm-wrapper{border:0;border-radius:10px;box-shadow:0 0 10px rgba(0,0,0,.25)}[data-ccmcardnum='1'] .ccm-image{text-align:center;height:300px;margin:-20px -20px -22px;overflow:hidden;border-bottom:3px solid #6672E5;}[data-ccmcardnum='1'] .ccm-image img{width:100%;height:100%;min-height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:50% 50%;object-position:50% 50%;border-top-left-radius:10px;border-top-right-radius:10px;}[data-ccmcardnum='1'] .ccm-btns-wrapper{position:relative;margin-bottom:40px;text-align:center;}[data-ccmcardnum='1'] #ccm-printbutton{float:none;border-radius:25px;width:120px;height:40px;font-weight:700;text-transform:uppercase;background:#6672E5}[data-ccmcardnum='1'] .ccm-print-options{right:calc(50% - 53px)}[data-ccmcardnum='1'] .ccm-name{text-align:center!important;margin-bottom:20px!important;text-transform:capitalize}[data-ccmcardnum='1'] .ccm-info{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:center}[data-ccmcardnum='1'] .ccm-time{border-right:0;border-left:0;margin:0 -20px;border-top:1px dashed #000;border-bottom:1px dashed #000}[data-ccmcardnum='1'] .ccm-summary{margin-bottom:25px}[data-ccmcardnum='1'] .ccm-summary:after{content:'';display:block;width:50px;height:2px;background:#000;margin:auto;margin-top:10px}";

          styles[1] = "[data-ccmcardnum='2'] .ccm-wrapper{border:0;border-radius:10px;box-shadow:0 0 10px rgba(0,0,0,.25)}[data-ccmcardnum='2'] .ccm-image{height:380px;overflow:hidden;border-bottom-left-radius:50%;margin:-20px -20px 40px;border-bottom:7px solid #6672E5}[data-ccmcardnum='2'] .ccm-image img{width:100%;height:100%;min-height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:50% 50%;object-position:50% 50%;border-top-left-radius:10px;border-top-right-radius:10px;}[data-ccmcardnum='2'] .ccm-btns-wrapper{position:absolute;top:15px;right:0}[data-ccmcardnum='2'] #ccm-printbutton{width:80px;height:40px;font-weight:700;background:#6672E5;text-transform:uppercase;border-bottom-left-radius:50px;border-top-left-radius:50px;padding-right:0}[data-ccmcardnum='2'] .ccm-name{text-align:center!important;margin-bottom:20px!important;text-transform:capitalize}[data-ccmcardnum='2'] .ccm-info{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:center}[data-ccmcardnum='2'] .ccm-time{border-right:0;border-left:0;margin:0 -20px;border-top:1px dashed #000;border-bottom:1px dashed #000}[data-ccmcardnum='2'] .ccm-summary{margin-bottom:25px}[data-ccmcardnum='2'] .ccm-summary:after{content:'';display:block;width:50px;height:2px;background:#000;margin:auto;margin-top:10px}";

          styles[2] = "[data-ccmcardnum='3'] .ccm-wrapper{border:0;border-radius:10px;box-shadow:0 0 10px rgba(0,0,0,.25)}[data-ccmcardnum='3'] .ccm-name{text-align:center!important;text-transform:capitalize;margin:-20px -20px 0!important;background:#fff;padding:20px;border-bottom:2px solid #6672E5;border-top-left-radius:10px;border-top-right-radius:10px;}[data-ccmcardnum='3'] .ccm-btns-wrapper{position:relative;text-align:center;margin-bottom:25px;}[data-ccmcardnum='3'] #ccm-printbutton{width:90px;height:35px;font-weight:700;background:#6672E5;text-transform:uppercase;border-radius:0;border-bottom-left-radius:10px;border-bottom-right-radius:10px}[data-ccmcardnum='3'] .ccm-print-options{right:calc(50% - 53px)}[data-ccmcardnum='3'] .ccm-image{height:250px;width:250px;overflow:hidden;margin:40px auto;}[data-ccmcardnum='3'] .ccm-image img{width:100%;height:100%;min-height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:50% 50%;object-position:50% 50%;border-radius:50%;}[data-ccmcardnum='3'] .ccm-info{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:center}[data-ccmcardnum='3'] .ccm-time{border-right:0;border-left:0;margin:0 -20px;border-top:1px dashed #000;border-bottom:1px dashed #000}[data-ccmcardnum='3'] .ccm-summary{margin-bottom:25px}[data-ccmcardnum='3'] .ccm-summary:after{content:'';display:block;width:50px;height:2px;background:#000;margin:auto;margin-top:10px}";

          styles[3] = "[data-ccmcardnum='4'] .ccm-wrapper{border:0;border-radius:10px;box-shadow:0 0 10px rgba(0,0,0,.25)}[data-ccmcardnum='4'] .ccm-name{text-align:center!important;text-transform:capitalize;margin:40px -20px!important;background:#fff;padding:20px;box-shadow:inset 0 -9px 4px -8px #bbb,inset 0 9px 4px -8px #bbb}[data-ccmcardnum='4'] .ccm-image{height:250px;width:250px;overflow:hidden;margin:-20px auto 30px}[data-ccmcardnum='4'] .ccm-image img{width:100%;height:100%;min-height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:50% 50%;object-position:50% 50%;border:3px solid #6672E5;border-top:0;border-bottom-left-radius:50%;border-bottom-right-radius:50%}[data-ccmcardnum='4'] .ccm-image~.ccm-btns-wrapper{text-align:center;position:absolute;top:170px;right:calc(50% - 123px)}[data-ccmcardnum='4'] #ccm-printbutton{width:60px;height:60px;font-weight:700;background:#6672E5;text-transform:uppercase;border-radius:50%;border:3px solid #f2f2f2}[data-ccmcardnum='4'] .ccm-info{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:center}[data-ccmcardnum='4'] .ccm-time{background:0 0}[data-ccmcardnum='4'] .ccm-summary{margin-bottom:25px}[data-ccmcardnum='4'] .ccm-summary:after{content:'';display:block;width:50px;height:2px;background:#000;margin:auto;margin-top:10px}";

          styles[4] = "[data-ccmcardnum='5'] .ccm-info{padding:0 90px 25px 0;border-bottom:2px solid #000;}[data-ccmcardnum='5'] .ccm-btns-wrapper{position:absolute;top:0;right:0;}[data-ccmcardnum='5'] .ccm-image{width:auto;text-align:center;margin-bottom:25px;margin-right:20px;float:left}[data-ccmcardnum='5'] .ccm-image img{max-width:250px}[data-ccmcardnum='5'] .ccm-name{margin-bottom:10px!important;line-height:1.6;text-transform:uppercase;margin-top:0;letter-spacing:1px;text-align:center}[data-ccmcardnum='5'] .ccm-summary{line-height:1.7;font-style:italic}[data-ccmcardnum='5'] .ccm-time{background:#fff;clear:both;border:1px solid #d7d7d7}@media screen and (max-width: 500px){[data-ccmcardnum='5'] .ccm-image{float:none;}[data-ccmcardnum='5'] .ccm-image img{max-width:100%;}}";

          styles[5] = "[data-ccmcardnum='6'] .ccm-info{padding:0 90px 25px 0;border-bottom:2px solid #000;}[data-ccmcardnum='6'] .ccm-btns-wrapper{position:absolute;top:0;right:0;}[data-ccmcardnum='6'] .ccm-image{text-align:center;margin:25px 0}[data-ccmcardnum='6'] .ccm-image img{max-width:100%;width:150px;height:150px;-o-object-fit:cover;object-fit:cover;-o-object-position:50% 50%;object-position:50% 50%;border-radius:150px}[data-ccmcardnum='6'] .ccm-name{margin-top: 20px!important;text-align:center}[data-ccmcardnum='6'] .ccm-summary{margin:20px 0;clear:both;line-height:1.7;font-style:italic}[data-ccmcardnum='6'] .ccm-time{clear:both;border-top:1px dotted #000;border-bottom:1px dotted #000;border-right:0;border-left:0}";

          styles[6] = "[data-ccmcardnum='7'] .ccm-info{padding:0 90px 25px 0;border-bottom:2px solid #000;}[data-ccmcardnum='7'] .ccm-btns-wrapper{position:absolute;top:0;right:0;}[data-ccmcardnum='7'] .ccm-image{text-align:center;margin-bottom:25px}[data-ccmcardnum='7'] .ccm-image img{max-width:100%}[data-ccmcardnum='7'] .ccm-name{line-height:1.6;text-transform:uppercase;margin-top:0!important;letter-spacing:1px;text-align:center;margin-bottom:20px}[data-ccmcardnum='7'] .ccm-time{border-top:1px dashed #000;border-bottom:1px dashed #000;border-right:0;border-left:0}[data-ccmcardnum='7'] .ccm-summary{margin-bottom:30px}[data-ccmcardnum='7'] .ccm-summary:after{content:'';display:block;width:50px;height:2px;background:#000;margin:auto;margin-top:10px}";

  var jsCodeNoImage = 'function ccmpr(btn){newWin=window.open("","printwin");var e=newWin.document.createElement("style");e.innerHTML="html{font-family:sans-serif}.ccm-info,.ccm-name,.ccm-summary{margin:20px 0;text-align:center}.ccm-time{text-align:center;padding:10px;border-top:1px dashed #000;border-bottom:1px dashed #000}.ccm-time-child,.ccm-info-child{margin-right:20px;display:inline-block;}.adunit,.adunitlabel,.adunitwrapper,.ccm-hide-on-print,.chicory-order-ingredients,.clickToBuy{display:none!important}.ccm-head{text-transform:uppercase!important}.ccm-notes{white-space:pre-line;color:#000;}.ccm-nutrition-info>div{display:inline-block;vertical-align:top;font-size:14px;width:calc(20% - 10px);text-align:center;margin:0 5px}.ccm-nutrition-info>div:nth-child(5)~div{margin-top:20px}.ccm-nutrition-info>div p{margin-top:0;margin-bottom:7px}",newWin.document.getElementsByTagName("head")[0].appendChild(e),newWin.document.getElementsByTagName("body")[0].innerHTML=btn.closest(".ccm-wrapper").innerHTML,newWin.print()}';

  var jsCodeWithImage = 'function ccmpr(btn) { function ccmprNow() { var e = btn.id;newWin = window.open("", "printwin"); var n = newWin.document.createElement("style"); n.innerHTML = "html{font-family:sans-serif}img{display:none}.ccm-info,.ccm-name,.ccm-summary{margin:20px 0;text-align:center}.ccm-time{text-align:center;padding:10px;border-top:1px dashed #000;border-bottom:1px dashed #000}.ccm-time-child,.ccm-info-child{margin-right:20px;display: inline-block;}.adunit,.adunitlabel,.adunitwrapper,.ccm-hide-on-print,.chicory-order-ingredients{display:none!important}.ccm-head{text-transform:uppercase!important}.ccm-notes{white-space:pre-line}.ccm-nutrition-info>div{display:inline-block;vertical-align:top;font-size:14px;width:calc(20% - 10px);text-align:center;margin:0 5px}.ccm-nutrition-info>div:nth-child(5)~div{margin-top:20px}.ccm-nutrition-info>div p{margin-top:0;margin-bottom:7px}", "ccm-printWithImage" == e && (n.innerHTML = n.innerHTML.replace("img{display:none}", "img{display:block;margin: 20px auto;width: auto;max-width:250px;}")), newWin.document.getElementsByTagName("head")[0].appendChild(n), newWin.document.getElementsByTagName("body")[0].innerHTML = btn.closest(".ccm-wrapper").innerHTML, newWin.print() } if (btn.id === "ccm-printbutton") { var po = btn.closest(".ccm-wrapper").querySelector(".ccm-print-options"); if (po) { po.classList.toggle("ccm-show"); } else { ccmprNow(); } } else { ccmprNow(); } }';
  
  var pinItScript = ';document.querySelector("#ccm-pinit").addEventListener("click", function (e) { this.href = this.href.replace("URLGoesHere", document.location.href); window.open(this.href, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600"); e.preventDefault(); });';
  
  (function() {
    var aaa = document.querySelectorAll(".ccm-card button");

    if(aaa.length > 0) {
      for(var i = 0; i < aaa.length; i++) {
        aaa[i].setAttribute("onclick", "ccmpr(this);");
      }
    }
    
    aaa = document.querySelectorAll(".ccm-printbutton");

    if(aaa.length > 0) {
      for(var i = 0; i < aaa.length; i++) {
        aaa[i].setAttribute("onclick", "ccmpr(this);");
      }
    }
    
    var a = document.querySelectorAll("a.ccm-printbutton");
    var exc = ["ketorevolution"];
    
    if(a) {
      for(var i = 0; i < a.length; i++) {
        var isWix = document.querySelector("head").firstElementChild.textContent.indexOf("iframe[class|='instagram']") > -1;
        if(!isWix) {
          a[i].removeAttribute("onclick");
          var ahref = a[i].getAttribute("href");
          if(ahref) {
            a[i].setAttribute("href", ahref + "&url=" + window.location.href);
          } else {
            a[i].setAttribute("href", "https://www.recipesgenerator.com/p/print.html?url=" + window.location.href);
          }
        }
        if(location.href.indexOf("ketorevolution") > -1) {
          a[i].removeAttribute("href");
          a[i].setAttribute("onclick", "ccmpr(this)");
        }
      }
    }
    
    if(navigator.userAgent.indexOf("Safari") > -1) {
      var a = document.querySelectorAll(".ccm-image img");

      if(a.length > 0) {
        for(var i = 0; i < a.length; i++) {
          var img = a[i];
          if(img.src.indexOf("wixstatic") > -1) {
            img.src = img.src.replace(".webp", ".jpg");
          }
        }
      }
    }
  })();
  
  (function() {
    var s1 = document.createElement("script");
    s1.src = "https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js";
    head.appendChild(s1);
    s1.onload = function () {
      var s2 = document.createElement("script");
      s2.src = "https://www.gstatic.com/firebasejs/7.17.2/firebase-firestore.js";
      head.appendChild(s2);
      s2.onload = function () {
        var firebaseConfig = {
          apiKey: "AIzaSyCeulM_HvB7AQVmyRoo6VfkC_THKb17JUc",
          authDomain: "star-ratings-99d89.firebaseapp.com",
          projectId: "star-ratings-99d89",
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig); 
        
        var db = firebase.firestore();
        var id = document.querySelector(".ccm-card").getAttribute("data-ccmcardid");
        var docRef = db.collection("t-koboki@hotmail.com").doc(id);
        docRef.get().then(function(doc) {
          if (doc.exists) {
            var a = document.getElementById("aa");
            var s = JSON.parse(a.innerHTML);
            var arr = doc.data().ratings;
            var sum = arr.reduce(function(a, b){
              return a + b;
            }, 0);
            var length = arr.length;
            var ratingValue = sum/length;

            s.aggregateRating = {
              "@type": "AggregateRating",
              "ratingValue": ratingValue,
              "reviewCount": length
            }
            a.innerHTML = JSON.stringify(s);
            console.log("Document data:", doc.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        }).catch(function(error) {
          console.log("Error getting document:", error);
        });
      }
    }
  })();
  
  var card = document.querySelectorAll(".ccm-card");
  var cardStyles = document.querySelectorAll(".ccm-card-styles");
  if(cardStyles.length > 0) {
    for(var i = 0; i < card.length; i++) {
      // the plus sign below is to convert the variable from string to a number
      var cardNum = +card[i].getAttribute("data-ccmcardnum");
      cardStyles[i].innerHTML = commonStyles + styles[cardNum - 1];
    } 
  } else {
    var cardNum = +card[0].getAttribute("data-ccmcardnum");
    var style = document.createElement("style");
    style.innerHTML = commonStyles + styles[cardNum - 1];
    head.appendChild(style);
  }
  
  //document.querySelector(".ccm-card-script").innerHTML = jsCode;
  var scripts = document.createElement("script");
  scripts.type = "text/javascript";
  var theImage = document.querySelector(".ccm-image");
  if(theImage) {
    scripts.innerHTML = jsCodeWithImage;
  } else {
    scripts.innerHTML = jsCodeNoImage;
  }
  if(document.querySelector("#ccm-pinit")) {
    scripts.innerHTML = scripts.innerHTML + pinItScript;
  }
  head.appendChild(scripts);

  var ex = ["www.healthcoverage.me", "plantpassionate.com", "www.jacquitoumbas.com", "fittyfoodlicious.com", "deliciously-free.com", "www.castirongourmetla.com", "www.hautepot.co", "www.brittneydacosta.com", "www.prolongliving.com", "www.tabletocrave.com", "www.riceguysla.com"]
  if(ex.indexOf(location.hostname) === -1) {
    var credits = document.querySelector(".ccm-credit");
    if(credits) {
      credits.innerHTML = 'Created using <a href="https://www.recipesgenerator.com" target="_blank">The Recipes Generator</a>';
    } else {
      credits = document.createElement("div");
      credits.className = "ccm-credit ccm-hide-on-print";
      credits.innerHTML = 'Created using <a href="https://www.recipesgenerator.com" target="_blank">The Recipes Generator</a>';
      document.querySelector(".ccm-wrapper").appendChild(credits);
    }
  } else {
    document.querySelector(".ccm-credit").remove();
  }
 
  var a = document.getElementsByTagName("head")[0];
  var b = document.createElement("style");
  b.type = "text/css";
  b.id = "recipes-generator-styles";
  b.innerText =
    '.recipe-inner [class*="PIN"] { float: right; margin-right: 5px; }.ing-section > br, .recipe-inner .time br{display: none !important;}';
  a.appendChild(b);

  var info = document.querySelector(".recipe-inner .info");
  var printOptions = document.getElementsByClassName("print-options");
  for (var i = 0; i < printOptions.length; i++) {
    var span = printOptions[i].querySelector("span");
    if (span) {
      printOptions[i].innerHTML = span.innerHTML;
    }
  }

  if(info) {
    var br = info.querySelectorAll("br");
    for (var i = 0; i < br.length; i++) {
      info.removeChild(br[i]);
    }
    var child1 = info.firstElementChild;
    if (child1.nodeName === "SPAN" && !child1.getAttribute("itemprop")) {
      child1.outerHTML = child1.innerHTML;
    }
  }

  var scripts = document.getElementsByTagName("script");
  for (var i = 0; i < scripts.length; i++) {
    var scriptContent = scripts[i].innerHTML;
    if (scriptContent.indexOf("printDiv") > -1) {
      var script = document.createElement("script");
      script.innerHTML = scriptContent.replace(
        "max-width:100%",
        "max-width:250px"
      );
      scripts[i].parentElement.appendChild(script);
      scripts[i].parentElement.removeChild(scripts[i]);
    }
  }
})();
