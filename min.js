const svgTools = {

	stringToNum: (inputString) => [...inputString].reduce((acc, char) => (acc + char.charCodeAt(0)) % 46, 0),
	colors: [
  "#E50A7A",
  "#EA0164",
  "#ED004C",
  "#EE092F",
  "#ED1800",
  "#EB2600",
  "#E83300",
  "#E24000",
  "#DB4C00",
  "#D25800",
  "#C76300",
  "#BA6D00",
  "#AC7700",
  "#9B8000",
  "#888800",
  "#719000",
  "#549600",
  "#259C00",
  "#00A000",
  "#00A423",
  "#00A748",
  "#00A863",
  "#00A87B",
  "#00A890",
  "#00A6A5",
  "#00A3B8",
  "#009FC9",
  "#009AD9",
  "#0095E8",
  "#008EF4",
  "#0087FE",
  "#007FFF",
  "#0077FF",
  "#316FFF",
  "#5567FF",
  "#6D5FFF",
  "#8157FF",
  "#9250FB",
  "#A148F1",
  "#AF41E4",
  "#BB3AD6",
  "#C632C6",
  "#D029B5",
  "#D820A2",
  "#E0168F"
],

	createColoredInitialsSVG(str=Input2.text) {
		const color = this.colors[this.stringToNum(str)];
		const backgroundColor = `${color}33`;
		const initials = str.split(' ').map(word => word.charAt(0).toUpperCase()).join('');

		const svg = `
    <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50%" cy="50%" r="40%" fill="${backgroundColor}"  stroke="${color}" stroke-width="1px" />
      <text x="50%" y="50%" text-anchor="middle" dy="0.3em" font-size="${(6 - initials.length)*8 }%" font-weight="bold" fill="${color}"  style="font-family: sans-serif;">
        ${initials}
      </text>
    </svg>
  `;

		return `data:image/svg+xml;base64,${btoa(svg)}`;
	}

}
