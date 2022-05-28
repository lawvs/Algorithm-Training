/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
var largestWordCount = function (messages, senders) {
  const m = {};
  messages.forEach((msg, i) => {
    const cnt = msg.split(" ");
    const sender = senders[i];
    m[sender] = (m[sender] || 0) + cnt.length;
  });
  // console.log(m);
  let max = 0;
  let maxSender = "";
  Object.entries(m).forEach(([sender, cnt]) => {
    if (cnt > max || (cnt === max && sender > maxSender)) {
      max = cnt;
      maxSender = sender;
    }
  });
  return maxSender;
};
