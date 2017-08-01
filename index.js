function gibberish(input) {
  // code here
}

// don't touch below this line ;)
// --------------------------------------------------------------

var text = 'Un chasseur sachant chasser sans son chien est un bon chasseur';
var converted = gibberish(text);
var verif = 'Un ch4553ur 54ch4nt ch4553r 54n5 50n ch13n 35t un b0n ch4553ur';
console.info('Your text:    ' + converted,
           '\nVerification: ' + verif);

if (converted !== verif) {
  throw new Error('PWND!')
}
console.info('👏 w311 d0n3! 👯');