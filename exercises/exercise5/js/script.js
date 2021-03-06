/**
Haiku Generator++
Daniel Cacatian

Add-on to Activity 6 by Pippin Barr.
*/

"use strict";

let haikuTitles = [
	"accept",
	"add",
	"admire",
	"admit",
	"advise",
	"afford",
	"agree",
	"alert",
	"allow",
	"amuse",
	"analyse",
	"announce",
	"annoy",
	"answer",
	"apologise",
	"appear",
	"applaud",
	"appreciate",
	"approve",
	"argue",
	"arrange",
	"arrest",
	"arrive",
	"ask",
	"attach",
	"attack",
	"attempt",
	"attend",
	"attract",
	"avoid",
	"back",
	"bake",
	"balance",
	"ban",
	"bang",
	"bare",
	"bat",
	"bathe",
	"battle",
	"beam",
	"beg",
	"behave",
	"belong",
	"bleach",
	"bless",
	"blind",
	"blink",
	"blot",
	"blush",
	"boast",
	"boil",
	"bolt",
	"bomb",
	"book",
	"bore",
	"borrow",
	"bounce",
	"bow",
	"box",
	"brake",
	"branch",
	"breathe",
	"bruise",
	"brush",
	"bubble",
	"bump",
	"burn",
	"bury",
	"buzz",
	"calculate",
	"call",
	"camp",
	"care",
	"carry",
	"carve",
	"cause",
	"challenge",
	"change",
	"charge",
	"chase",
	"cheat",
	"check",
	"cheer",
	"chew",
	"choke",
	"chop",
	"claim",
	"clap",
	"clean",
	"clear",
	"clip",
	"close",
	"coach",
	"coil",
	"collect",
	"colour",
	"comb",
	"command",
	"communicate",
	"compare",
	"compete",
	"complain",
	"complete",
	"concentrate",
	"concern",
	"confess",
	"confuse",
	"connect",
	"consider",
	"consist",
	"contain",
	"continue",
	"copy",
	"correct",
	"cough",
	"count",
	"cover",
	"crack",
	"crash",
	"crawl",
	"cross",
	"crush",
	"cry",
	"cure",
	"curl",
	"curve",
	"cycle",
	"dam",
	"damage",
	"dance",
	"dare",
	"decay",
	"deceive",
	"decide",
	"decorate",
	"delay",
	"delight",
	"deliver",
	"depend",
	"describe",
	"desert",
	"deserve",
	"destroy",
	"detect",
	"develop",
	"disagree",
	"disappear",
	"disapprove",
	"disarm",
	"discover",
	"dislike",
	"divide",
	"double",
	"doubt",
	"drag",
	"drain",
	"dream",
	"dress",
	"drip",
	"drop",
	"drown",
	"drum",
	"dry",
	"dust",
	"earn",
	"educate",
	"embarrass",
	"employ",
	"empty",
	"encourage",
	"end",
	"enjoy",
	"enter",
	"entertain",
	"escape",
	"examine",
	"excite",
	"excuse",
	"exercise",
	"exist",
	"expand",
	"expect",
	"explain",
	"explode",
	"extend",
	"face",
	"fade",
	"fail",
	"fancy",
	"fasten",
	"fax",
	"fear",
	"fence",
	"fetch",
	"file",
	"fill",
	"film",
	"fire",
	"fit",
	"fix",
	"flap",
	"flash",
	"float",
	"flood",
	"flow",
	"flower",
	"fold",
	"follow",
	"fool",
	"force",
	"form",
	"found",
	"frame",
	"frighten",
	"fry",
	"gather",
	"gaze",
	"glow",
	"glue",
	"grab",
	"grate",
	"grease",
	"greet",
	"grin",
	"grip",
	"groan",
	"guarantee",
	"guard",
	"guess",
	"guide",
	"hammer",
	"hand",
	"handle",
	"hang",
	"happen",
	"harass",
	"harm",
	"hate",
	"haunt",
	"head",
	"heal",
	"heap",
	"heat",
	"help",
	"hook",
	"hop",
	"hope",
	"hover",
	"hug",
	"hum",
	"hunt",
	"hurry",
	"identify",
	"ignore",
	"imagine",
	"impress",
	"improve",
	"include",
	"increase",
	"influence",
	"inform",
	"inject",
	"injure",
	"instruct",
	"intend",
	"interest",
	"interfere",
	"interrupt",
	"introduce",
	"invent",
	"invite",
	"irritate",
	"itch",
	"jail",
	"jam",
	"jog",
	"join",
	"joke",
	"judge",
	"juggle",
	"jump",
	"kick",
	"kill",
	"kiss",
	"kneel",
	"knit",
	"knock",
	"knot",
	"label",
	"land",
	"last",
	"laugh",
	"launch",
	"learn",
	"level",
	"license",
	"lick",
	"lie",
	"lighten",
	"like",
	"list",
	"listen",
	"live",
	"load",
	"lock",
	"long",
	"look",
	"love",
	"man",
	"manage",
	"march",
	"mark",
	"marry",
	"match",
	"mate",
	"matter",
	"measure",
	"meddle",
	"melt",
	"memorise",
	"mend",
	"mess up",
	"milk",
	"mine",
	"miss",
	"mix",
	"moan",
	"moor",
	"mourn",
	"move",
	"muddle",
	"mug",
	"multiply",
	"murder",
	"nail",
	"name",
	"need",
	"nest",
	"nod",
	"note",
	"notice",
	"number",
	"obey",
	"object",
	"observe",
	"obtain",
	"occur",
	"offend",
	"offer",
	"open",
	"order",
	"overflow",
	"owe",
	"own",
	"pack",
	"paddle",
	"paint",
	"park",
	"part",
	"pass",
	"paste",
	"pat",
	"pause",
	"peck",
	"pedal",
	"peel",
	"peep",
	"perform",
	"permit",
	"phone",
	"pick",
	"pinch",
	"pine",
	"place",
	"plan",
	"plant",
	"play",
	"please",
	"plug",
	"point",
	"poke",
	"polish",
	"pop",
	"possess",
	"post",
	"pour",
	"practise",
	"pray",
	"preach",
	"precede",
	"prefer",
	"prepare",
	"present",
	"preserve",
	"press",
	"pretend",
	"prevent",
	"prick",
	"print",
	"produce",
	"program",
	"promise",
	"protect",
	"provide",
	"pull",
	"pump",
	"punch",
	"puncture",
	"punish",
	"push",
	"question",
	"queue",
	"race",
	"radiate",
	"rain",
	"raise",
	"reach",
	"realise",
	"receive",
	"recognise",
	"record",
	"reduce",
	"reflect",
	"refuse",
	"regret",
	"reign",
	"reject",
	"rejoice",
	"relax",
	"release",
	"rely",
	"remain",
	"remember",
	"remind",
	"remove",
	"repair",
	"repeat",
	"replace",
	"reply",
	"report",
	"reproduce",
	"request",
	"rescue",
	"retire",
	"return",
	"rhyme",
	"rinse",
	"risk",
	"rob",
	"rock",
	"roll",
	"rot",
	"rub",
	"ruin",
	"rule",
	"rush",
	"sack",
	"sail",
	"satisfy",
	"save",
	"saw",
	"scare",
	"scatter",
	"scold",
	"scorch",
	"scrape",
	"scratch",
	"scream",
	"screw",
	"scribble",
	"scrub",
	"seal",
	"search",
	"separate",
	"serve",
	"settle",
	"shade",
	"share",
	"shave",
	"shelter",
	"shiver",
	"shock",
	"shop",
	"shrug",
	"sigh",
	"sign",
	"signal",
	"sin",
	"sip",
	"ski",
	"skip",
	"slap",
	"slip",
	"slow",
	"smash",
	"smell",
	"smile",
	"smoke",
	"snatch",
	"sneeze",
	"sniff",
	"snore",
	"snow",
	"soak",
	"soothe",
	"sound",
	"spare",
	"spark",
	"sparkle",
	"spell",
	"spill",
	"spoil",
	"spot",
	"spray",
	"sprout",
	"squash",
	"squeak",
	"squeal",
	"squeeze",
	"stain",
	"stamp",
	"stare",
	"start",
	"stay",
	"steer",
	"step",
	"stir",
	"stitch",
	"stop",
	"store",
	"strap",
	"strengthen",
	"stretch",
	"strip",
	"stroke",
	"stuff",
	"subtract",
	"succeed",
	"suck",
	"suffer",
	"suggest",
	"suit",
	"supply",
	"support",
	"suppose",
	"surprise",
	"surround",
	"suspect",
	"suspend",
	"switch",
	"talk",
	"tame",
	"tap",
	"taste",
	"tease",
	"telephone",
	"tempt",
	"terrify",
	"test",
	"thank",
	"thaw",
	"tick",
	"tickle",
	"tie",
	"time",
	"tip",
	"tire",
	"touch",
	"tour",
	"tow",
	"trace",
	"trade",
	"train",
	"transport",
	"trap",
	"travel",
	"treat",
	"tremble",
	"trick",
	"trip",
	"trot",
	"trouble",
	"trust",
	"try",
	"tug",
	"tumble",
	"turn",
	"twist",
	"type",
	"undress",
	"unfasten",
	"unite",
	"unlock",
	"unpack",
	"untidy",
	"use",
	"vanish",
	"visit",
	"wail",
	"wait",
	"walk",
	"wander",
	"want",
	"warm",
	"warn",
	"wash",
	"waste",
	"watch",
	"water",
	"wave",
	"weigh",
	"welcome",
	"whine",
	"whip",
	"whirl",
	"whisper",
	"whistle",
	"wink",
	"wipe",
	"wish",
	"wobble",
	"wonder",
	"work",
	"worry",
	"wrap",
	"wreck",
	"wrestle",
	"wriggle",
	"x-ray",
	"yawn",
	"yell",
	"zip",
	"zoom"
];

let fiveSyllableLines = [
  `O, to be a tree`,
  `The cat does not know`,
  `We are all forests`,
  `You have done your best`,
  `They are all gone now`
];

let sevenSyllableLines = [
  `Say the things left unsaid`,
  `Never believe the wind's lies`,
  `The autumn stretches its legs`,
  `Nothing can satisfy you`,
  `They will not come back again`
];

let header = random(haikuTitles);
let line1 = random(fiveSyllableLines);
let line2 = random(sevenSyllableLines);
let line3 = random(fiveSyllableLines);

let title = document.getElementById(`haiku-title`);
let line1P = document.getElementById(`line-1`);
let line2P = document.getElementById(`line-2`);
let line3P = document.getElementById(`line-3`);
let caption = document.getElementById(`instructions`);

title.innerText = header;
line1P.innerText = line1;
line2P.innerText = line2;
line3P.innerText = line3;

//Click event
line1P.addEventListener(`click`, lineClicked);
line2P.addEventListener(`click`, lineClicked);
line3P.addEventListener(`click`, lineClicked);

//Mouse enter event
line1P.addEventListener(`mouseenter`, hover);
line2P.addEventListener(`mouseenter`, hover);
line3P.addEventListener(`mouseenter`, hover);

//Mouse leave event
line1P.addEventListener(`mouseleave`, noHover);
line2P.addEventListener(`mouseleave`, noHover);
line3P.addEventListener(`mouseleave`, noHover);

//Keydown event
document.addEventListener(`keydown`, spacePressed);

function lineClicked(event){
  fadeOut(event.target, 1);
}

function spacePressed(event){
  if(event.keyCode === 32){
    fadeOut(title, 1);
  }
}

//Hover change
function hover(event){
  event.target.style[`color`] = `#55a355`;
}
function noHover(event){
  event.target.style[`color`] = `black`;
}

//Fade out
function fadeOut(element, opacity){
  opacity -= 0.01;
  element.style[`opacity`] = opacity;
  if (opacity > 0){
    requestAnimationFrame(function(){
      fadeOut(element, opacity);
    });
  }
  else {
    setNewLine(element);
    fadeIn(element, 0);
  }
}

//Fade in
function fadeIn(element, opacity){
  opacity += 0.01;
  element.style[`opacity`] = opacity;
  if(opacity < 1){
    requestAnimationFrame(function(){
      fadeIn(element, opacity);
    });
  }
}

//Changes the line/title
function setNewLine(element){
  if(element === line1P || element === line3P){
    element.innerText = random(fiveSyllableLines);
  }
  else if(element === line2P){
    element.innerText = random(sevenSyllableLines);
  }
  else if(element === title){
    element.innerText = random(haikuTitles);
  }
}

function random(array){
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}

//Secret haiku appears when offline
window.addEventListener(`offline`, function(event){
  title.innerText = `adapt`;
  line1P.innerText = `No haiku knowledge`;
  line2P.innerText = `Seven syllable sentence`;
  line3P.innerText = `Am I good or what `;
  caption.innerText = `by Daniel Cacatian`;
});
