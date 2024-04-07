let str="Javascript"
let len=str.length;
console.log("String length:"+len);
let str1="Java"
let str2="Script" 
let result=str1+str2;
console.log("concatenated string:"+result);
const str3="\'GFG\' is a learning portal";
const str4="\"GFG\" is a learning portal";
const str5="\\GFG\\ is a learning portal";
console.log(str3);
console.log(str4);
console.log(str5);
//Breaking Long Strings
console.log("Breaking log strings:");
const str6=" 'Geeks for geeks' is \
a learning portal";
console.log(str6);
const str7="'Geeks for geeks' is a"+"learning portal";
console.log(str7);
console.log('finding substring of a string');
let str8="Javascript Tutorial";
let substr=str8.substring(0,10);
console.log("substring is"+substr);
console.log("String to uppercase");
console.log(str8.toUpperCase());
console.log("String to Lowercase");
console.log(str8.toLowerCase());
let searchstr=str8.indexOf('Javascript');
console.log(searchstr);
console.log("String replace");
console.log(str8.replace("Javascript","HTML"));
console.log("Trimming whitespace from string");
let str9='       learn javascript          ';
let trimmedstring=str9.trim();
console.log(trimmedstring);
console.log("Accessing characters from string");
let charatindex=str2[3];
console.log(charatindex);
let str10="hello";
let str11="world";
console.log(str10==str11);
const str12=new String("Geeks for Geeks");
console.log(str12);
const str13="Geeks for Geeks";
console.log(str12==str13);
console.log(str12===str13);
