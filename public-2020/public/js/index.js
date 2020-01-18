

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCkDXYJM_NW_ZrT3qWg6PYmoVnxQTxtsNI",
  authDomain: "practice-858de.firebaseapp.com",
  projectId: "practice-858de"
});

// Calling Firestore
var db = firebase.firestore();

//Function to store data on firebase
function storedata(){
	//taking information about the person from profile page
	var input = document.getElementById("second").value;
	console.log(input);

	db.collection("user").doc().set({
	name:input.name,
	//education details in the form of Json objects
	univ:input.univ,
	//skills details in the form of Json objects
	skl:input.skl,
	//location details
	loc:input.loc
	//experience details in the form of Json objects
	exp:input.exp
	//Interest details in the form of Json object 
	foi:input.int
	//Field of study
	fos:input.fos
	//about
	par:input.par

}).then(console.log("written sucessfully")).catch(function(error) {
    console.error("Error adding document: ", error);
});
}

function searchdata(){
	var univ = document.getElementById("univ").value;

	var loc = document.getElementById("loc").value;
	
	var fos = document.getElementById("fos").value;
	
	var foi = document.getElementById("foi").value;
	
	var skl = document.getElementById("skl").value;
	
	var exp = document.getElementById("exp").value;
	//var filters = document.getElementById("")

	query = db.collection("user");

	if (univ !== 'Any') {
	    query = query.where('univ', '==', univ);
	  }

	if (loc !== 'Any') {
	    query = query.where('loc', '==', loc);
	  }

	if (fos !== 'Any') {
	    query = query.where('fos', '==', fos);
	  }

    if (foi !== 'Any') {
	    query = query.where('foi', '==' ,foi);
	  } 

	if (skl !== 'Any') {
	    query = query.where('skl', '==', skl);
	  }

	if (exp !== 'Any') {
	    query = query.where('exp', '==', exp);
	  }

	var i=1;
	query = function(querySnapshot){
		querySnapshot.forEach(function(doc){
		var data = doc.data();
		var n = i.toString();
		var al = document.getElementById("name"+n);

		var ap = document.getElementById("fos"+n);
		i=i+1;
		
		al.innerHTML = data.name
		ap.innerHTML = data.fos

	}).catch(function(error) {
        console.error("Error getting documents: ", error);
    });
	}
	window.location.href="saerch-result.html";

}

console.log(query)
function search(){
	var filter = document.getElementById("second").value;}
	






