function getDate() {
  const time = new Date();
  const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = time.getDate();
  let month = months[time.getMonth()];
  return date + " " + month;
}

export default getDate;
