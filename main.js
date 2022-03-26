// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Returns an object with properties specimentNum and dna. SpecimenNum = number; DNA = array;
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate () {
      // Selects a random index to change and replaces it with a random base.
      this.dna.splice(Math.floor(Math.random()*dna.length-1),1,returnRandBase()); 
      return this.dna;
    },
    compareDNA (pAequorObj) {
      let countMatches = 0;
      for(let i = 0; i<15; i++) {
        if(this.dna[i] === pAequorObj[i])
          countMatches++;
      }
      let matchRate = countMatches/this.dna.length;
      console.log(`${this.specimenNum} and ${pAequorObj.specimenNum} have ${matchRate*100}% in common`);
    },
    willLikelySurvive () {
      let countCOrG = 0;
      for (let i = 0; i<15; i++) {
        if(this.dna[i]==='C' || this.dna[i]==='G')
          countCOrG++;
      }
      return countCOrG/this.dna.length >= 0.6 ? true : false;

    }
  }
}

// Creating 30 instances witht the factory function
let pAequorSample;
const samples = [];
for(let i = 0; i<30; i++){
  pAequorSample = pAequorFactory(i, ['A', 'C', 'C', 'G', 'T', 'G', 'C', 'A', 'A', 'C', 'C', 'T', 'A', 'G']);
  console.log(pAequorSample.willLikelySurvive());
  if(pAequorSample.willLikelySurvive() == true)
      samples.push(pAequorSample);

}

console.log(samples);







