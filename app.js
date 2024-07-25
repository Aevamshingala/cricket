const input = document.querySelectorAll("input");
let wicket = document.querySelector("#wic");
const divwicket = document.querySelector("#wicket");
const wicketrun = document.querySelector("#wicketrun");
const sub = document.querySelector("#submit");
const valueofover = document.querySelector(".u_over");
const valueofplayer = document.querySelector(".u_player");
const overr = document.querySelector("#over");
let curentover = document.querySelector("#curentover");
let curentwicket = document.querySelector("#curentwicket");
const totalover = document.querySelector("#totalover");
let count = document.querySelectorAll(".count");
let showrun = document.querySelector("#showrun");
let refresh = document.querySelector(".refresh");
let conform_wicket = false;
let conform_over = false;
let r = 0;
let sr = 0;
let curover = 0.1;
let f = 0;
let s = 0;
let sf = 0;
let ss = 0;
let initialOver;
let initialPlayers;
let currentplayer;
let clickCount = 0;
const one = document.querySelector("#one");
const showteam1 = document.querySelector("#showteam1");
const zero = document.querySelector("#zero");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const six = document.querySelector("#six");
const noball = document.querySelector("#noball");
const nofour = document.querySelector("#nofour");
const wideball = document.querySelector("#wideball");
const totalfour = document.getElementById("totalfour");
const totalsix = document.getElementById("totalsix");
const second_inning = document.getElementById("second_inning");
const team1 = document.getElementById("team1");
const wining = document.getElementById("wining");
const d_team = document.getElementById("d_team");
const extra = document.querySelectorAll(".extra");
const numberInputs = document.querySelectorAll('input[type="number"]');

function main() {
  sub.addEventListener("click", function (e) {
    e.preventDefault();
    const over = parseInt(valueofover.value);
    const player = parseInt(valueofplayer.value);

    check(player);
    checkover(over);
    if (conform_over && conform_wicket) {
      sub.disabled = true;
      numberInputs.forEach((input) => {
        input.disabled = true;
      });
      sub.style.pointerEvents = "none";
      sub.style.opacity = "0.5";
      shine();
    }
  });
}

main();
bluer();
run();

function bluer() {
  extra.forEach((e) => {
    e.style.pointerEvents = "none";
    e.style.opacity = "0.5";
  });
  count.forEach((e) => {
    e.style.pointerEvents = "none";
    e.style.opacity = "0.5";
  });
}
function shine() {
  extra.forEach((e) => {
    e.style.pointerEvents = "auto";
    e.style.opacity = "1";
  });
  count.forEach((e) => {
    e.style.pointerEvents = "auto";
    e.style.opacity = "1";
  });
}
function check(player) {
  if (player > 11 || player <= 0 || isNaN(player)) {
    alert("please enter correct value");
  } else {
    wickets(player);
    initialPlayers = player;
    wicket.innerHTML = player;
    conform_wicket = true;
  }
}
function checkover(over) {
  if (over > 50 || over <= 0 || isNaN(over)) {
    alert("please enter correct value for overs (1-50)");
  } else {
    initialOver = over;
    overs(over);
    over.innerHTML = over;
    conform_over = true;
  }
}

function wickets(player) {
  currentplayer = player;
  function wic() {
    if (currentplayer != 0) {
      curentwicket.innerHTML = currentplayer;
      currentplayer -= 1;
    }
    wining.innerHTML = "your innings is over";
    bluer();
    inningover();
  }
  divwicket.addEventListener("click", wic);
  wicketrun.addEventListener("click", wic);
}

let equ = (over) => {
  count.forEach((coun) => {
    coun.addEventListener("click", function counter(e) {
      clickCount++;
      let decimalPart = curover - Math.floor(curover); // This gives you the fractional part
      if (decimalPart >= 0.6) {
        curover += 0.4;
      }
      curentover.innerHTML = curover.toFixed(1);
      curover = curover + 0.1;
      let stopover = over * 6;
      if (clickCount >= stopover) {
        coun.removeEventListener("click", counter);
        bluer();
        inningover();
        wining.innerHTML = "your innings is over";
      }
    });
  });
};

function overs(over) {
  totalover.innerHTML = over;
  equ(over);
}

function run() {
  one.addEventListener("click", (e) => {
    r += 1;
    showrun.innerHTML = r;
  });
  two.addEventListener("click", (e) => {
    r += 2;
    showrun.innerHTML = r;
  });

  three.addEventListener("click", (e) => {
    r += 3;
    showrun.innerHTML = r;
  });

  four.addEventListener("click", (e) => {
    r += 4;
    showrun.innerHTML = r;

    f += 1;
    totalfour.innerHTML = f;
  });

  six.addEventListener("click", (e) => {
    r += 6;
    showrun.innerHTML = r;

    s += 1;
    totalsix.innerHTML = s;
  });

  nofour.addEventListener("click", (e) => {
    r += 5;
    showrun.innerHTML = r;
  });

  wideball.addEventListener("click", (e) => {
    r += 1;
    showrun.innerHTML = r;
  });

  noball.addEventListener("click", (e) => {
    r += 1;
    showrun.innerHTML = r;
    curover = curover - 0.1;
    divwicket.style.pointerEvents = "none";
    divwicket.style.opacity = "0.5";
    clickCount--;
  });

  count.forEach((e) => {
    e.addEventListener("click", () => {
      divwicket.style.pointerEvents = "auto";
      divwicket.style.opacity = "1";
    });
  });
}
function secrun() {
  one.addEventListener("click", (e) => {
    sr += 1;
    showrun.innerHTML = sr;
  });
  two.addEventListener("click", (e) => {
    sr += 2;
    showrun.innerHTML = sr;
  });

  three.addEventListener("click", (e) => {
    sr += 3;
    showrun.innerHTML = sr;
  });

  four.addEventListener("click", (e) => {
    sr += 4;
    showrun.innerHTML = sr;

    sf += 1;
    totalfour.innerHTML = sf;
  });

  six.addEventListener("click", (e) => {
    sr += 6;
    showrun.innerHTML = sr;

    ss += 1;
    totalsix.innerHTML = ss;
  });

  nofour.addEventListener("click", (e) => {
    sr += 5;
    showrun.innerHTML = sr;
  });

  wideball.addEventListener("click", (e) => {
    sr += 1;
    showrun.innerHTML = sr;
  });

  noball.addEventListener("click", (e) => {
    sr += 1;
    showrun.innerHTML = sr;
    curover = curover - 0.1;
    divwicket.style.pointerEvents = "none";
    divwicket.style.opacity = "0.5";
    clickCount--;
  });

  count.forEach((e) => {
    e.addEventListener("click", () => {
      divwicket.style.pointerEvents = "auto";
      divwicket.style.opacity = "1";
    });
  });
}
function inningover() {
  second_inning.style.pointerEvents = "auto";
  second_inning.style.opacity = "1";
  showteam1.style.display = "block";
  team1.innerHTML = showrun.innerHTML;
  secrun();
}

second_inning.addEventListener("click", (event) => {
  event.preventDefault();
  second_inning.style.pointerEvents = "none";
  second_inning.style.opacity = "0.5";
  d_team.innerHTML = "Team 2 information";
  wining.innerHTML = "";
  sf = 0;
  ss = 0;
  showrun.innerHTML = sr;
  totalfour.innerHTML = sf;
  totalsix.innerHTML = ss;
  shine();
  secondmain();
});

let secondmain = () => {
  const secover = parseInt(valueofover.value);
  const secplayer = parseInt(valueofplayer.value);
  secwickets(secplayer);
  secovers(secover);
};

function secwickets(secplayer) {
  let currentplayer2 = 0;
  curentwicket.innerHTML = currentplayer2;
  currentplayer2 = secplayer;
  function wic2() {
    if (secplayer <= 0) {
      winorloss();
    } else {
      currentplayer2 -= 1;
      curentwicket.innerHTML = currentplayer2;
    }
  }
  divwicket.addEventListener("click", wic2);
  wicketrun.addEventListener("click", wic2);
}

function secovers(secover) {
  totalover.innerHTML = secover;
  let seccurover = 0;
  let clickCount2 = 0;
  clickCount = 0;

  curentover.innerHTML = seccurover.toFixed(1);
  count.forEach((coun2) => {
    coun2.addEventListener("click", function counter(e) {
      clickCount2++;
      let decimalPart = seccurover - Math.floor(seccurover);
      if (decimalPart >= 0.6) {
        seccurover += 0.4;
      }
      seccurover = seccurover + 0.1;
      curentover.innerHTML = seccurover.toFixed(1);
      let stopover2 = secover * 6;
      const a1 = team1.innerHTML;
      if (a1 < sr) {
        wining.innerHTML = "Team two is win";
        refresh.innerHTML = "please refresh the page to start a new game";
        bluer();
      }
      if (clickCount2 >= stopover2) {
        coun2.removeEventListener("click", counter);
        bluer();
        winorloss();
      }
    });
  });
}

function winorloss() {
  const a = team1.innerHTML;
  if (a > sr) {
    wining.innerHTML = "Team one is win";
  } else {
    wining.innerHTML = "Team two is win";
  }
  if (a == sr) {
    wining.innerHTML = "super over is happen";
  }
  refresh.innerHTML = "please refresh the page to start a new game";
}
