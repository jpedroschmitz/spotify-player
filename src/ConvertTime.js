const converToHumanTime = (duration) => {
  const m = parseInt((duration / (1000 * 60)) % 60, 10);
  let s = parseInt((duration / 1000) % 60, 10);
  s = s < 10 ? `0${s}` : s;
  return `${m}:${s}`;
};

export default converToHumanTime;
