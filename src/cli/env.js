const parseEnv = () => {
  const rssVarFlag = 'RSS_';
  const rssVarStr = Object.entries(process.env)
    .reduce((acc, [key, value]) => {
      if (key.startsWith(rssVarFlag)) acc += `${key}=${value};`;
      return acc;
    }, '');

  console.log(rssVarStr);
};

parseEnv();