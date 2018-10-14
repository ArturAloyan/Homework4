//2
const triangle = function (char,count)
{
  string = "";
  while(count > 0){
    string = string + char;
    count = count - 1;
  }
  return string;
};

const theLine = function(number, theRow){
  console.log(triangle(" ", theRow) + triangle("*",2*(number - theRow) - 1))
}
const final = function(a){
let theRow= 0
 while (theRow<=a){
  theLine(a,theRow);
   theRow= theRow +1 
 }
};
console.log(final(5))


//5
const add = function(num){
  let b = 0
  while (b < num.length){
  console.log(num[b])
  b = b + 1;
  }
}
add([5,4,3]);

//6
const adding = function(inp){
  let summ = 0;
  let ba = 0;
  while (ba < inp.length){
  summ = summ+inp[ba];
  ba = ba + 1;
  };
  return summ;
};
console.log(adding([5,4,3]));

//7
const reverse = function(a){
  let newarr = '';
  let index = a.length-1 
  while (index >= 0){
    newarr = newarr + a[index]
    index = index - 1;
  }
  return newarr;
};
console.log(reverse('armen'));
//8

const triangle = function (char,count)
{
  string = "";
  while(count > 0){
    string = string + char;
    count = count - 1;
  }
  return string;
};

const theLine = function(number, theRow){
  if (theRow%2==1){
    console.log(" "+ triangle("*",1*(number)));
  }
  if (theRow%2==0){
      console.log(triangle("*",1*(number)));
 }

const final = function(a){
let theRow= 0;
 while (theRow<a){
  theLine(a,theRow);
   theRow= theRow +1 
 }

};
console.log(final(5));
