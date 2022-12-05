const parseArgs = () => {
  const rssPropFlag = '--';
  const rssArgStr = process.argv.reduce((acc, arg, i, args) => {
    if (arg.startsWith(rssPropFlag)) acc += `${arg.slice(2)} is ${args[i + 1]},`;
    return acc;
  }, '');

  console.log(rssArgStr);
};

parseArgs();