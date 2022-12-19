const zodic = document.getElementById("zodic");
const body = document.body;

const changeColor = (color) => {
  if (color == 1) {
    body.style.background = "linear-gradient(to top, #33ccff 0%, #99ffcc 100%)";
  } else {
    body.style.background = color;
  }
};

const getColor = () => {
  switch (zodic.value) {
    case "Aries":
      changeColor("cadetblue");
      break;

    case "Taurus":
      changeColor("coral");
      break;

    case "Gemini":
      changeColor("gold");
      break;

    case "Cancer":
      changeColor("orange");
      break;

    case "Leo":
      changeColor("turquoise");
      break;

    case "Virgo":
      changeColor("red");
      break;

    case "Libra":
      changeColor("yellow");
      break;

    case "Scorpio":
      changeColor("pink");
      break;

    case "Sagittarius":
      changeColor("blueviolet");
      break;

    case "Capricorn":
      changeColor("darkgoldenrod");
      break;

    case "Aquarius":
      changeColor("green");
      break;

    case "Pisces":
      changeColor("silver");
      break;

    default:
      changeColor(1);
      break;
  }
};
