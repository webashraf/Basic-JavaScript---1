// // Day 12 Class - 7
// var x = 5;
// var y = 10.5;

// // Number to string convert >>
// // var t = ''+x
// console.log( x + z)

// var a = 5;
// var b = "10.5";
// // string to number convert >>
// // var d = parseFloat(b)
// // var d = parseInt(b);
// // var d = +y; 

// // Fixed number value show >>
// // x.toFixed(2);
// console.log( x + z)

// var o = .2;
// var p = .1;
// var q = o + p;
// var r = q.toFixed(3);
// console.log(r);

// // Day 12 Class - 8

// var x = 17;
// var y = 3;
// console.log(x % y);

// var x = 15;
// var y = 4;
// x++;
// console.log(x);

// var x = 15;
// var y = 4;
// x--;
// console.log(x);



// Day 12 Class - 9
// number absolute
// 
//যে কোন নাম্বার কে পজেটিভ করে সো করাবে যেমনঃ -5 কে Math.abs করলে 5 করে দিবে।
// let numbr = -5;
// let absoluteNumber = Math.abs(numbr);
// console.log(absoluteNumber);

// দশমিক নাম্বার কে পূর্ন সংখ্যায় কনভার্ট করতে Math.round(); ব্যাবহার করতে হবে। এটার কাজ হচ্ছে 5.400001 / 5.604450 মানে দশমিকের পরের সংখ্যা যদি ৫ অথবা ৫ এর বড় হয় তাহলে পূর্ন সংখার সাথে এক যোগ করে ভ্যালু দেখাবে আর যদি ছোট হয় তাহলে পূর্ন সংখ্যা যা দেয়া আছে ভ্যালু তাই দেখাবে।।
// let numbr = 5.6545251;
// let absoluteNumber = Math.round(numbr);
// console.log(absoluteNumber);

// দশমিক নাম্বার কে পূর্ন সংখ্যায় কনভার্ট করতে Math.round(); ব্যাবহার করতে হবে। তবে যদি  Math.ceil(); দেয়া হয় তাহলে দশমিকের পর যদি .০০০০১ ও থাকে তাহলে সব সময় ১ যোগ করবে, তবে যদি শুধু শূন্য থাকে তাহলে যোগ করবেনা।
// let numbr = 5.00000000000001;
// let absoluteNumber = Math.ceil(numbr);
// console.log(absoluteNumber);

// // দশমিক নাম্বার কে পূর্ন সংখ্যায় কনভার্ট করতে Math.round(); ব্যাবহার করতে হবে। তবে যদি  Math.floor(); দেয়া হয় তাহলে সব সময় পূর্ন সংখ্যায় যা ভ্যালু আছে তাই দেখাবে।
// let numbr = 5.99999999;
// let absoluteNumber = Math.floor(numbr);
// console.log(absoluteNumber);


// যদি এক এক বার এক সংখ্যা লঠারির মতন ভ্যালু সো করাতে Math.random()*100; ব্যাবহার করতে হবে।
// let numbr = 5.00000001;
// let numbr = Math.random()*100;
// let absoluteNumber = Math.round(numbr);
// console.log(absoluteNumber);
