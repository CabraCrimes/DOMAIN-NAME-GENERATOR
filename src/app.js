window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let exten = ["com ", "net ", "us ", "io "];

  const domainLoop = (arrOfPronoun, arrOfAdj, arrOfNoun, arrOfExten) => {
    let arrOfDomain = [];
    for (let i = 0; i < arrOfAdj.length; i++) {
      for (let j = 0; j < arrOfPronoun.length; j++) {
        for (let k = 0; k < arrOfNoun.length; k++) {
          for (let l = 0; l < arrOfExten.length; l++) {
            arrOfDomain.push(
              `${arrOfPronoun[j]}${arrOfAdj[i]}${arrOfNoun[k]}.${arrOfExten[l]}`
            );
          }
        }
      }
    }
    return arrOfDomain;
  };
  let domainGenerator = domainLoop(pronoun, adj, noun, exten);
  console.log(domainGenerator);

  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#dom").innerHTML = domainGenerator;
  });
};
