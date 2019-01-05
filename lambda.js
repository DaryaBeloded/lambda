exports.handler = function (event, context) {
  // context – AWS Lambda uses this parameter to provide details of your 
  // Lambda function's execution. For more information
  // context.succeed('hello world');

  const arr =  event.date.split('-');

  const dateImp = new Date(arr[0], arr[1], arr[2]);
  const dateNewYear = new Date(arr[0], 12, 31);
  const msPerDay = 24*60*60*1000;
  const daysLeft = Math.round((dateNewYear.getTime()-dateImp.getTime())/msPerDay);

  

  // отправка через RabbitMq на server.js 
  context.succeed(daysLeft);
};