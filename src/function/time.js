function time() {
  const dateObj = new Date();
  const hour = dateObj.getHours();
  const min = dateObj.getMinutes();
  const time = hour + ":" + min;
  return time;
}

export default time;
