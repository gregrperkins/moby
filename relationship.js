var entries = {};
var requests = {};
var relationship = module.exports = {}

// TODO: read/write from file?
// TODO: postgres?

entries['nasty,lewd'] = [{
  author: 'gregrperkins',
  content: '"lewd" refers to things that are sexual, "nasty" can refer to anything disgusting',
},{
  author: 'gregrperkins',
  content: '"lewd" refers to things that are sexual, "nasty" can refer to anything disgusting',
}];

entries['agitated,anxious'] = [{
  author: 'gregrperkins',
  content: '"agitated" is useful when something is lightly upsetting, but will probably calm down soon; "anxious" refers to a deeper emotion, more frequently implying an ongoing issue',
}];

relationship.search = function (one, two) {
  var result = [].concat(
    entries[one + ',' + two] || [],
    entries[two + ',' + one] || [],
    requests[one + ',' + two] || [],
    requests[two + ',' + one] || []
  );
  return result;
}
