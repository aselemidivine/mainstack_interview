export const HOST_URL = () => {
    if (process.env.SERVER_URL === "production") {
        return "http://localhost:3005/api"; // Development server URL
    } else {
        return "https://fe-task-api.mainstack.io"; // Production server URL
    }
};

export const truncateString = (str, num) => {
  if (str?.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};

export const getCookie = (cname) => {
	let name = cname + "=";
	if (typeof document !== "undefined") {
		let ca = document.cookie.split(";");
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) === " ") {
				c = c.substring(1);
			}
			if (Number(c.indexOf(name)) === 0) {
				return c.substring(name.length, c.length);
			}
		}
	}
	return null;
};

export const removeCookie = (cname) => {
	const d = new Date("12-02-2011"); // backdate
	document.cookie = cname + "=;" + HOST_URL + d;
};
