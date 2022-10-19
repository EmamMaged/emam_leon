
// menu click event

document.querySelector("*").addEventListener("click", ()=> {
	if (event.target === document.querySelector(".menu-con") || 
		Array.from(document.querySelectorAll(".menu-con *")).some((e)=> event.target == e)
		// ((val, arr)=> Array.from(arr).some((e)=> val == e))
		// (event.target, document.querySelectorAll(".menu-con *"))	// annoums function
		){
			document.querySelector(".menu").classList.toggle("active");
			document.querySelector(".menu-icons").classList.toggle("active");
		}
	else{
			document.querySelector(".menu").classList.remove("active");
			document.querySelector(".menu-icons").classList.remove("active");
		}
})

//icon in msg box
document.querySelectorAll("i").forEach((e)=> e.classList.add("icon"))

// current year

// document.querySelector("footer").innerHTML = `© ${new Date().getFullYear()} Leon All Right Reserved`;
// document.querySelector("footer").innerText = `© ${new Date().getFullYear()} Leon All Right Reserved`;
document.querySelector("footer").textContent = `© ${new Date().getFullYear()} Leon All Right Reserved`;