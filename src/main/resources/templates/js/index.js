
var points = 0;
var indexOfCurrentVideo = 0;
var roundCounter = 1;

var correctGuesses = 0;
var nearlyCorrectGuesses = 0;
var wrongGuesses = 0;

var videoLinks = [
  [
    "https://drive.google.com/file/d/1Pywq_TltwkrHMojdazCCZbviIpfFPtCs/view?usp=sharing",
    "6",
    "sometime",
  ],
];

/*
iron 1 | bronze 2 | silber 3 | gold 4 | plat 5 | dia 6 | ascendant 7 | immortal 8 | radiant 9
*/

var watchedVids = [];

function onLoad() {
  //document.title = "GuessTheRank " + fullName(sGame);
  document.getElementById("headerTitle").innerText =
    "GuessTheRank " + fullName(sGame);
  if (location.protocol !== "https:") {
    location.protocol = "https:";
  }
  prepareNextVideo(true);
  loadButtons();
}

function startGame() {
  toggleVisibility("backBtn", true);
  toggleVisibility("gameContent", true);
  toggleVisibility("preGame", false);
  toggleVisibility("submitClipBtn", false);
  toggleVisibility("checkStatsBtn", false);
  toggleVisibility("blogBtn", false);
  document
    .getElementById("ytvideoif")
    .setAttribute(
      "src",
      document.getElementById("ytvideoif").getAttribute("src")
    );
}

function sendToForm() {
  window
    .open("https://guesstherank.org/actions/filldata.php", "_blank")
    .focus();
}

function rankClicked(whichRank = "") {
  sendRating(videoLinks[indexOfCurrentVideo][3], parseInt(whichRank));
  if (roundCounter <= Math.min(videoLinks.length + 1, 11)) {
    points += calcPoints(
      whichRank,
      parseInt(videoLinks[indexOfCurrentVideo][1]),
      true
    );

    document.getElementById("statDisplay").textContent =
      "Points: " +
      points.toString() +
      " Round: " +
      roundCounter.toString() +
      " / 10";
  }

  document.getElementById("resultText").innerHTML =
    "Your Guess: " +
    numberToRank(whichRank) +
    "<br>" +
    "Actual Rank: " +
    numberToRank(parseInt(videoLinks[indexOfCurrentVideo][1])) +
    "<br>" +
    "Average Rating: " +
    numberToRank(Math.round(parseInt(videoLinks[indexOfCurrentVideo][4]))) +
    "<br>+" +
    calcPoints(whichRank, parseInt(videoLinks[indexOfCurrentVideo][1]), false) +
    " Points";

  toggleVisibility("resultpopup", true);

  if (roundCounter <= Math.min(videoLinks.length, 10)) {
    watchedVids.push(indexOfCurrentVideo);

    prepareNextVideo(true);
  } else {
    toggleVisibility("ytvideo", false);
    toggleVisibility("buttons", false);
    toggleVisibility("submitClipBtn", true);
    toggleVisibility("skipVideoBtn", false);
    toggleVisibility("checkStatsBtn", true);
    document.getElementById("submitClipBtn").style.marginTop = "5%";

    document.getElementById("finalResults").innerText =
      "Correct guesses: " +
      correctGuesses +
      "\n" +
      "One-off guesses: " +
      nearlyCorrectGuesses +
      "\n" +
      "Wrong guesses: " +
      wrongGuesses;

    toggleVisibility("finalResults", true);
    document.getElementById("ytvideoif").setAttribute("src", "");
    document.getElementById("statDisplay").innerText =
      "Points: " +
      points.toString() +
      "\n" +
      "Rounds played: " +
      Math.min(roundCounter, 10).toString();
    toggleVisibility("restartBtn", true);
  }
}

function prepareNextVideo(nextRound) {
  if (nextRound) {
    roundCounter++;
  } else {
    skipVideo(videoLinks[indexOfCurrentVideo][3]);
  }

  //var nextVideoIndex = Math.floor(Math.random() * videoLinks.length);
  var nextVideoIndex = Math.floor(Math.random() * videoLinks.length);

  while (watchedVids.includes(nextVideoIndex)) {
    nextVideoIndex = Math.floor(Math.random() * videoLinks.length);
  }
  indexOfCurrentVideo = nextVideoIndex;

  document.getElementById("ytvideoif").setAttribute("src", "");
  getDownloadLink(videoLinks[indexOfCurrentVideo][0]);
}

function calcPoints(guessedRank, actualRank, addToGuessCount) {
  if (guessedRank == actualRank) {
    if (addToGuessCount) {
      correctGuesses++;
    }
    return 2;
  }

  if (guessedRank + 1 == actualRank || guessedRank - 1 == actualRank) {
    if (addToGuessCount) {
      nearlyCorrectGuesses++;
    }
    return 1;
  }
  if (addToGuessCount) {
    wrongGuesses++;
  }
  return 0;
}

function getDownloadLink(originalLink) {
  var link = "";

  if (originalLink.includes("drive.google")) {
    link =
      "https://drive.google.com/uc?export=download&id=" +
      originalLink.substring(32, 65);
    toggleVisibility("ytvideo", false);
  }

  if (originalLink.includes("youtu")) {
    link =
      "https://www.youtube.com/embed/" +
      originalLink.substring(originalLink.length - 11, originalLink.length) +
      "?rel=0&showinfo=0";
    document.getElementById("ytvideoif").setAttribute("src", link);
    toggleVisibility("ytvideo", true);
  }
}

function toggleVisibility(elementName, visible) {
  if (visible) {
    document.getElementById(elementName).style.display = "block";
  } else {
    document.getElementById(elementName).style.display = "none";
  }
}

function closeResult() {
  toggleVisibility("resultpopup", false);
}

function reloadWebsite() {
  location.reload();
}

function numberToRank(numberOfRank) {
  if (sGame == "valorant") {
    var valoRanks = [
      "Iron",
      "Bronze",
      "Silver",
      "Gold",
      "Platinum",
      "Diamond",
      "Ascendant",
      "Immortal",
      "Radiant",
    ];
    return valoRanks[numberOfRank - 1];
  } else if (sGame == "rocketleague") {
    var rlRanks = [
      "Bronze",
      "Silver",
      "Gold",
      "Platinum",
      "Diamond",
      "Champion",
      "Grand Champion",
      "Supersonic Legend",
    ];
    return rlRanks[numberOfRank - 1];
  } else if (sGame == "leagueoflegends") {
    var lolRanks = [
      "Iron",
      "Bronze",
      "Silver",
      "Gold",
      "Platinum",
      "Diamond",
      "Master",
      "GrandMaster",
      "Challenger",
    ];
    return lolRanks[numberOfRank - 1];
  } else if (sGame == "apexlegends") {
    var apexRanks = [
      "Bronze",
      "Silver",
      "Gold",
      "Platinum",
      "Diamond",
      "Master",
      "Apex Predator",
    ];
    return apexRanks[numberOfRank - 1];
  }
}

function loadButtons() {
  if (sGame == "valorant") {
    createGame(9, "valo");
  } else if (sGame == "rocketleague") {
    createGame(8, "rl");
  } else if (sGame == "leagueoflegends") {
    createGame(9, "lol");
  } else if (sGame == "apexlegends") {
    createGame(7, "apex");
  }
}

function createGame(rankCount, shortName) {
  for (let i = 0; i < rankCount; i++) {
    createButton(
      i + 1,
      "images/" + shortName + "_" + (i + 1) + ".webp",
      "rankButton"
    );
  }
}

function createButton(count, src, alt) {
  let btn = document.createElement("img");
  btn.src = src;
  btn.alt = alt;
  btn.setAttribute("onClick", "rankClicked(" + count + ")");
  btn.className = "buttonClass";
  document.getElementById("buttons").appendChild(btn);
}

function fullName(name) {
  if (name == "rocketleague") {
    return "RocketLeague";
  }
  if (name == "valorant") {
    return "Valorant";
  }
  if (name == "leagueoflegends") {
    return "LeagueOfLegends";
  }
  if (name == "apexlegends") {
    return "Apex Legends";
  }
  return "";
}
