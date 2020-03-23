const mergeRanges = (meetings) => {
  if (meetings.length === 1) {
    return meetings;
  }

  const sortedMeetings = meetings.sort((a, b) => {
    return a.startTime - b.startTime;
  });

  let start = sortedMeetings[0].startTime;
  let end = sortedMeetings[0].endTime;
  const mergedMeetings = [];
  for (let i = 1; i < sortedMeetings.length; i++) {
    let currentStartTime = sortedMeetings[i].startTime;
    let currentEndTime = sortedMeetings[i].endTime;
    if (currentStartTime > end) {
      mergedMeetings.push({
        startTime: start,
        endTime: end
      });
      start = currentStartTime;
      end = currentEndTime;
    } else if (currentEndTime > end) {
      end = currentEndTime;
    }
  }
  mergedMeetings.push({
    startTime: start,
    endTime: end
  });

  return mergedMeetings;
}

// Time complexity: O(n * (log n));
// Space complexity: O(n)

module.exports = { mergeRanges };
