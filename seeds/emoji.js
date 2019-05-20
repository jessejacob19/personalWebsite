const emojiData = require("../data/emoji.json");
console.log(emojiData);

const transformedData = Object.keys(emojiData).map(emojiName => {
  return {
    name: emojiName,
    image_url: emojiData[emojiName]
  };
});
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("emoji")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("emoji").insert(transformedData.slice(0, 100));
    });
};
