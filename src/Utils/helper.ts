export const getFormatedDate = (UNIX_timestamp: number): string => {
  var a = new Date(UNIX_timestamp);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = ('000' + a.getHours()).slice(-2);
  var min = ('000' + a.getMinutes()).slice(-2);
  var sec = ('000' + a.getSeconds()).slice(-2);
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
};

export const formattedTimestamp = (timestamp: number): string => {
  const secondsFromStart = timestamp / 1000;
  const minutes = Math.floor(secondsFromStart / 60);
  const seconds = Math.floor(secondsFromStart % 60);
  return `${('000' + minutes).slice(-2)}:${('000' + seconds).slice(-2)}`;
};

export const getMapImage = (gameType: string): string => {

  const SR = "/maps/summoners_rift.webp";
  const HA = "/maps/howling_abyss.webp";

  if (gameType === "ARAM") {
    return HA;
  }

  return SR;
};
