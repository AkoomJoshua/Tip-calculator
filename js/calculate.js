function computeLoan(){
	var amount = Number(document.querySelector(".input_amount").value);
	var duration = document.querySelector(".duration").value;
	var calculate = document.querySelector(".button");
	var result = document.querySelector(".input_result");
	if (amount === 0) {
		alert("amount cannot be empty")
	}
	else{
		if (duration.localeCompare("3 Months")  == 0) {
				loanAmount = (amount * 0.1) + amount;
				result.innerHTML ="$" + loanAmount;
			}
			else if (duration.localeCompare("6 Months") == 0) {
				loanAmount = (amount * 0.15) + amount;
				result.innerHTML ="$" + loanAmount;
			}
			else if (duration.localeCompare("1 year") == 0) {
				loanAmount = (amount * 0.25) + amount;
				result.innerHTML ="$" +loanAmount;
			}
			else if (duration.localeCompare("2 years") == 0) {
				loanAmount = (amount * 0.35) + amount;
				result.innerHTML = "$" + loanAmount;
			}
			else if (duration.localeCompare("5 years") == 0) {
				loanAmount = (amount * 0.55) + amount;
				result.innerHTML ="$" +loanAmount;
			}
		}
}