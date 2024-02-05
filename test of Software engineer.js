const Curvalues = {A : 1 , B : 5 , Z : 10 , 
  L : 50, C : 100 , D : 500 , R : 1000 };

function numericalAdding (strChar , values) {
  const recStr = strChar.toUpperCase().split('');
  const results = [];
  let sum = 0;

  for (let i = 0 ; i < recStr.length ; i++) {
    if (Object.keys(values).includes(recStr[i])) { 
      results.push(values[recStr[i]]); }
    else {

      return `${recStr[i]} is not in the lists`;
    }
  }

  if (recStr.length === 1) {
      sum = values[recStr[0]]; 
  }

  else if (recStr.length >= 2 ){
  for (let j = 0 ; j < recStr.length-1 ; j++) {

  if (values[recStr[j]] >= values[recStr[j + 1]]) {
      sum += results[j];
  } else {
      sum -= results[j];
    }}}

    sum += results[recStr.length-1];
      return sum;
    };


const testdata1 = 'DRZ';
const testerror = 'XYX';
const test1Unit =  'B';
const test2UnitBigger = 'BA';
const test2UnitSmaller= 'AB';
const FinalTest = 'RCRZCAB';



const test1 = numericalAdding(testdata1 , Curvalues);
console.log(test1);

const test2 = numericalAdding(testerror , Curvalues);
console.log(test2);

const test3 = numericalAdding(test1Unit, Curvalues);
console.log(test3);

const test4 = numericalAdding(test2UnitBigger , Curvalues);
console.log(test4);

const test5 = numericalAdding(test2UnitSmaller , Curvalues);
console.log(test5);

const test6 = numericalAdding(FinalTest , Curvalues);
console.log(test6);



