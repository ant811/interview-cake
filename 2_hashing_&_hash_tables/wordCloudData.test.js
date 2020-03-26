const { populateWordsToCounts } = require('./wordCloudData');

test('Returns map of word frequency', () => {
  let str1 = 'I like cake';
  let map1 = new Map([['i', 1], ['like', 1], ['cake', 1]]);
  expect(populateWordsToCounts(str1)).toEqual(map1);
  let str2 = 'Chocolate cake for dinner and pound cake for dessert';
  let map2 = new Map([['and', 1], ['pound', 1], ['for', 2], ['dessert', 1],
  ['chocolate', 1], ['dinner', 1], ['cake', 2]]);
  expect(populateWordsToCounts(str2)).toEqual(map2);
  let str3 = 'Strawberry short cake? Yum!';
  let map3 = new Map([['cake', 1], ['strawberry', 1], ['short', 1], ['yum', 1]]);
  expect(populateWordsToCounts(str3)).toEqual(map3);
  let str4 = 'Dessert - mille-feuille cake';
  let map4 = new Map([['cake', 1], ['dessert', 1], ['mille-feuille', 1]]);
  expect(populateWordsToCounts(str4)).toEqual(map4);
  let str5 = 'Mmm...mmm...decisions...decisions';
  let map5 = new Map([['mmm', 2], ['decisions', 2]]);
  expect(populateWordsToCounts(str5)).toEqual(map5);
  let str6 = 'Allie\'s Bakery: Sasha\'s Cakes';
  let map6 = new Map([['bakery', 1], ['cakes', 1], ["allie's", 1], ["sasha's", 1]]);
  expect(populateWordsToCounts(str6)).toEqual(map6);
});
