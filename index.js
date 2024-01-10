// code your solution here

function saturdayFun(activity) {
  if (activity === undefined) {
    activity = 'roller-skate';
  }
  return 'This Saturday, I want to ' + activity + '!';
}

var mondayWork = function(activity) {
  if (activity === undefined) {
    activity = 'go to the office';
  }
  return 'This Monday, I will ' + activity + '.';
};

function wrapAdjective(flair) {
  return function(adjective) {
    return 'You are ' + flair + adjective + flair + '!';
  };
}

