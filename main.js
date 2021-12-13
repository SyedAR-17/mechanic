const apiKey = 'pk.eyJ1IjoiaGxhdGVlZi1iZTE5aWdpcyIsImEiOiJja3RpNmJpaWowNDNhMndvMGlmZWUwMjM2In0.bEVzDknMFRYvGsLmvnB0AA';
const mymap = L.map('map').setView([33.488443, 73.104548],16);

var osm = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(mymap);

var TopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

var St= L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});

var Canvas = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
});

/*var circle = L.circle([33.4918347133801, 73.09910372818045], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);*/

L.control.locate().addTo(mymap);
L.Control.geocoder().addTo(mymap);

//Fuel icon
var leafleticon = L.icon ({
    iconUrl: 'http://maps.google.com/mapfiles/kml/shapes/gas_stations.png',
    iconSize: [48,48],
    iconAnchor: [15,45],
    popupAnchor: [12,-45]
})

//Workshops icon
var leafleticon1 = L.icon ({
    iconUrl: 'http://maps.google.com/mapfiles/kml/shapes/mechanic.png',
    iconSize: [48,48],
    iconAnchor: [15,45],
    popupAnchor: [12,-45]
})

//Showroom icon
var leafleticon2 = L.icon ({
    iconUrl: 'http://maps.google.com/mapfiles/kml/shapes/cabs.png',
    iconSize: [32,32],
    iconAnchor: [15,45],
    popupAnchor: [12,-45]
})

//Bahria Town Markers
let template = `
<h1>Munawar Auto Workshop</h1>
<b1> Contact: +923183451127</b1>
<img width="300" height="200"src="Munawar.JPG"/>
<b1>Electrician is expert. He repaired my car's radiator and fan. Car A/C is also repaired now working efficiently.</b1>
`
var M_MARKER = L.marker([33.4918347133801, 73.09910372818045], {icon:leafleticon1}).bindPopup(template);

let template1 = `
<h1>Dubai Auto Workshop</h1>
<b1> Contact: +923066022233</b1>
<img width="300" height="200"src="DUBAI.JPG"/>
<b1>Newly established setup of Auto repair workshop, AC Works, Battery Works and spare parts in the hub commercial area
The team is good, decent and seemed to be Professional.</b1>
`
var D_MARKER = L.marker([33.49209698563608, 73.09911311591247], {icon:leafleticon1}).bindPopup(template1);

let template2 = `
<h1>PSO Tyre Shop Phase 8</h1>
<b1> Website: https://psopk.com/</b1>
<img width="300" height="200"src="TYRE_PHASE8.JPG"/>
<b1>A huge petrol pump with state of the art facilities of oil change, car wash, tyre pressure check and air pump, and a grocery store with so much more!</b1>
`
var PSO8_Marker = L.marker([33.5126534143299, 73.08131927307053], {icon:leafleticon}).bindPopup(template2);

let template3 = `
<h1>PSO Tyre Shop Phase 7</h1>
<b1>Contact: +9280003000</b1>
<img width="300" height="200"src="TYRE_PHASE7.JPG"/>
<b1>Too many shops in the pump. Grocery shop, flower shop, car wash, tyre shop, French Fries shop, auto assessories shop, oil change shop.</b1>
`
var PSO7_MARKER = L.marker([33.52048339725935, 73.10387207271793], {icon:leafleticon}).bindPopup(template3);

var bh = L.layerGroup([M_MARKER, D_MARKER, PSO8_Marker, PSO7_MARKER]);

//GT_ROADS_MARKERS
let template4 = `
<h1>Malik Auto & Electrician</h1>
<b1>Contact: +923145056007</b1>
<b1>Mr. Qutab ud din Technician good service provider</b1>
`
var MA_MARKER = L.marker([33.54023957519121, 73.11503650324721], {icon:leafleticon1}).bindPopup(template4);

let template5 = `
<h1>Toyota Rawal Motors</h1>
<b1>Contact: +92514917200</b1>
<img width="300" height="200"src="RAWAL.JPG"/>
<b1>Quick and quality service. Courteous and efficient staff and good rates</b1>
`
var TR = L.marker([33.54226131138809, 73.10694319813412], {icon:leafleticon2}).bindPopup(template5);

let template6 = `
<h1>Suzuki Central Motors</h1>
<b1>Contact: +92514917112</b1>
<img width="300" height="200"src="CENTRAL.JPG"/>
<b1>Well maintained workshop & show room good for company maintained vehicles. Pak Suzuki central motor Rawalpindi have a huge workshop area.</b1>
`
var SC = L.marker([33.5433754330305, 73.1072483194254], {icon:leafleticon2}).bindPopup(template6);

let template7 = `
<h1>Pak London Wheel Allignment</h1>
<b1>Contact: +923128302426</b1>
<img width="300" height="200"src="PK_LONDON.JPG"/>
<b1>Good Mechanics, quality wheel balancing & allignment.</b1>
`
var PL = L.marker([33.545937661697295, 73.10318068304652], {icon:leafleticon1}).bindPopup(template7);

let template8 = `
<h1>SHELL Tyre Shop Azadi Chowk</h1>
<b1>Website: http://www.shell.com.pk/</b1>
<img width="300" height="200"src="SHELL_CHOWK.JPG"/>
<b1>Got my car refuelled, oil chnage and tyres check several times from this station. Never had an issue regarding quality and quantity. The staff is also well mannered. This place is recommended.</b1>
`
var STA = L.marker([33.55842706129271, 73.09306177389718], {icon:leafleticon}).bindPopup(template8);

let template9 = `
<h1>PSO Tyre Shop Ayub Park</h1>
<b1>Contact: +92515146733</b1>
<img width="300" height="200"src="PSO_AYUBPARK.JPG"/>
<b1>Refueled from this petrol station and got my tyre repaired on my way to Rawalpindi to Multan and my car gave the best ever average on the constant speed of 100KM/h.</b1>
`
var PTA = L.marker([33.576439548335635, 73.07201465556194], {icon:leafleticon}).bindPopup(template9);

var GT_ROAD = L.layerGroup([MA_MARKER, TR, SC, PL, STA, PTA]);

//Airport Road Markers
let template29 = `
<h1>PSO Tyre Shop Airport Road</h1>
<b1>Website: https://psopk.com/</b1>
<img width="300" height="200"src="PSOAIRPORT.JPG"/>
<b1>One of the 3 petrol pumps in the rawalpindi cantt  area that I trust.. good quality clean petrol.. exact quantities... they were the first in the area to provide consistent supply of euro5 fuel. Open even when other pumps are on strike.</b1>
`
var PTAR = L.marker([33.58706342780429, 73.07384068256661], {icon:leafleticon}).bindPopup(template29);

let template30 = `
<h1>Total Tyre Shop Airport Road</h1>
<b1>Contact: +92515794441</b1>
<img width="300" height="200"src="TOTALAIRPORT.JPG"/>
<b1>A wonderful experience here as combo of daily life facilities are available like gas station, cng station, tyre shop , service station with solar panels, prayer area , tuck shop stuffed heavily with daily commodities</b1>
`
var TTA = L.marker([33.58822948794675, 73.07499464531566], {icon:leafleticon}).bindPopup(template30);

let template31 = `
<h1>PSO Tyre Shop Airport Road</h1>
<b1>Website: https://psopk.com/</b1>
<img width="300" height="200"src="PSO1AIRPORT.JPG"/>
<b1>Very Good fuel station. Shop is not optimized however fuel quality and tyre shop facilities are good.</b1>
`
var PTSA = L.marker([33.60480425144436, 73.09938102790727], {icon:leafleticon}).bindPopup(template31);

let template32 = `
<h1>BISMILLAH AUTO WORK SHOP</h1>
<b1>Contact: +923155769969</b1>
<img width="300" height="200"src="BIS.JPG"/>
<b1>Urgent mechnaical fault? will deal within an hour. Quality work</b1>
`
var BAWS = L.marker([33.60884015350333, 73.1085302799713], {icon:leafleticon1}).bindPopup(template32);

let template33 = `
<h1>ATTOCK Petrol Pump Airport Road</h1>
<b1>Website: http://www.apl.com.pk/</b1>
<img width="300" height="200"src="ATTOCKAIRPORT.JPG"/>
<b1>Reliable and fast service . Can serve many cars at time. Fuel quality is fine</b1>
`
var APPA = L.marker([33.60348891808316, 73.12098301606976], {icon:leafleticon}).bindPopup(template33);

let template34 = `
<h1>Malik lube Oil Store</h1>
<b1>Contact: +923009764272</b1>
<img width="300" height="200"src="MALIK.JPG"/>
<b1>Perfect lubricant shop for any car's oil change. Coperative staff members</b1>
`
var MLOS = L.marker([33.60222976191442, 73.1235320221238], {icon:leafleticon1}).bindPopup(template34);

var AIRPORT_ROAD = L.layerGroup([PTAR, TTA, PTSA, BAWS, APPA, MLOS]);

//Expressway Markers
let template35 = `
<h1>TOTAL Tyre Shop Islamabad Expressway</h1>
<b1>Website: http://totalparco.com.pk/</b1>
<img width="300" height="200"src="TOTALEXPRESS.JPG"/>
<b1>Located Next to Khanna Pull from faizabad at left side. every Total station Good in recent days. Their Fuel Quality and Tyre service is all time Perfect.</b1>
`
var TTSI = L.marker([33.61832744684096, 73.12200956224129], {icon:leafleticon}).bindPopup(template35);

let template36 = `
<h1>Hascol Tyre Shop Islamabad Expressway</h1>
<b1>Contact: +923344499752</b1>
<img width="300" height="200"src="HASCOL.JPG"/>
<b1>Non hygienic, dirty, no discipline, no security and rush. It's a bus stop. Only recommended if it's emergancy!</b1>
`
var HTSI = L.marker([33.65178716351795, 73.0991018428353], {icon:leafleticon}).bindPopup(template36);

var EXPRESSWAY_ISL = L.layerGroup([TTSI, HTSI]);

//chur chowk Markers
let template10 = `
<h1>Suzuki RaceCourse Motors</h1>
<b1>Contact: +923481117776</b1>
<img width="300" height="200"src="SUZUKI_RACE.JPG"/>
<b1>It was wonderful experience, staff is polite, professional and hospitality is great!</b1>
`
var SRC = L.marker([33.60255188166271, 73.02967920536784], {icon:leafleticon2}).bindPopup(template10);

let template11 = `
<h1>Honda RaceCourse Motors</h1>
<b1>Contact: +9251111300123</b1>
<img width="300" height="200"src="HONDACENTRE.JPG"/>
<b1>their reponse was good. I found their mechanics giving good opinion regarding my vehicle. I went with a complaint of slow acceleration and clutch plate problems. They have fixed it without any exaggeration.</b1>
`
var HRC = L.marker([33.60244725599097, 73.02905112250214], {icon:leafleticon2}).bindPopup(template11);

let template18 = `
<h1>Shell Tyre Shop Westridge</h1>
<b1>Contact: +92515480483</b1>
<img width="300" height="200"src="SHELLWEST.JPG"/>
<b1>Fuel quality is not the best but they accept credit card that's really appreciated. Also tyre shop is open 24/7 and evey type of punture facilites are avaliable</b1>
`
var STSW = L.marker([33.605188506624145, 73.0208943224615], {icon:leafleticon}).bindPopup(template18);

let template19 = `
<h1>Awan Car AC & Heater Repairing</h1>
<b1>Contact: +923005079707</b1>
<img width="300" height="200"src="AWAN.JPG"/>
<b1>A best ever experience for my Car Ac repair with Mr Asif Mehmood Humayun.. Honest, Hardworker..
I feel fully satisfied with him.</b1>
`
var ACAH = L.marker([33.60757496963614, 73.01332168872302], {icon:leafleticon1}).bindPopup(template19);

let template20 = `
<h1>PSO Tyre Shop Peshawar Road</h1>
<b1>Website: https://psopk.com/</b1>
<img width="300" height="200"src="PSOPESH.JPG"/>
<b1>Very nice place specially the old man standing at entrance who pays Salam but negative point is that there is no place for getting out so you have to reverse your vehicle.</b1>
`
var PTSP = L.marker([33.609524203682206, 73.00929232931563], {icon:leafleticon}).bindPopup(template20);

let template21 = `
<h1>Ghazi Auto Mechanic</h1>
<b1>Contact: +923005270605</b1>
<b1>Urgent mechnaical fault? will deal within half an hour. Quality work</b1>
`
var GAM = L.marker([33.61099196692353, 73.00404490268538], {icon:leafleticon1}).bindPopup(template21);

var SHOWROOMS = L.layerGroup([SRC, HRC, STSW, ACAH, PTSP, GAM]);

//Golra Mor Markers
let template22 = `
<h1>Abid Car AC Works</h1>
<b1>Contact: +923215285169</b1>
<b1>A best ever experience for my Car Ac repair with Mr Saad Mehmood.. Honest, Hardworker..
I feel fully satisfied with him.</b1>
`
var ACAW = L.marker([33.611143441454054, 73.00528170519317], {icon:leafleticon1}).bindPopup(template22);

let template23 = `
<h1>GNS Battery House</h1>
<b1>Contact: +923355600272</b1>
<b1>Good quality batteries available</b1>
`
var GBH = L.marker([33.61161296093013, 73.0043470094736], {icon:leafleticon1}).bindPopup(template23);

let template24 = `
<h1>Waseem Car Radiator Workshop</h1>
<b1>All sets of radiators for different cars are avaliable with reasonable price and labour charges</b1>
`
var WCRW = L.marker([33.61377644244955, 72.99572228831224], {icon:leafleticon1}).bindPopup(template24);

let template25 = `
<h1>Jaidi Denting & Painting Works</h1>
<b1>Contact: +923009710517</b1>
<b1>Quality Denting & Painting</b1>
`
var JDPW = L.marker([33.6147242925608, 72.99411126222401], {icon:leafleticon1}).bindPopup(template25);

let template26 = `
<h1>TOTAL Tyre Shop</h1>
<b1>Contact: +92515495290</b1>
<img width="300" height="200"src="TOTAL.JPG"/>
<b1>Good quality and quantity. I am satisfied. Though I live in H-12 but I use this pump for my car. Tyre shop staffs are reliable</b1>
`
var TTS = L.marker([33.61574668758299, 72.99027967179109], {icon:leafleticon}).bindPopup(template26);

let template27 = `
<h1>The Car Clinic</h1>
<b1>Contact: +923139849992</b1>
<b1>All type of car services avaliable whether its repairing, denting, painting or modifing</b1>
`
var TCC = L.marker([33.617700400724175, 72.98519645052932], {icon:leafleticon1}).bindPopup(template27);

let template28 = `
<h1>TOTAL Khan Tyre Shop</h1>
<b1>Contact: +923005197944</b1>
<img width="300" height="200"src="TOTALKHAN.JPG"/>
<b1>Good tyre service but no idea about petrol quality .
LPG and CNG is also available here.
Its location helps much as it is on the by pass. It is much helpfull for others in case of emergency</b1>
`
var TKTS = L.marker([33.62329809136035, 72.97308104349949], {icon:leafleticon}).bindPopup(template28);

var GOLRA_MOR = L.layerGroup([ACAW, GBH, WCRW, JDPW, TTS, TCC, TKTS]);

//SADDAR Markers
let template12 = `
<h1>Shahid Wind Screen Centre</h1>
<b1>Contact: +92515511951</b1>
<b1>Best place for replacing car windscreen.good prices. Every thing available and 
large variety for all cars</b1>
`
var SWSC = L.marker([33.59759175784185, 73.05343571368914], {icon:leafleticon1}).bindPopup(template12);

let template13 = `
<h1>Tyre City Shop</h1>
<b1>Contact: +923155134146</b1>
<img width="300" height="200"src="TYRECITY.JPG"/>
<b1>Extremely Professional/Lowest Prices. Staff and mechanics are Cooperative</b1>
`
var TCS = L.marker([33.59757616940902, 73.05382045608934], {icon:leafleticon1}).bindPopup(template13);

let template14 = `
<h1>Hamza Younas Automobiles</h1>
<b1>Contact: +92515566603</b1>
<img width="300" height="200"src="YOUNAS.JPG"/>
<b1>Professional, authentic and reliable. Been their customer since their establishment and never have been disappointed. Prices are at par with the market and definitely better than the dealerships. Recommended</b1>
`
var HYA = L.marker([33.597714229953105, 73.0540020304227], {icon:leafleticon1}).bindPopup(template14);

let template15 = `
<h1>Sheikh Autos</h1>
<b1>Contact: +923135122202</b1>
<b1>Extremely Professional/Lowest Prices. Staff and mechanics are Cooperative. Every spare part available and 
large variety for all cars</b1>
`
var SA = L.marker([33.59776583136716, 73.05449657852938], {icon:leafleticon1}).bindPopup(template15);

let template16 = `
<h1>Wasim Autos Store</h1>
<b1>Contact: +92515564724</b1>
<img width="300" height="200"src="WASEEM.JPG"/>
<b1>Wasim Auto store Shop is located in Kamran Market. This shop mainly deals with spare parts of Suzuki company. Here you can easily find all spare parts of Suzuki vehicles. These are the official dealers of Suzuki company.  There is a shop and a very old Suzuki spare parts shop in Rawalpindi</b1>
`
var WAS = L.marker([33.59877259588692, 73.05542469044688], {icon:leafleticon1}).bindPopup(template16);

let template17 = `
<h1>PSO Tyre Shop Mall Road</h1>
<b1>Contact: +9221111111776</b1>
<img width="300" height="200"src="PSOMALL.JPG"/>
<b1>Best Quailty and fast service. Fuel quality is very great and gives extra mileage. Reliable tyre puncture serivce</b1>
`
var PTSM = L.marker([33.59766608089194, 73.04599896454107], {icon:leafleticon}).bindPopup(template17);

var SADDAAR = L.layerGroup([SWSC, TCS, HYA, SA, WAS, PTSM]);

//Srinagar Highway Markers
let template37 = `
<h1>Tyre Shop Srinagar Highway</h1>
<b1>Contact: +923009764272</b1>
<b1>Quality work, all sets of punture's avaliable</b1>
`
var TSSH = L.marker([33.658350527034635, 72.99486889462536], {icon:leafleticon1}).bindPopup(template37);

let template38 = `
<h1>PSO Tyre Shop Srinagar Highway</h1>
<b1>Website: https://psopk.com/</b1>
<img width="300" height="200"src="PSOKHY.JPG"/>
<b1>If you are enroute on motorway or travelling this is the perfect place for you to get your tyre pressure checked and even get any punctures fixed</b1>
`
var PTSS = L.marker([33.64556391161515, 72.975938934930619], {icon:leafleticon}).bindPopup(template38);

let template39 = `
<h1>Tayyab Tyre Shop Nust Service Road</h1>
<b1>Contact: +923340103177</b1>
<img width="300" height="200"src="TAYYAB.JPG"/>
<b1>For Nust students in case of tyre pressure check or puncture</b1>
`
var TTSN = L.marker([33.64411082019738, 72.98051399662401], {icon:leafleticon1}).bindPopup(template39);

let template40 = `
<h1>Auto Club Workshop Nust Service Road</h1>
<b1>Contact: +92514436293</b1>
<img width="300" height="200"src="AUTOCLUB.JPG"/>
<b1>Was looking for great service and I found it.
Really nice people, well staffed and have all the facilities needed for care of your automobile. Yes the place might seem a bit bust up but the tools and people are tip top. Excellent place, totally recommend for any kind of repairs and electrical work.
</b1>
`
var ACWNS = L.marker([33.633833891972984, 72.988215119298], {icon:leafleticon1}).bindPopup(template40);

var SRINAGAR_HGY = L.layerGroup([TSSH, PTSS, TTSN, ACWNS]);

//leaflet layers control
var baseMaps = {
    'Open Street Map' : osm,
    'Topographic Map': TopoMap,
    'Dark Mode': St,
    'Canvas': Canvas
}

var overlayMaps = {
    'Workshops in Bahria Town':bh,
    'Workshops on GT Road': GT_ROAD,
    'Workshops on Airport Road': AIRPORT_ROAD,
    'Workshops on Islamabad Expressway': EXPRESSWAY_ISL,
    'Workshops in Westridge': SHOWROOMS,
    'Workshops on Golra Mor': GOLRA_MOR,
    'Workshops in SADDAR': SADDAAR,
    'Workshops on Srinagar Highway': SRINAGAR_HGY
}

L.control.layers(baseMaps, overlayMaps).addTo(mymap);

//<link rel="stylesheet" href="style.css">