var names = ['nick', 'jen', 'jacob'];

names.forEach(function (name) {
  console.log('forEach', name)
});

names.forEach((name) => {
  console.log('arrowfunc', name)
});

names.forEach((name) => console.log(name));
