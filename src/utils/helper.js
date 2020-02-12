export const dateParse = (date) => {

    const presentDate = new Date();
    const timeStamp = new Date(date);
    const secondsPast = (presentDate.getTime() - timeStamp.getTime()) / 1000;

    if (secondsPast < 60) {
        return parseInt(secondsPast) + 's';
	}
	
	if (secondsPast < 3600) {
        return parseInt(secondsPast / 60) + 'm';
    }
	
	if (secondsPast <= 86400) {
        return parseInt(secondsPast / 3600) + 'h';
    }
	
	if (secondsPast > 86400) {
        const day = timeStamp.getDate();
      	const month = timeStamp.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ", "");
        const year = timeStamp.getFullYear() == presentDate.getFullYear() ? "" : " " + timeStamp.getFullYear();
		return `${day} ${month},${year}`;
    }
}