const txtElemet = ['Curug cikaso', 'Jembatan situgunung', 'Kawah ratu', 'Pantai ombak tujuh', 'Danau bacan'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){

	if(count == txtElemet.length){
		count = 0;
  }
  
  currentTxt = txtElemet[count];

  words = currentTxt.slice(0, ++txtIndex);
  document.querySelector('.efek-ngetik').textContent = words;

  if (words.length == currentTxt.length){
  	count++;
  	txtIndex = 0;
  }
  setTimeout(ngetik, 500);

})();
