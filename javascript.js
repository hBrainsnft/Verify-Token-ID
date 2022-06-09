var input = document.getElementById("myInput");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    document.getElementById("inputButton").click();
  }
});

//mobile hover
(function (l) {
  var i,
    s = { touchend: function () {} };
  for (i in s) l.addEventListener(i, s);
})(document); // sticky hover fix in iOS
//mobile hover

var inputButton = document.getElementById("inputButton");

//make ui green
function addGreen() {
  document.body.classList.remove("red");
  document.body.classList.add("green");

  document.getElementById("inputButton").classList.remove("red");
  document.getElementById("inputButton").classList.add("green");

  document.getElementById("myInput").classList.remove("red");
  document.getElementById("myInput").classList.add("green");

  document.getElementById("about").classList.remove("red");
  document.getElementById("about").classList.add("green");

  document.getElementById("x").classList.remove("add");
  document.getElementById("check").classList.remove("none");
  document.getElementById("check").classList.add("check");
}

//make ui red
function addRed() {
  document.body.classList.remove("green");
  document.body.classList.add("red");

  document.getElementById("inputButton").classList.remove("green");
  document.getElementById("inputButton").classList.add("red");

  document.getElementById("myInput").classList.remove("green");
  document.getElementById("myInput").classList.add("red");

  document.getElementById("check").classList.add("none");
  document.getElementById("x").classList.add("add");
}

//token info
function about(des) {
  document.getElementById("about").innerHTML =
    "Authentic Token ID: <br><br>" + des;
}

//clear inner htmll
function clear() {
  document.getElementById("about").innerHTML = "Unknown Token ID";
}

//toggle popupbox

function popupOn() {
  var element = document.getElementById("popupWrapper");
  element.classList.remove("popupVis");
}

function popupOff() {
  var element = document.getElementById("popupWrapper");
  element.classList.add("popupVis");
}

function getInputValue() {
  // Selecting the input element and get its value
  var inputVal = document.getElementById("myInput").value;

  // Displaying the value
  if (inputVal == "") {
  }

  //hbrains
  else if (inputVal == "0.0.653544") {
    about("Early Brain");
    addGreen();
  } else if (inputVal == "0.0.925294") {
    about("ℏBrains");
    addGreen();
  } else if (inputVal == "0.0.954624") {
    about("ℏBrains Whitelist Token");
    addGreen();
  }

  //hbarmory chalk 1
  else if (
    inputVal == "0.0.575410" ||
    inputVal == "0.0.575413" ||
    inputVal == "0.0.575415" ||
    inputVal == "0.0.575417" ||
    inputVal == "0.0.575419" ||
    inputVal == "0.0.575421" ||
    inputVal == "0.0.575432" ||
    inputVal == "0.0.575433" ||
    inputVal == "0.0.575435" ||
    inputVal == "0.0.575439" ||
    inputVal == "0.0.575440" ||
    inputVal == "0.0.575441" ||
    inputVal == "0.0.575448" ||
    inputVal == "0.0.575453" ||
    inputVal == "0.0.575455" ||
    inputVal == "0.0.575457" ||
    inputVal == "0.0.575472" ||
    inputVal == "0.0.575475" ||
    inputVal == "0.0.575477" ||
    inputVal == "0.0.575481" ||
    inputVal == "0.0.575482" ||
    inputVal == "0.0.575485" ||
    inputVal == "0.0.575486" ||
    inputVal == "0.0.575489" ||
    inputVal == "0.0.575490" ||
    inputVal == "0.0.575491" ||
    inputVal == "0.0.575494" ||
    inputVal == "0.0.575495" ||
    inputVal == "0.0.575500" ||
    inputVal == "0.0.575503" ||
    inputVal == "0.0.575506" ||
    inputVal == "0.0.577027" ||
    inputVal == "0.0.577032" ||
    inputVal == "0.0.577033" ||
    inputVal == "0.0.577034" ||
    inputVal == "0.0.577036" ||
    inputVal == "0.0.577039" ||
    inputVal == "0.0.577046" ||
    inputVal == "0.0.577047" ||
    inputVal == "0.0.577050" ||
    inputVal == "0.0.577051" ||
    inputVal == "0.0.577053" ||
    inputVal == "0.0.577054" ||
    inputVal == "0.0.577055" ||
    inputVal == "0.0.577057" ||
    inputVal == "0.0.577058" ||
    inputVal == "0.0.577059" ||
    inputVal == "0.0.577060" ||
    inputVal == "0.0.577063" ||
    inputVal == "0.0.577064" ||
    inputVal == "0.0.577065" ||
    inputVal == "0.0.577067" ||
    inputVal == "0.0.577068" ||
    inputVal == "0.0.577071" ||
    inputVal == "0.0.577342" ||
    inputVal == "0.0.577074" ||
    inputVal == "0.0.577075" ||
    inputVal == "0.0.577079" ||
    inputVal == "0.0.577080" ||
    inputVal == "0.0.577085" ||
    inputVal == "0.0.577086" ||
    inputVal == "0.0.577088" ||
    inputVal == "0.0.577172" ||
    inputVal == "0.0.577202" ||
    inputVal == "0.0.577204" ||
    inputVal == "0.0.577206" ||
    inputVal == "0.0.577207" ||
    inputVal == "0.0.577209" ||
    inputVal == "0.0.577214" ||
    inputVal == "0.0.577216" ||
    inputVal == "0.0.577217" ||
    inputVal == "0.0.577220" ||
    inputVal == "0.0.577232" ||
    inputVal == "0.0.577236" ||
    inputVal == "0.0.577238" ||
    inputVal == "0.0.577241" ||
    inputVal == "0.0.577243" ||
    inputVal == "0.0.577248" ||
    inputVal == "0.0.577251" ||
    inputVal == "0.0.577255" ||
    inputVal == "0.0.577257" ||
    inputVal == "0.0.577259" ||
    inputVal == "0.0.577260" ||
    inputVal == "0.0.577263" ||
    inputVal == "0.0.577264" ||
    inputVal == "0.0.577267" ||
    inputVal == "0.0.577270" ||
    inputVal == "0.0.577272" ||
    inputVal == "0.0.577273" ||
    inputVal == "0.0.577282" ||
    inputVal == "0.0.577284" ||
    inputVal == "0.0.577287" ||
    inputVal == "0.0.577289"
  ) {
    about("Hbarmory Chalk 1");
    addGreen();
  } else if (
    inputVal == "0.0.589476" ||
    inputVal == "0.0.589889" ||
    inputVal == "0.0.589489" ||
    inputVal == "0.0.589491" ||
    inputVal == "0.0.589496" ||
    inputVal == "0.0.589498" ||
    inputVal == "0.0.589500" ||
    inputVal == "0.0.589503" ||
    inputVal == "0.0.589504" ||
    inputVal == "0.0.589506" ||
    inputVal == "0.0.589509" ||
    inputVal == "0.0.589510" ||
    inputVal == "0.0.589511" ||
    inputVal == "0.0.589512" ||
    inputVal == "0.0.589513" ||
    inputVal == "0.0.589515" ||
    inputVal == "0.0.589518" ||
    inputVal == "0.0.589519" ||
    inputVal == "0.0.589522" ||
    inputVal == "0.0.589523" ||
    inputVal == "0.0.589524" ||
    inputVal == "0.0.589525" ||
    inputVal == "0.0.589528" ||
    inputVal == "0.0.589530" ||
    inputVal == "0.0.589531" ||
    inputVal == "0.0.589895" ||
    inputVal == "0.0.589533" ||
    inputVal == "0.0.589898" ||
    inputVal == "0.0.589539" ||
    inputVal == "0.0.589540" ||
    inputVal == "0.0.589541" ||
    inputVal == "0.0.589542" ||
    inputVal == "0.0.589543" ||
    inputVal == "0.0.589544" ||
    inputVal == "0.0.589545" ||
    inputVal == "0.0.589547" ||
    inputVal == "0.0.589548" ||
    inputVal == "0.0.589551" ||
    inputVal == "0.0.589552" ||
    inputVal == "0.0.589553" ||
    inputVal == "0.0.589555" ||
    inputVal == "0.0.589557" ||
    inputVal == "0.0.589558" ||
    inputVal == "0.0.589559" ||
    inputVal == "0.0.589560" ||
    inputVal == "0.0.589562" ||
    inputVal == "0.0.589564" ||
    inputVal == "0.0.589566" ||
    inputVal == "0.0.589567" ||
    inputVal == "0.0.589568" ||
    inputVal == "0.0.589569" ||
    inputVal == "0.0.589571" ||
    inputVal == "0.0.589576" ||
    inputVal == "0.0.589577" ||
    inputVal == "0.0.589578" ||
    inputVal == "0.0.589579" ||
    inputVal == "0.0.589580" ||
    inputVal == "0.0.589581" ||
    inputVal == "0.0.589582" ||
    inputVal == "0.0.589583" ||
    inputVal == "0.0.589585" ||
    inputVal == "0.0.589587" ||
    inputVal == "0.0.589588" ||
    inputVal == "0.0.589589" ||
    inputVal == "0.0.589899" ||
    inputVal == "0.0.589591" ||
    inputVal == "0.0.589593" ||
    inputVal == "0.0.589595" ||
    inputVal == "0.0.589596" ||
    inputVal == "0.0.589597" ||
    inputVal == "0.0.589598" ||
    inputVal == "0.0.589599" ||
    inputVal == "0.0.589601" ||
    inputVal == "0.0.589603" ||
    inputVal == "0.0.589605" ||
    inputVal == "0.0.589606" ||
    inputVal == "0.0.589608" ||
    inputVal == "0.0.589609" ||
    inputVal == "0.0.589610" ||
    inputVal == "0.0.589612" ||
    inputVal == "0.0.589613" ||
    inputVal == "0.0.589614" ||
    inputVal == "0.0.589617" ||
    inputVal == "0.0.589618" ||
    inputVal == "0.0.589619" ||
    inputVal == "0.0.589620" ||
    inputVal == "0.0.589621" ||
    inputVal == "0.0.589622" ||
    inputVal == "0.0.589624" ||
    inputVal == "0.0.589626" ||
    inputVal == "0.0.589628" ||
    inputVal == "0.0.589630"
  ) {
    about("Hbarmory Chalk 2");
    addGreen();
  } else if (
    inputVal == "0.0.614063" ||
    inputVal == "0.0.614064" ||
    inputVal == "0.0.614065" ||
    inputVal == "0.0.614067" ||
    inputVal == "0.0.614069" ||
    inputVal == "0.0.614070" ||
    inputVal == "0.0.614071" ||
    inputVal == "0.0.614073" ||
    inputVal == "0.0.614075" ||
    inputVal == "0.0.614076" ||
    inputVal == "0.0.614077" ||
    inputVal == "0.0.614078" ||
    inputVal == "0.0.614080" ||
    inputVal == "0.0.614081" ||
    inputVal == "0.0.614083" ||
    inputVal == "0.0.614086" ||
    inputVal == "0.0.614087" ||
    inputVal == "0.0.614088" ||
    inputVal == "0.0.614090" ||
    inputVal == "0.0.614092" ||
    inputVal == "0.0.614094" ||
    inputVal == "0.0.614095" ||
    inputVal == "0.0.614096" ||
    inputVal == "0.0.614097" ||
    inputVal == "0.0.614098" ||
    inputVal == "0.0.614099" ||
    inputVal == "0.0.614102" ||
    inputVal == "0.0.614103" ||
    inputVal == "0.0.614104" ||
    inputVal == "0.0.614106" ||
    inputVal == "0.0.614107" ||
    inputVal == "0.0.614109" ||
    inputVal == "0.0.614111" ||
    inputVal == "0.0.614112" ||
    inputVal == "0.0.614113" ||
    inputVal == "0.0.614114" ||
    inputVal == "0.0.614115" ||
    inputVal == "0.0.614116" ||
    inputVal == "0.0.614117" ||
    inputVal == "0.0.614119" ||
    inputVal == "0.0.614120" ||
    inputVal == "0.0.614121" ||
    inputVal == "0.0.614123" ||
    inputVal == "0.0.614124" ||
    inputVal == "0.0.614126" ||
    inputVal == "0.0.614127" ||
    inputVal == "0.0.614128" ||
    inputVal == "0.0.614130" ||
    inputVal == "0.0.614131" ||
    inputVal == "0.0.614133" ||
    inputVal == "0.0.614134" ||
    inputVal == "0.0.614135" ||
    inputVal == "0.0.614136" ||
    inputVal == "0.0.614138" ||
    inputVal == "0.0.614139" ||
    inputVal == "0.0.614140" ||
    inputVal == "0.0.614141" ||
    inputVal == "0.0.614143" ||
    inputVal == "0.0.614144" ||
    inputVal == "0.0.614145" ||
    inputVal == "0.0.614146" ||
    inputVal == "0.0.614147" ||
    inputVal == "0.0.614148" ||
    inputVal == "0.0.614149" ||
    inputVal == "0.0.614150" ||
    inputVal == "0.0.614152" ||
    inputVal == "0.0.614153" ||
    inputVal == "0.0.614154" ||
    inputVal == "0.0.614155" ||
    inputVal == "0.0.614156" ||
    inputVal == "0.0.614158" ||
    inputVal == "0.0.614160" ||
    inputVal == "0.0.614163" ||
    inputVal == "0.0.614165" ||
    inputVal == "0.0.614166" ||
    inputVal == "0.0.614167" ||
    inputVal == "0.0.614169" ||
    inputVal == "0.0.614170" ||
    inputVal == "0.0.614171" ||
    inputVal == "0.0.614173" ||
    inputVal == "0.0.614174" ||
    inputVal == "0.0.614175" ||
    inputVal == "0.0.614176" ||
    inputVal == "0.0.614178" ||
    inputVal == "0.0.614179" ||
    inputVal == "0.0.614180" ||
    inputVal == "0.0.614182" ||
    inputVal == "0.0.614183" ||
    inputVal == "0.0.614185" ||
    inputVal == "0.0.614186" ||
    inputVal == "0.0.614188" ||
    inputVal == "0.0.614189" ||
    inputVal == "0.0.614190"
  ) {
    about("Hbarmory Chalk 3");
    addGreen();
  } else if (inputVal == "0.0.746240") {
    about("Hbarmory Reapers");
    addGreen();
  } else if (
    inputVal == "0.0.597585" ||
    inputVal == "0.0.587445" ||
    inputVal == "0.0.591424" ||
    inputVal == "0.0.510563"
  ) {
    about("Hbarmory Standard");
    addGreen();
  } else if (
    inputVal == "0.0.585874" ||
    inputVal == "0.0.585879" ||
    inputVal == "0.0.585882" ||
    inputVal == "0.0.585883" ||
    inputVal == "0.0.585885" ||
    inputVal == "0.0.585887" ||
    inputVal == "0.0.585889" ||
    inputVal == "0.0.585890" ||
    inputVal == "0.0.585894" ||
    inputVal == "0.0.585899" ||
    inputVal == "0.0.585904" ||
    inputVal == "0.0.585906" ||
    inputVal == "0.0.585909" ||
    inputVal == "0.0.585911" ||
    inputVal == "0.0.585912" ||
    inputVal == "0.0.585913" ||
    inputVal == "0.0.585916" ||
    inputVal == "0.0.585917" ||
    inputVal == "0.0.585919" ||
    inputVal == "0.0.585923" ||
    inputVal == "0.0.585927" ||
    inputVal == "0.0.585929" ||
    inputVal == "0.0.585931" ||
    inputVal == "0.0.585932" ||
    inputVal == "0.0.585934" ||
    inputVal == "0.0.585936" ||
    inputVal == "0.0.585937" ||
    inputVal == "0.0.585938" ||
    inputVal == "0.0.585942" ||
    inputVal == "0.0.585944"
  ) {
    about("Hbarmory Scanner");
    addGreen();
  } else if (
    inputVal == "0.0.590603" ||
    inputVal == "0.0.590604" ||
    inputVal == "0.0.590609" ||
    inputVal == "0.0.590607" ||
    inputVal == "0.0.590610" ||
    inputVal == "0.0.590612" ||
    inputVal == "0.0.590614" ||
    inputVal == "0.0.590616" ||
    inputVal == "0.0.590618" ||
    inputVal == "0.0.590620" ||
    inputVal == "0.0.590621" ||
    inputVal == "0.0.590622" ||
    inputVal == "0.0.590623" ||
    inputVal == "0.0.590625" ||
    inputVal == "0.0.590654" ||
    inputVal == "0.0.590627" ||
    inputVal == "0.0.590628" ||
    inputVal == "0.0.590630" ||
    inputVal == "0.0.590632" ||
    inputVal == "0.0.590633" ||
    inputVal == "0.0.590634" ||
    inputVal == "0.0.590635" ||
    inputVal == "0.0.590638" ||
    inputVal == "0.0.590639" ||
    inputVal == "0.0.590640" ||
    inputVal == "0.0.590643" ||
    inputVal == "0.0.590644" ||
    inputVal == "0.0.590646" ||
    inputVal == "0.0.590648" ||
    inputVal == "0.0.590650"
  ) {
    about("Hbarmory Ninja");
    addGreen();
  } else if (
    inputVal == "0.0.614272" ||
    inputVal == "0.0.614273" ||
    inputVal == "0.0.614274" ||
    inputVal == "0.0.614275" ||
    inputVal == "0.0.614278" ||
    inputVal == "0.0.614280" ||
    inputVal == "0.0.614282" ||
    inputVal == "0.0.614284" ||
    inputVal == "0.0.614286" ||
    inputVal == "0.0.614289" ||
    inputVal == "0.0.614291" ||
    inputVal == "0.0.614292" ||
    inputVal == "0.0.614296" ||
    inputVal == "0.0.614298" ||
    inputVal == "0.0.614300" ||
    inputVal == "0.0.614302" ||
    inputVal == "0.0.614303" ||
    inputVal == "0.0.614304" ||
    inputVal == "0.0.614307" ||
    inputVal == "0.0.614309"
  ) {
    about("Hbarmory ABFT");
    addGreen();
  } else if (
    inputVal == "0.0.510414" ||
    inputVal == "0.0.510430" ||
    inputVal == "0.0.510442" ||
    inputVal == "0.0.510449" ||
    inputVal == "0.0.510457" ||
    inputVal == "0.0.510482" ||
    inputVal == "0.0.510487" ||
    inputVal == "0.0.510500" ||
    inputVal == "0.0.510504" ||
    inputVal == "0.0.510508" ||
    inputVal == "0.0.510515" ||
    inputVal == "0.0.510520" ||
    inputVal == "0.0.510522" ||
    inputVal == "0.0.510526" ||
    inputVal == "0.0.510538" ||
    inputVal == "0.0.510542" ||
    inputVal == "0.0.510547" ||
    inputVal == "0.0.510551" ||
    inputVal == "0.0.510554" ||
    inputVal == "0.0.510556" ||
    inputVal == "0.0.585949" ||
    inputVal == "0.0.590784" ||
    inputVal == "0.0.615426" ||
    inputVal == "0.0.542438" ||
    inputVal == "0.0.540775" ||
    inputVal == "0.0.538921" ||
    inputVal == "0.0.531740" ||
    inputVal == "0.0.611727" ||
    inputVal == "0.0.725438"
  ) {
    about("Hbarmory Gold");
    addGreen();
  } else if (
    inputVal == "0.0.607690" ||
    inputVal == "0.0.607692" ||
    inputVal == "0.0.607688" ||
    inputVal == "0.0.607695" ||
    inputVal == "0.0.607698" ||
    inputVal == "0.0.607691" ||
    inputVal == "0.0.607697"
  ) {
    about("Hbarmory Wen lHambo");
    addGreen();
  } else if (inputVal == "0.0.695907") {
    about("Hbarmory NFT Factory");
    addGreen();
  } else if (
    inputVal == "0.0.623960" ||
    inputVal == "0.0.623961" ||
    inputVal == "0.0.623943" ||
    inputVal == "0.0.623947" ||
    inputVal == "0.0.623957" ||
    inputVal == "0.0.623952"
  ) {
    about("Hbarmory Christmas");
    addGreen();
  } else if (
    inputVal == "0.0.516202" ||
    inputVal == "0.0.516204" ||
    inputVal == "0.0.515348" ||
    inputVal == "0.0.515345" ||
    inputVal == "0.0.512648" ||
    inputVal == "0.0.512644" ||
    inputVal == "0.0.511540" ||
    inputVal == "0.0.511532"
  ) {
    about("Hbarmory Halloween");
    addGreen();
  } else if (inputVal == "0.0.567461" || inputVal == "0.0.567479") {
    about("Hbarmory x Hbar to the Moon Collab");
    addGreen();
  } else if (inputVal == "0.0.592438" || inputVal == "0.0.592412") {
    about("Hbarmory x Anftimals Collab");
    addGreen();
  } else if (
    inputVal == "0.0.604347" ||
    inputVal == "0.0.604353" ||
    inputVal == "0.0.604413" ||
    inputVal == "0.0.604370" ||
    inputVal == "0.0.604375" ||
    inputVal == "0.0.604380" ||
    inputVal == "0.0.604382" ||
    inputVal == "0.0.604383" ||
    inputVal == "0.0.604385" ||
    inputVal == "0.0.604390" ||
    inputVal == "0.0.604392" ||
    inputVal == "0.0.604420" ||
    inputVal == "0.0.604415" ||
    inputVal == "0.0.604421" ||
    inputVal == "0.0.605874" ||
    inputVal == "0.0.604433" ||
    inputVal == "0.0.604435" ||
    inputVal == "0.0.604437" ||
    inputVal == "0.0.604438" ||
    inputVal == "0.0.604440" ||
    inputVal == "0.0.604442" ||
    inputVal == "0.0.604443" ||
    inputVal == "0.0.604446" ||
    inputVal == "0.0.604448" ||
    inputVal == "0.0.599864" ||
    inputVal == "0.0.599867" ||
    inputVal == "0.0.599873" ||
    inputVal == "0.0.599881" ||
    inputVal == "0.0.599885" ||
    inputVal == "0.0.599886" ||
    inputVal == "0.0.599889" ||
    inputVal == "0.0.599890" ||
    inputVal == "0.0.599893" ||
    inputVal == "0.0.599897" ||
    inputVal == "0.0.599902" ||
    inputVal == "0.0.599908" ||
    inputVal == "0.0.599912" ||
    inputVal == "0.0.599915" ||
    inputVal == "0.0.599939" ||
    inputVal == "0.0.599942" ||
    inputVal == "0.0.599953" ||
    inputVal == "0.0.599955" ||
    inputVal == "0.0.599956" ||
    inputVal == "0.0.599957" ||
    inputVal == "0.0.599960" ||
    inputVal == "0.0.599962" ||
    inputVal == "0.0.599964" ||
    inputVal == "0.0.599966" ||
    inputVal == "0.0.599970" ||
    inputVal == "0.0.599976" ||
    inputVal == "0.0.599980" ||
    inputVal == "0.0.599986" ||
    inputVal == "0.0.601249" ||
    inputVal == "0.0.601255" ||
    inputVal == "0.0.601258" ||
    inputVal == "0.0.601261" ||
    inputVal == "0.0.601263" ||
    inputVal == "0.0.601265" ||
    inputVal == "0.0.601267" ||
    inputVal == "0.0.601269" ||
    inputVal == "0.0.601275" ||
    inputVal == "0.0.601309" ||
    inputVal == "0.0.601313" ||
    inputVal == "0.0.601314" ||
    inputVal == "0.0.601316" ||
    inputVal == "0.0.601318" ||
    inputVal == "0.0.601322" ||
    inputVal == "0.0.601323" ||
    inputVal == "0.0.601346" ||
    inputVal == "0.0.601347" ||
    inputVal == "0.0.601419" ||
    inputVal == "0.0.601424" ||
    inputVal == "0.0.601454" ||
    inputVal == "0.0.601459" ||
    inputVal == "0.0.601460" ||
    inputVal == "0.0.601461" ||
    inputVal == "0.0.601463" ||
    inputVal == "0.0.601464" ||
    inputVal == "0.0.601465" ||
    inputVal == "0.0.601466" ||
    inputVal == "0.0.601467" ||
    inputVal == "0.0.601469" ||
    inputVal == "0.0.601470" ||
    inputVal == "0.0.601472" ||
    inputVal == "0.0.601480" ||
    inputVal == "0.0.601481" ||
    inputVal == "0.0.601486" ||
    inputVal == "0.0.601490" ||
    inputVal == "0.0.601492" ||
    inputVal == "0.0.601494" ||
    inputVal == "0.0.601498" ||
    inputVal == "0.0.601500" ||
    inputVal == "0.0.601503" ||
    inputVal == "0.0.601505" ||
    inputVal == "0.0.601507" ||
    inputVal == "0.0.601510" ||
    inputVal == "0.0.601513" ||
    inputVal == "0.0.601514" ||
    inputVal == "0.0.601526" ||
    inputVal == "0.0.604452"
  ) {
    about("Hbarmory x Panda Syndicates Collab");
    addGreen();
  } else if (inputVal == "0.0.787797") {
    about("Moon Shells");
    addGreen();
  }

  //CREETS
  else if (
    inputVal == "0.0.586914" ||
    inputVal == "0.0.586941" ||
    inputVal == "0.0.586942" ||
    inputVal == "0.0.586924" ||
    inputVal == "0.0.586944" ||
    inputVal == "0.0.586916" ||
    inputVal == "0.0.586932" ||
    inputVal == "0.0.586929" ||
    inputVal == "0.0.586921" ||
    inputVal == "0.0.586935"
  ) {
    about("CREETS SERIES 0 Collection");
    addGreen();
  } else if (
    inputVal == "0.0.587156" ||
    inputVal == "0.0.587161" ||
    inputVal == "0.0.587163" ||
    inputVal == "0.0.587149" ||
    inputVal == "0.0.587147" ||
    inputVal == "0.0.587153" ||
    inputVal == "0.0.587151" ||
    inputVal == "0.0.587152" ||
    inputVal == "0.0.587157" ||
    inputVal == "0.0.587160"
  ) {
    about("CREETS VERTS 0");
    addGreen();
  } else if (
    inputVal == "0.0.613863" ||
    inputVal == "0.0.613874" ||
    inputVal == "0.0.613875" ||
    inputVal == "0.0.613865" ||
    inputVal == "0.0.613804" ||
    inputVal == "0.0.613825" ||
    inputVal == "0.0.613806" ||
    inputVal == "0.0.613831" ||
    inputVal == "0.0.613833" ||
    inputVal == "0.0.613834"
  ) {
    about("CREETS SERIES 1 Collection");
    addGreen();
  } else if (
    inputVal == "0.0.613878" ||
    inputVal == "0.0.613880" ||
    inputVal == "0.0.613882" ||
    inputVal == "0.0.613884" ||
    inputVal == "0.0.613885" ||
    inputVal == "0.0.613887" ||
    inputVal == "0.0.613888" ||
    inputVal == "0.0.613891" ||
    inputVal == "0.0.613894" ||
    inputVal == "0.0.613895"
  ) {
    about("CREETS VERTS 1");
    addGreen();
  } else if (inputVal == "0.0.981809" || inputVal == "0.0.981973") {
    about("CREETS SERIES B Collection");
    addGreen();
  }

  //HHF HAPPY HASH FROGS
  else if (inputVal == "0.0.805785") {
    about("HAPPY HASH FROGS GEN 1");
    addGreen();
  } else if (inputVal == "0.0.777402") {
    about("HAPPY HASH FROGS X ℏBrains Collab");
    addGreen();
  } 
  
  
  //hangrybarboons
  else if (inputVal == "0.0.987434") {
    about("HANGRY BARBOONS - Hangry Heads");
    addGreen()}
  
  
  
  
  
    
  
  
  
  
  
  else {
    addRed();
    clear();
  }
}

/*

else if () {
  about("");
  addGreen()}



inputVal == 
" || 

  */
