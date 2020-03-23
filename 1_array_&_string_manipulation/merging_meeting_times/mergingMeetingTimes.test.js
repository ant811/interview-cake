const { mergeRanges } = require('./mergingMeetingTimes');

test('Returns merged rangses of meeting times', () => {
  expect(mergeRanges([{ startTime: 0, endTime: 1 }, { startTime: 3, endTime: 5 }, { startTime: 4, endTime: 8 }, { startTime: 10, endTime: 12 }, { startTime: 9, endTime: 10 },])).toEqual([{ startTime: 0, endTime: 1 }, { startTime: 3, endTime: 8 }, { startTime: 9, endTime: 12 }]);
  expect(mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }])).toEqual([{ startTime: 1, endTime: 4 }]);
  expect(mergeRanges([{ startTime: 1, endTime: 5 }, { startTime: 2, endTime: 3 }])).toEqual([{ startTime: 1, endTime: 5 }]);
  expect(mergeRanges([{ startTime: 1, endTime: 8 }])).toEqual([{ startTime: 1, endTime: 8 }]);
});
