
$(document).ready(function(){
  
    // INITIALIZE FIREBASE
    // firebase.initializeApp({
    //     apiKey: "AIzaSyAcUvfyKJGou-wgMuylV9-m6Ls3ja_Z_-0",
    //     authDomain: "mmt-data-1329b.firebaseapp.com",
    //     projectId: "mmt-data-1329b",
    //     storageBucket: "mmt-data-1329b.appspot.com",
    //     messagingSenderId: "155590285910",
    //     appId: "1:155590285910:web:32740b7ea015602f5ff9f7"
    // });
  
    // let db = firebase.firestore();

    // db.collection("products").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         var item = $("<div/>");
    //         item.css("background-image", "url(" + doc.data().imgurl + ")")
    //         item.addClass("productImg");
    //         $("body").append(item);
    //     });
    // });
});

$("#Products").click( function(){
    $(".dropdown").toggleClass("ddHide");
    $(".pageContainer").toggleClass("pageDrop");
    $("#productArrow").toggleClass("imgflip");
    console.log("clicked");
});

$("#Menu").click( function(){
    $(".navText").toggleClass("ntShow");
    console.log("clicked");
});

$("#toTop").click( function(){
    window.scrollTo(0, 0);
});

  

