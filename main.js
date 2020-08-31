//! Create the examination object
const Examination = {
	questions : [{
		id : 1 , question : "Open-source software is free, and is not released under a license." , options : {
			a : "True" , 
			b : "False" , 
			c : "Cannot Say",
			d : "All of the above"
		} , correctOption : "False" 
	} , 
	{
		id : 2 , question : "Because it is developed collaboratively, open-source software is of better quality than proprietary software." , options : {
			a : "True" , 
			b : "False" , 
			c : "Cannot Say",
			d : "All of the above"
		} , correctOption : "Cannot Say" 
	} ,{
		id : 3 , question : "One claimed advantage of open-source software over licenced software is greater flexibility." , options : {
			a : "True" , 
			b : "False" , 
			c : "Cannot Say",
			d : "All of the above"
		} , correctOption : "True" 
	} , {
		id : 4 , question : "It is prohibited to modify free open-source software and then license it for a fee." , options : {
			a : "True" , 
			b : "False" , 
			c : "Cannot Say",
			d : "All of the above"
		} , correctOption : "True" 
	} ,
	{
		id : 5 , question : "Technical support is not available for open-source software." , options : {
			a : "True" , 
			b : "False" , 
			c : "Cannot Say",
			d : "all of the above"
		} , correctOption : "True"   
	},{
		id : 6 , question : "Select option D" , options : {
			a : "True" , 
			b : "False" , 
			c : "Cannot Say",
			d : "All of the above"
		} , correctOption : "All of the above" 
	} ,{
		id : 7 , question : "54 - 30" , options : {
			a : "24" , 
			b : "26" , 
			c : "16",
			d : "34"
		} , correctOption : "26" 
	} ,{
		id : 8 , question : "The Hexadecimal code for white is" , options : {
			a : "#ffffff" , 
			b : "#ff00ff" , 
			c : "#ff0000",
			d : "none of the above"
		} , correctOption : "#ffffff" 
	},{
		id : 9 , question : "CSS means" , options : {
			a : "Cascadind smooth sheet" , 
			b : "Cascading style sheet" , 
			c : "Cascade sttle server",
			d : "All of the above"
		} , correctOption : "Cascading style sheet" 
	},{
		id : 10 , question : "One of these is not a prograpmming language" , options : {
			a : "Javascript" , 
			b : "Python" , 
			c : "Html",
			d : "c#"
		} , correctOption : "Html" 
	} ] , 
	title : "Question Section" 
} 
//!The components for our application 
let count = 60
const questionTime = 0
let TIMER;
renderCounter();
TIMER = setInterval(renderCounter,1000);
const ul = document.createElement('ul') 
let head = document.getElementById('head')
let passage = document.getElementById('passage')
const root = document.querySelector('#root')  
const title = document.createElement('h4') 
title.textContent = Examination.title  
title.style.textAlign = 'center'
root.append(title)



Examination.questions.map(item => {  
    //!Create the question main component 
	const li = document.createElement('li') 
	li.id = item.id  
	//!Create the heading for the question 
	const h3 = document.createElement('h3') 
	h3.className = 'question' 
	h3.textContent = item.id + ') ' + item.question 
	//!Create the paragraph for holding the radio buttons 
	const optionContainer = document.createElement('p')
	//!Create the radio buttons for options 
	//! OptionA 
	const optionA = document.createElement('input') 
	optionA.type = 'radio' 
	optionA.name = item.question 
	optionA.value = item.options.a  
	const spanA = document.createElement('span') 
	spanA.textContent = item.options.a
	optionA.append(document.createTextNode(item.options.a))
	
    //! OptionB 	
	const optionB = document.createElement('input') 
	optionB.type = 'radio' 
	optionB.name = item.question 
	optionB.value = item.options.b 
	optionB.textContent = item.options.b 
	const spanB = document.createElement('span') 
	spanB.textContent = item.options.b 
	
	//! OptionC
	const optionC = document.createElement('input') 
	optionC.type = 'radio' 
	optionC.name = item.question 
	optionC.value = item.options.c 
	optionC.textContent = item.options.c 
	const spanC = document.createElement('span') 
	spanC.textContent = item.options.c

	//! OptionD
	const optionD = document.createElement('input') 
	optionD.type = 'radio' 
	optionD.name = item.question 
	optionD.value = item.options.d 
	optionD.textContent = item.options.d
	const spanD = document.createElement('span') 
	spanD.textContent = item.options.d
	//Append the options to the paragraph 
	optionContainer.append(optionA ,spanA,  optionB ,spanB ,  optionC , spanC, optionD , spanD) 
	//!Append the question and the options to the list 
	li.append(h3 , optionContainer) 
	//!Append the list to the unordered list constainer 
	ul.append(li) 
	//!Append the unordered list to the root 
	
}) 
//!Append the question container to the root 
root.append(ul) 
let submitButton = document.createElement('a')
submitButton.href = "result.html"
submitButton.className = "btn"
submitButton.textContent = 'Submit'
root.append(submitButton) 

// Set up the Timer
function renderCounter(){
    if(count >= questionTime){
        counter.innerHTML = `You have ${count} seconds left`
        counter.style.color = 'red';
        count--
    }else {
		clearInterval(TIMER);
        endTest();
	}
	if(count >= 30){
		counter.style.color = 'green'
	}
	else if(count >= 10){
		counter.style.color = 'blue'
	}
}

//What should occur if the Time Elapses
function endTest(){
	if(count <= 5){
		submitButton.style.opacity = '1'
		submitButton.style.position = 'absolute'
		submitButton.style.top = '200px'
		ul.style.opacity = '0'
		head.style.display = 'none'
		passage.style.display = 'none'
		title.style.display = 'none'
	}
}
//!Add an event listener to the submit button 
submitButton.addEventListener('click' , event => { 
    let totalQuestion = document.querySelectorAll('li')
	let testing = [...totalQuestion] 
	let score = 0
	count = 10
	for ( let i in testing){
		testing[i].childNodes.forEach(item => { 
		    if (item.tagName == 'P') {
			  
				item.childNodes.forEach(elem => { 
				    if (elem.tagName == 'INPUT') { 
					   Examination.questions.map(item => {
						   if ((item.id - 1) == i) {
							   if (elem.checked) {
								   let markOption = item.correctOption == elem.value ? 5 : 0
					               
								   score += markOption
							   }
						   }
					   })						
					}
				})
			}
		})
	} 

    let result = score/(totalQuestion.length*5) * 100 
    localStorage.setItem('result', result)
})
