// Live option properties
export const LIVE_OPTION_VALUE: string = "live";
export const LIVE_TIME_VALUE: string = "19:59";
export const LIVE_TIME_FREQUENCY: number = 60000;
export const PURGE_FETCH_FREQUENCY: number = 60000;
export const LIVE_DATA_FETCH_FREQUENCY_LSC: number = 300000;

// Time zone constants
export const DATA_FORMAT: string = "YYYY-MM-DD";

export const CST_TIMEZONE : string = "America/Chicago"

export const LocationTimeZone: any = {
	1: "America/Chicago",     // Aberdeen
	2: "America/New_York",    // Cambridge
	3: "America/New_York",    // Charlotte
	4: "America/Los_Angeles" , // Cucamonga
	dallas: "America/Chicago",
	6: "America/Chicago",    // Fayetteville
	7: "America/New_York",    // Killingly
	8: "America/Chicago",     // Rosenberg
	9: "America/Chicago"      // Topeka
};

export const TIMEZONE_OFFSET : any = {
	1: -1,     // Aberdeen
	2: -1,    // Cambridge
	3: -1,    // Charlotte
	4: 2 ,    // Cucamonga
	5:0,       //dallas
	dallas: 0, //dallas
	6: 0,     // Fayetteville
	7: -1,    // Killingly
	8: 0,     // Rosenberg
	9: 0      // Topeka

}

export const PAGE_NAME = {
	TRIP_PLAN:"TRIP PLAN",
	SHIPPING:"SHIPPING",
	HOME:"HOME",
	PICKING:"PICKING",
	DISPATCHES:"DISPATCHES",
	DISPATCHES_GRAPHICAL:"DISPATCHES GRAPH",
	DISPATCHES_TABULAR:"DISPATCHES TABLE",
	INBOUND:"LSC",
	USAGE_ANALYTICS: "USAGE_ANALYTICS"
}

export const COLOR_CODES = {
	RED: "#ff5252",
	GREEN: "#36bf60",
	GREY: "#707070",
	PINK: "#FA7EFF",
	VIOLET: "#8C88FF",
	YELLOW: "#FFCA65",
	SKY_BLUE: "#7BE0FF",
  };
