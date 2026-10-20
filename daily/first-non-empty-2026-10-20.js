function firstNonEmpty(values) {
  return values.find((value) => String(value).trim().length > 0) ?? null;
}

console.log(firstNonEmpty(['', '   ', 'ready']));
