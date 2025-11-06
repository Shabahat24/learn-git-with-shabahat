const amount = 100;
const CardNum = 3487;

const otp =
  "" +
  Math.floor(Math.random() * 10) +
  Math.floor(Math.random() * 10) +
  Math.floor(Math.random() * 10) +
  Math.floor(Math.random() * 10) +
  Math.floor(Math.random() * 10) +
  Math.floor(Math.random() * 10);

const msg = `Your OTP for ${amount} with card number ending with XX${CardNum} is ${otp}`;
console.log(msg);
