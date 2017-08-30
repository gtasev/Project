window.onload = function(){

	// public or private checkbox function code

	var checkBoxPublic = document.querySelectorAll("#cb1");
	var checkBoxPrivate = document.querySelectorAll("#cb2");

	function switchCheck(){checkBoxPrivate[0].addEventListener("change",function(){
		if (checkBoxPrivate[0].checked) {
			checkBoxPublic[0].checked = false;		
		}	
	})}
		function switchCheck1(){checkBoxPublic[0].addEventListener("change",function(){
		if (checkBoxPublic[0].checked) {
			checkBoxPrivate[0].checked = false;		
		};	
	})};
	switchCheck();
	switchCheck1();

	// Button's - function code

	var templatesDiv = document.getElementById("temp");

	function buttons(){
	for(var i = 1; i < templatesDiv.children.length; i++){
		var templateSection = templatesDiv.children[i];
		var sectionDivRight = templateSection.children[2];
		var copyToProButton = sectionDivRight.children[1].children[0];
		var copyToStaButton = sectionDivRight.children[1].children[1];
		var duplicateButton = sectionDivRight.children[1].children[2];
		console.dir(copyToProduction);

		// adding Id's to the Dom - elements

		templateSection.setAttribute("id","sec"+i);
		copyToProButton.setAttribute("id","cToP"+i);
		copyToStaButton.setAttribute("id","cToS"+i);
		duplicateButton.setAttribute("id","id"+i);

		// adding eventListener to button's

		copyToProButton.addEventListener("click",copyToProduction);
		copyToStaButton.addEventListener("click",copyToStaging)
		duplicateButton.addEventListener("click",duplicate);
		};
	};

	function copyToProduction(){
	
	var id = this.getAttribute("id");
	var idSecEle = "sec"+id.charAt(4);
	var secElement = document.getElementById(idSecEle).children[1].children[0].innerText;
	var msgBox = document.getElementById('alrt');
	var textMsgBox = document.getElementById('alrtP');

	document.getElementById('alrtP').innerHTML=secElement + "<br>" + " was copied to PRODUCTION"; 
	msgBox.style.visibility = "visible";
	msgBox.style.opacity = "1";
	setTimeout(function() {textMsgBox.innerHTML='',msgBox.style.visibility = "hidden",msgBox.style.opacity = "0";},1800);
	}

	function copyToStaging(){
	
	var id = this.getAttribute("id");
	var idSecEle = "sec"+id.charAt(4);
	var secElement = document.getElementById(idSecEle).children[1].children[0].innerText;
	var msgBox = document.getElementById('alrt');
	var textMsgBox = document.getElementById('alrtP');

	document.getElementById('alrtP').innerHTML=secElement +'<br>' + "  was copied to STAGING"; 
	msgBox.style.visibility = "visible";
	msgBox.style.opacity = "1";
	setTimeout(function() {textMsgBox.innerHTML='',msgBox.style.visibility = "hidden",msgBox.style.opacity = "0";},1800);
}

	function duplicate(){
		var id = this.getAttribute("id");
		var idSecEle = "sec"+id.charAt(2);
		var secElement = document.getElementById(idSecEle);
		var html = document.createElement('section');
		html.innerHTML = secElement.innerHTML;
		templatesDiv.appendChild(html);

		buttons();
	};
	buttons();


}