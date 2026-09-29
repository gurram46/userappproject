function wordCount(text) {
  return text.trim() ? text.trim().split(/\s+/).length : 0;
}

console.log(wordCount('public contribution check'));
