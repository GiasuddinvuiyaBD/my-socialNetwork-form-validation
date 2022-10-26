'use strict';

// Practice Promise resolve,reject,all,race
let amIsuccess = true;

const p1 = Promise.resolve('Promise 1');
const p2 = Promise.resolve('promise 2');
const p3 = Promise.resolve('Promise 3');
const p4 = Promise.resolve('promise 4');


const justPromise = new Promise((resolve,reject) => 
{
	setTimeout(() => 
	{
		if(amIsuccess) 
		{
			// resolve("Inshallah I will be successful boy in the world");
		}else{
			// reject('I am a failer persion in the world');
		}
	},2000);
})
// calling promise
justPromise
		.then((result) => 
		{	
			console.log(result)
		})
		.catch((error) => 
		{
			console.log(error)
		})

// calling all promise for practicing promise.all([]) method
Promise.all([p1,p2,p3,p4,justPromise])
	   .then((result) => 
	   {
	   		// console.log(result);
	   		// for(let gettingValue of result)
	   		// {
	   			// console.log(`That is ${gettingValue}`);
	   		// }
	   })
	   .catch((error) => 
	   {
	   		// console.log(error);
	   });

// another Example :
const userInfo1 = Promise.resolve('user information 1.');
const userInfo2 = Promise.resolve('user information 2.');
const userInfo3 = Promise.resolve('user information 3.');
const userInfo4 = Promise.resolve('user information 4.');


Promise.race([userInfo1,userInfo2,userInfo3,userInfo4])
			.then((result) => 
			{
				// console.log(result);
			})
			.catch((error) => 
			{
				// console.log(error);
			})

// JavaScript Promise start here
const hasMeeting = true;

const meeting = new Promise((resolve,reject) => 
{
	if(!hasMeeting)
	{
		let meetingDetails = 
		{
			name : 'Technical meeting',
			location : 'Google meet',
			time : '10:00 PM'
		}
		resolve(meetingDetails);
	}else{
		reject(('Meeting alredy scheduled'));
	}
});
// another function
const addCalender = ((meetingDetails) => 
{
	const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location}. at ${meetingDetails.time}`
	return Promise.resolve(calender);
})

// calling promise
/* 
meeting 
	.then((result) => 
	{
		console.log(result);
	})
	.catch((error) => 
	{
		console.log(error.message);
	})
*/
// multiple promise calling
meeting
	.then(addCalender)
	.then((result) => 
	{
		console.log(JSON.stringify(result));
	})
	.catch((error) => 
	{
		console.log(error)
	})

// Another Example:
const promise1 = Promise.resolve('promise 1 is here now');
const promise2 = Promise.resolve('promise 2 is here now');
const promise3 = Promise.resolve('promise 3 is here now');

const promise4 = new Promise((resolve,reject) => 
{
	setTimeout(() => 
	{
		resolve('Promise 4 reolve')
	},2000)
});

// number1 calling
promise1
	.then((result) => console.log(result))
	.catch((error) => console.log(error))
promise2
	.then((result) => console.log(result))
	.catch((error) => console.log(error))
promise3
	.then((result) => console.log(result))
	.catch((error) => console.log(error))

// to completing all the promise that will return onely true or false 
Promise.all([promise1,promise2,promise3])
	   .then((result) => 
	   {
	   		console.log(result);
	   })
	   .catch((error) => 
	   {
	   		console.log(error)
	   })
// number four calling
promise4
	.then((res) => 
	{
		console.log(res);
	})
	.catch((error) => 
	{
		console.log(error)
	})

// another Example is .race([]);
const promise5 = Promise.resolve('Reject number 1--------------------');
const promise6 = Promise.reject('Reject number 2--------------------');
const promise7 = Promise.reject('Reject number 3--------------------');
const promise8 = Promise.reject('race is successfully working');

// calling
Promise.race([promise5,promise6,promise7,promise8])
	   .then((result) => console.log(result))
	   .catch((error) => console.log(error))


// -----------------------
// async-await
// -----------------------

// Example of async-await
/* 
		async function myMeeting()
		{
			const meetingDetails = await meeting;
			const calender = await addCalender(meetingDetails);
			console.log(calender)
		}
		myMeeting();
*/

// another Example: 
async function myAnotherMeeting()
{
	try{
		const getMeetingDetails = await meeting;
		const calender = await addCalender(getMeetingDetails);
		console.log(calender);
	}catch{
		console.log('something wrong happend')
	}
}
myAnotherMeeting()


