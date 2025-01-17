/*=========================================================================================
    File Name: zoom-on-click.js
    Description: Zoom on click mapael vetor map example
    ----------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
    Version: 1.0
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// Zoom on click mapael vetor map
// ------------------------------

$(window).on("load", function () {

    $(".zoom-on-click").mapael({
        map: {
            name: "france_departments",
            // Enable zoom on the map
            zoom: {
                enabled: true,
                mousewheel: false,
                animDuration: 250,
                animEasing: "backIn"
            },
            defaultArea: {
                attrsHover: {
                    fill: "#343434",
                    stroke: "#5d5d5d",
                    "stroke-width": 1,
                    "stroke-linejoin": "round"
                }
            }
        },
        legend: {
            plot: {
                cssClass: 'myLegend',
                labelAttrs: {
                    fill: "#4a4a4a"
                },
                titleAttrs: {
                    fill: "#4a4a4a"
                },
                marginBottom: 20,
                marginLeft: 30,
                hideElemsOnClick: {
                    opacity: 0
                },
                title: "French cities population",
                slices: [{
                    size: 4,
                    type: "circle",
                    max: 20000,
                    attrs: {
                        fill: "#89ff72"
                    },
                    label: "Less than 20000 inhabitants"
                }, {
                    size: 6,
                    type: "circle",
                    min: 20000,
                    max: 100000,
                    attrs: {
                        fill: "#fffd72"
                    },
                    label: "Between 20000 and 100000 inhabitants"
                }, {
                    size: 20,
                    type: "circle",
                    min: 100000,
                    max: 200000,
                    attrs: {
                        fill: "#ffbd54"
                    },
                    label: "Between 100000 et  200000 inhabitants"
                }, {
                    size: 40,
                    type: "circle",
                    min: 200000,
                    attrs: {
                        fill: "#ff5454"
                    },
                    label: "More than 200000 inhabitants"
                }]
            }
        },
        plots: {
            "town-75056": {
                value: "2268265",
                latitude: 48.86,
                longitude: 2.3444444444444,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Paris (75056)</span><br />Population : 2268265"
                }
            },
            "town-13055": {
                value: "859368",
                latitude: 43.296666666667,
                longitude: 5.3763888888889,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Marseille (13055)</span><br />Population : 859368"
                }
            },
            "town-69123": {
                value: "492578",
                latitude: 45.758888888889,
                longitude: 4.8413888888889,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Lyon (69123)</span><br />Population : 492578"
                }
            },
            "town-31555": {
                value: "449328",
                latitude: 43.604444444444,
                longitude: 1.4419444444444,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Toulouse (31555)</span><br />Population : 449328"
                }
            },
            "town-06088": {
                value: "347105",
                latitude: 43.701944444444,
                longitude: 7.2683333333333,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Nice (06088)</span><br />Population : 347105"
                }
            },
            "town-44109": {
                value: "293234",
                latitude: 47.217222222222,
                longitude: -1.5538888888889,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Nantes (44109)</span><br />Population : 293234"
                }
            },
            "town-67482": {
                value: "276401",
                latitude: 48.583611111111,
                longitude: 7.7480555555556,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Strasbourg (67482)</span><br />Population : 276401"
                }
            },
            "town-34172": {
                value: "260572",
                latitude: 43.611111111111,
                longitude: 3.8766666666667,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Montpellier (34172)</span><br />Population : 260572"
                }
            },
            "town-33063": {
                value: "242945",
                latitude: 44.837777777778,
                longitude: -0.57944444444444,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Bordeaux (33063)</span><br />Population : 242945"
                }
            },
            "town-59350": {
                value: "234058",
                latitude: 50.631944444444,
                longitude: 3.0575,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Lille (59350)</span><br />Population : 234058"
                }
            },
            "town-35238": {
                value: "212939",
                latitude: 48.114166666667,
                longitude: -1.6808333333333,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Rennes (35238)</span><br />Population : 212939"
                }
            },
            "town-51454": {
                value: "184011",
                latitude: 49.265277777778,
                longitude: 4.0286111111111,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Reims (51454)</span><br />Population : 184011"
                }
            },
            "town-76351": {
                value: "178070",
                latitude: 49.498888888889,
                longitude: 0.12111111111111,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Le Havre (76351)</span><br />Population : 178070"
                }
            },
            "town-06030": {
                value: "42780",
                latitude: 43.576111111111,
                longitude: 7.0186111111111,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Le Cannet (06030)</span><br />Population : 42780"
                }
            },
            "town-30007": {
                value: "42697",
                latitude: 44.127222222222,
                longitude: 4.0808333333333,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Alès (30007)</span><br />Population : 42697"
                }
            },
            "town-69290": {
                value: "42428",
                latitude: 45.696388888889,
                longitude: 4.9438888888889,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Saint-Priest (69290)</span><br />Population : 42428"
                }
            },
            "town-60159": {
                value: "42295",
                latitude: 49.414166666667,
                longitude: 2.8222222222222,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Compiègne (60159)</span><br />Population : 42295"
                }
            },
            "town-01053": {
                value: "42184",
                latitude: 46.204722222222,
                longitude: 5.2280555555556,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Bourg-en-Bresse (01053)</span><br />Population : 42184"
                }
            },
            "town-93046": {
                value: "42060",
                latitude: 48.918333333333,
                longitude: 2.5352777777778,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Livry-Gargan (93046)</span><br />Population : 42060"
                }
            },
            "town-78551": {
                value: "42009",
                latitude: 48.896388888889,
                longitude: 2.0905555555556,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Saint-Germain-en-Laye (78551)</span><br />Population : 42009"
                }
            },
            "town-33522": {
                value: "41971",
                latitude: 44.808333333333,
                longitude: -0.5891666666666699,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Talence (33522)</span><br />Population : 41971"
                }
            },
            "town-57672": {
                value: "41971",
                latitude: 49.358055555556,
                longitude: 6.1683333333333,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Thionville (57672)</span><br />Population : 41971"
                }
            },
            "town-69256": {
                value: "41970",
                latitude: 45.786944444444,
                longitude: 4.925,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Vaulx-en-Velin (69256)</span><br />Population : 41970"
                }
            },
            "town-69034": {
                value: "41840",
                latitude: 45.794722222222,
                longitude: 4.8463888888889,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Caluire-et-Cuire (69034)</span><br />Population : 41840"
                }
            },
            "town-59650": {
                value: "41809",
                latitude: 50.701111111111,
                longitude: 3.2133333333333,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Wattrelos (59650)</span><br />Population : 41809"
                }
            },
            "town-92036": {
                value: "41676",
                latitude: 48.9325,
                longitude: 2.3047222222222,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Gennevilliers (92036)</span><br />Population : 41676"
                }
            },
            "town-05061": {
                value: "41659",
                latitude: 44.558611111111,
                longitude: 6.0777777777778,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Gap (05061)</span><br />Population : 41659"
                }
            },
            "town-93064": {
                value: "41431",
                latitude: 48.873055555556,
                longitude: 2.4852777777778,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Rosny-sous-Bois (93064)</span><br />Population : 41431"
                }
            },
            "town-94022": {
                value: "41275",
                latitude: 48.766388888889,
                longitude: 2.4077777777778,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Choisy-le-Roi (94022)</span><br />Population : 41275"
                }
            },
            "town-77288": {
                value: "40609",
                latitude: 48.539722222222,
                longitude: 2.6591666666667,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Melun (77288)</span><br />Population : 40609"
                }
            },
            "town-28085": {
                value: "40420",
                latitude: 48.446666666667,
                longitude: 1.4883333333333,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Chartres (28085)</span><br />Population : 40420"
                }
            },
            "town-95268": {
                value: "40274",
                latitude: 48.971944444444,
                longitude: 2.4,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Garges-lès-Gonesse (95268)</span><br />Population : 40274"
                }
            },
            "town-97213": {
                value: "39996",
                latitude: 14.615277777778,
                longitude: -61.001944444444,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Le Lamentin (97213)</span><br />Population : 39996"
                }
            },
            "town-93053": {
                value: "39949",
                latitude: 48.890833333333,
                longitude: 2.4536111111111,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Noisy-le-Sec (93053)</span><br />Population : 39949"
                }
            },
            "town-59378": {
                value: "39782",
                latitude: 50.670277777778,
                longitude: 3.0963888888889,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Marcq-en-Barœul (59378)</span><br />Population : 39782"
                }
            },
            "town-50129": {
                value: "39772",
                latitude: 49.638611111111,
                longitude: -1.6158333333333,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Cherbourg-Octeville (50129)</span><br />Population : 39772"
                }
            },
            "town-03185": {
                value: "39712",
                latitude: 46.34,
                longitude: 2.6025,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Montluçon (03185)</span><br />Population : 39712"
                }
            },
            "town-44143": {
                value: "39683",
                latitude: 47.190555555556,
                longitude: -1.5691666666667,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Rezé (44143)</span><br />Population : 39683"
                }
            },
            "town-64024": {
                value: "39432",
                latitude: 43.484166666667,
                longitude: -1.5194444444444,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Anglet (64024)</span><br />Population : 39432"
                }
            },
            "town-93032": {
                value: "39350",
                latitude: 48.881666666667,
                longitude: 2.5388888888889,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Gagny (93032)</span><br />Population : 39350"
                }
            },
            "town-69029": {
                value: "39238",
                latitude: 45.738611111111,
                longitude: 4.9130555555556,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Bron (69029)</span><br />Population : 39238"
                }
            },
            "town-97407": {
                value: "38668",
                latitude: -20.939444444444,
                longitude: 55.287222222222,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Le Port (97407)</span><br />Population : 38668"
                }
            },
            "town-97311": {
                value: "38657",
                latitude: 5.5038888888889,
                longitude: -54.028888888889,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Saint-Laurent-du-Maroni (97311)</span><br />Population : 38657"
                }
            },
            "town-92007": {
                value: "38384",
                latitude: 48.797777777778,
                longitude: 2.3125,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Bagneux (92007)</span><br />Population : 38384"
                }
            },
            "town-62178": {
                value: "23869",
                latitude: 50.481111111111,
                longitude: 2.5477777777778,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Bruay-la-Buissière (62178)</span><br />Population : 23869"
                }
            },
            "town-91103": {
                value: "23812",
                latitude: 48.609444444444,
                longitude: 2.3077777777778,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Brétigny-sur-Orge (91103)</span><br />Population : 23812"
                }
            },
            "town-77058": {
                value: "23663",
                latitude: 48.841666666667,
                longitude: 2.6977777777778,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Bussy-Saint-Georges (77058)</span><br />Population : 23663"
                }
            },
            "town-97118": {
                value: "23606",
                latitude: 16.191388888889,
                longitude: -61.590277777778,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Petit-Bourg (97118)</span><br />Population : 23606"
                }
            },
            "town-92032": {
                value: "23603",
                latitude: 48.789166666667,
                longitude: 2.2855555555556,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Fontenay-aux-Roses (92032)</span><br />Population : 23603"
                }
            },
            "town-91223": {
                value: "23575",
                latitude: 48.435,
                longitude: 2.1622222222222,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Étampes (91223)</span><br />Population : 23575"
                }
            },
            "town-33192": {
                value: "23546",
                latitude: 44.771388888889,
                longitude: -0.61694444444444,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Gradignan (33192)</span><br />Population : 23546"
                }
            },
            "town-33069": {
                value: "23539",
                latitude: 44.864722222222,
                longitude: -0.59861111111111,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Le Bouscat (33069)</span><br />Population : 23539"
                }
            },
            "town-01283": {
                value: "23308",
                latitude: 46.255555555556,
                longitude: 5.655,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Oyonnax (01283)</span><br />Population : 23308"
                }
            },
            "town-78358": {
                value: "23287",
                latitude: 48.946111111111,
                longitude: 2.145,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Maisons-Laffitte (78358)</span><br />Population : 23287"
                }
            },
            "town-71153": {
                value: "23186",
                latitude: 46.800555555556,
                longitude: 4.4402777777778,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Le Creusot (71153)</span><br />Population : 23186"
                }
            },
            "town-21054": {
                value: "23135",
                latitude: 47.024166666667,
                longitude: 4.8388888888889,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Beaune (21054)</span><br />Population : 23135"
                }
            },
            "town-91421": {
                value: "23131",
                latitude: 48.7075,
                longitude: 2.4552777777778,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Montgeron (91421)</span><br />Population : 23131"
                }
            },
            "town-57480": {
                value: "23049",
                latitude: 49.099722222222,
                longitude: 6.1533333333333,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Montigny-lès-Metz (57480)</span><br />Population : 23049"
                }
            },
            "town-32013": {
                value: "22931",
                latitude: 43.645277777778,
                longitude: 0.58861111111111,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Auch (32013)</span><br />Population : 22931"
                }
            },
            "town-59155": {
                value: "22918",
                latitude: 51.024722222222,
                longitude: 2.3908333333333,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Coudekerque-Branche (59155)</span><br />Population : 22918"
                }
            },
            "town-04112": {
                value: "22852",
                latitude: 43.833333333333,
                longitude: 5.7830555555556,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Manosque (04112)</span><br />Population : 22852"
                }
            },
            "town-12145": {
                value: "22775",
                latitude: 44.097777777778,
                longitude: 3.0777777777778,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Millau (12145)</span><br />Population : 22775"
                }
            },
            "town-59368": {
                value: "22758",
                latitude: 50.655277777778,
                longitude: 3.0702777777778,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">La Madeleine (59368)</span><br />Population : 22758"
                }
            },
            "town-56098": {
                value: "22744",
                latitude: 47.763333333333,
                longitude: -3.3388888888889,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Lanester (56098)</span><br />Population : 22744"
                }
            },
            "town-34108": {
                value: "22743",
                latitude: 43.447222222222,
                longitude: 3.7555555555556,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Frontignan (34108)</span><br />Population : 22743"
                }
            },
            "town-77468": {
                value: "22639",
                latitude: 48.850277777778,
                longitude: 2.6508333333333,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Torcy (77468)</span><br />Population : 22639"
                }
            },
            "town-97420": {
                value: "22627",
                latitude: -20.905555555556,
                longitude: 55.607222222222,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Sainte-Suzanne (97420)</span><br />Population : 22627"
                }
            },
            "town-33119": {
                value: "22588",
                latitude: 44.856944444444,
                longitude: -0.53277777777778,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Cenon (33119)</span><br />Population : 22588"
                }
            },
            "town-14366": {
                value: "22547",
                latitude: 49.145555555556,
                longitude: 0.22555555555556,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Lisieux (14366)</span><br />Population : 22547"
                }
            },
            "town-77390": {
                value: "22514",
                latitude: 48.791111111111,
                longitude: 2.6513888888889,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Roissy-en-Brie (77390)</span><br />Population : 22514"
                }
            },
            "town-06079": {
                value: "22498",
                latitude: 43.545555555556,
                longitude: 6.9375,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Mandelieu-la-Napoule (06079)</span><br />Population : 22498"
                }
            },
            "town-38169": {
                value: "22485",
                latitude: 45.193055555556,
                longitude: 5.6847222222222,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Fontaine (38169)</span><br />Population : 22485"
                }
            },
            "town-94011": {
                value: "16888",
                latitude: 48.774166666667,
                longitude: 2.4875,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Bonneuil-sur-Marne (94011)</span><br />Population : 16888"
                }
            },
            "town-35047": {
                value: "16875",
                latitude: 48.024722222222,
                longitude: -1.7458333333333,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Bruz (35047)</span><br />Population : 16875"
                }
            },
            "town-60612": {
                value: "16867",
                latitude: 49.207222222222,
                longitude: 2.5866666666667,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Senlis (60612)</span><br />Population : 16867"
                }
            },
            "town-76447": {
                value: "16852",
                latitude: 49.546111111111,
                longitude: 0.18805555555556,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Montivilliers (76447)</span><br />Population : 16852"
                }
            },
            "town-55029": {
                value: "16830",
                latitude: 48.771666666667,
                longitude: 5.1672222222222,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Bar-le-Duc (55029)</span><br />Population : 16830"
                }
            },
            "town-78481": {
                value: "16821",
                latitude: 48.896666666667,
                longitude: 2.1061111111111,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Le Pecq (78481)</span><br />Population : 16821"
                }
            },
            "town-33122": {
                value: "16802",
                latitude: 44.744444444444,
                longitude: -0.68222222222222,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Cestas (33122)</span><br />Population : 16802"
                }
            },
            "town-69199": {
                value: "16787",
                latitude: 45.708611111111,
                longitude: 4.8533333333333,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Saint-Fons (69199)</span><br />Population : 16787"
                }
            },
            "town-83023": {
                value: "16757",
                latitude: 43.405833333333,
                longitude: 6.0616666666667,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Brignoles (83023)</span><br />Population : 16757"
                }
            },
            "town-78650": {
                value: "16753",
                latitude: 48.893888888889,
                longitude: 2.1322222222222,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Le Vésinet (78650)</span><br />Population : 16753"
                }
            },
            "town-57606": {
                value: "16723",
                latitude: 49.104166666667,
                longitude: 6.7080555555556,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Saint-Avold (57606)</span><br />Population : 16723"
                }
            },
            "town-83123": {
                value: "16643",
                latitude: 43.119166666667,
                longitude: 5.8022222222222,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Sanary-sur-Mer (83123)</span><br />Population : 16643"
                }
            },
            "town-67267": {
                value: "16639",
                latitude: 48.5575,
                longitude: 7.6830555555556,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Lingolsheim (67267)</span><br />Population : 16639"
                }
            },
            "town-44055": {
                value: "16623",
                latitude: 47.285833333333,
                longitude: -2.3922222222222,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">La Baule-Escoublac (44055)</span><br />Population : 16623"
                }
            },
            "town-77053": {
                value: "16604",
                latitude: 48.6925,
                longitude: 2.6111111111111,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Brie-Comte-Robert (77053)</span><br />Population : 16604"
                }
            },
            "town-97120": {
                value: "16550",
                latitude: 16.241111111111,
                longitude: -61.533055555556,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Pointe-à-Pitre (97120)</span><br />Population : 16550"
                }
            },
            "town-29151": {
                value: "16547",
                latitude: 48.5775,
                longitude: -3.8277777777778,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Morlaix (29151)</span><br />Population : 16547"
                }
            },
            "town-95476": {
                value: "16537",
                latitude: 49.059166666667,
                longitude: 2.0625,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Osny (95476)</span><br />Population : 16537"
                }
            },
            "town-78335": {
                value: "16534",
                latitude: 48.993333333333,
                longitude: 1.7358333333333,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Limay (78335)</span><br />Population : 16534"
                }
            },
            "town-34154": {
                value: "16504",
                latitude: 43.616388888889,
                longitude: 4.0075,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Mauguio (34154)</span><br />Population : 16504"
                }
            },
            "town-37214": {
                value: "16503",
                latitude: 47.402777777778,
                longitude: 0.67805555555556,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Saint-Cyr-sur-Loire (37214)</span><br />Population : 16503"
                }
            },
            "town-57757": {
                value: "16475",
                latitude: 49.358888888889,
                longitude: 6.1886111111111,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Yutz (57757)</span><br />Population : 16475"
                }
            },
            "town-33167": {
                value: "16457",
                latitude: 44.836388888889,
                longitude: -0.52583333333333,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Floirac (33167)</span><br />Population : 16457"
                }
            },
            "town-09225": {
                value: "16450",
                latitude: 43.116388888889,
                longitude: 1.6108333333333,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Pamiers (09225)</span><br />Population : 16450"
                }
            },
            "town-95637": {
                value: "16443",
                latitude: 49.034444444444,
                longitude: 2.0319444444444,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Vauréal (95637)</span><br />Population : 16443"
                }
            },
            "town-31424": {
                value: "16442",
                latitude: 43.565555555556,
                longitude: 1.2963888888889,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Plaisance-du-Touch (31424)</span><br />Population : 16442"
                }
            },
            "town-50602": {
                value: "16377",
                latitude: 49.640833333333,
                longitude: -1.5788888888889,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Tourlaville (50602)</span><br />Population : 16377"
                }
            },
            "town-59569": {
                value: "16363",
                latitude: 50.363055555556,
                longitude: 3.1130555555556,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Sin-le-Noble (59569)</span><br />Population : 16363"
                }
            },
            "town-38382": {
                value: "16355",
                latitude: 45.231666666667,
                longitude: 5.6830555555556,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Saint-Égrève (38382)</span><br />Population : 16355"
                }
            },
            "town-44069": {
                value: "16263",
                latitude: 47.328055555556,
                longitude: -2.4291666666667,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Guérande (44069)</span><br />Population : 16263"
                }
            },
            "town-28218": {
                value: "16262",
                latitude: 48.438333333333,
                longitude: 1.465,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Lucé (28218)</span><br />Population : 16262"
                }
            },
            "town-72154": {
                value: "16249",
                latitude: 47.699722222222,
                longitude: -0.076111111111111,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">La Flèche (72154)</span><br />Population : 16249"
                }
            },
            "town-91471": {
                value: "16231",
                latitude: 48.698055555556,
                longitude: 2.1875,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Orsay (91471)</span><br />Population : 16231"
                }
            },
            "town-78686": {
                value: "16224",
                latitude: 48.8,
                longitude: 2.1722222222222,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Viroflay (78686)</span><br />Population : 16224"
                }
            },
            "town-97115": {
                value: "16191",
                latitude: 16.271666666667,
                longitude: -61.632777777778,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Lamentin (97115)</span><br />Population : 16191"
                }
            },
            "town-74256": {
                value: "16184",
                latitude: 45.936388888889,
                longitude: 6.6319444444444,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Sallanches (74256)</span><br />Population : 16184"
                }
            },
            "town-30032": {
                value: "16183",
                latitude: 43.807222222222,
                longitude: 4.6433333333333,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Beaucaire (30032)</span><br />Population : 16183"
                }
            },
            "town-34129": {
                value: "16166",
                latitude: 43.568888888889,
                longitude: 3.9086111111111,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Lattes (34129)</span><br />Population : 16166"
                }
            },
            "town-54528": {
                value: "16080",
                latitude: 48.675,
                longitude: 5.8916666666667,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Toul (54528)</span><br />Population : 16080"
                }
            },
            "town-31157": {
                value: "16042",
                latitude: 43.537777777778,
                longitude: 1.3436111111111,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Cugnaux (31157)</span><br />Population : 16042"
                }
            },
            "town-38193": {
                value: "15980",
                latitude: 45.619444444444,
                longitude: 5.2330555555556,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">L'Isle-d'Abeau (38193)</span><br />Population : 15980"
                }
            },
            "town-35051": {
                value: "15975",
                latitude: 48.120833333333,
                longitude: -1.6036111111111,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Cesson-Sévigné (35051)</span><br />Population : 15975"
                }
            },
            "town-29103": {
                value: "15903",
                latitude: 48.450833333333,
                longitude: -4.2494444444444,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Landerneau (29103)</span><br />Population : 15903"
                }
            },
            "town-42147": {
                value: "15899",
                latitude: 45.6075,
                longitude: 4.0652777777778,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Montbrison (42147)</span><br />Population : 15899"
                }
            },
            "town-19272": {
                value: "15838",
                latitude: 45.265833333333,
                longitude: 1.7722222222222,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Tulle (19272)</span><br />Population : 15838"
                }
            },
            "town-61169": {
                value: "15837",
                latitude: 48.748333333333,
                longitude: -0.56944444444444,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Flers (61169)</span><br />Population : 15837"
                }
            },
            "town-57306": {
                value: "15835",
                latitude: 49.329722222222,
                longitude: 6.0619444444444,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Hayange (57306)</span><br />Population : 15835"
                }
            },
            "town-91645": {
                value: "15830",
                latitude: 48.7475,
                longitude: 2.2627777777778,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Verrières-le-Buisson (91645)</span><br />Population : 15830"
                }
            },
            "town-94015": {
                value: "15825",
                latitude: 48.841111111111,
                longitude: 2.5222222222222,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Bry-sur-Marne (94015)</span><br />Population : 15825"
                }
            },
            "town-64260": {
                value: "15802",
                latitude: 43.358611111111,
                longitude: -1.7744444444444,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Hendaye (64260)</span><br />Population : 15802"
                }
            },
            "town-62108": {
                value: "15783",
                latitude: 50.408333333333,
                longitude: 1.5927777777778,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Berck (62108)</span><br />Population : 15783"
                }
            },
            "town-77337": {
                value: "15782",
                latitude: 48.854722222222,
                longitude: 2.6288888888889,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Noisiel (77337)</span><br />Population : 15782"
                }
            },
            "town-85109": {
                value: "15727",
                latitude: 46.871111111111,
                longitude: -1.0136111111111,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Les Herbiers (85109)</span><br />Population : 15727"
                }
            },
            "town-77186": {
                value: "15665",
                latitude: 48.408888888889,
                longitude: 2.7016666666667,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Fontainebleau (77186)</span><br />Population : 15665"
                }
            },
            "town-13039": {
                value: "15662",
                latitude: 43.436388888889,
                longitude: 4.9452777777778,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Fos-sur-Mer (13039)</span><br />Population : 15662"
                }
            },
            "town-37233": {
                value: "15651",
                latitude: 47.390833333333,
                longitude: 0.72805555555556,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Saint-Pierre-des-Corps (37233)</span><br />Population : 15651"
                }
            },
            "town-71014": {
                value: "15630",
                latitude: 46.951111111111,
                longitude: 4.2986111111111,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Autun (71014)</span><br />Population : 15630"
                }
            },
            "town-78124": {
                value: "15614",
                latitude: 48.908055555556,
                longitude: 2.1780555555556,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Carrières-sur-Seine (78124)</span><br />Population : 15614"
                }
            },
            "town-45208": {
                value: "15583",
                latitude: 47.996944444444,
                longitude: 2.7325,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Montargis (45208)</span><br />Population : 15583"
                }
            },
            "town-78642": {
                value: "15581",
                latitude: 48.979722222222,
                longitude: 1.9738888888889,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Verneuil-sur-Seine (78642)</span><br />Population : 15581"
                }
            },
            "town-56083": {
                value: "15545",
                latitude: 47.804166666667,
                longitude: -3.2788888888889,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Hennebont (56083)</span><br />Population : 15545"
                }
            },
            "town-29046": {
                value: "15540",
                latitude: 48.092222222222,
                longitude: -4.3302777777778,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Douarnenez (29046)</span><br />Population : 15540"
                }
            },
            "town-33056": {
                value: "15508",
                latitude: 44.910555555556,
                longitude: -0.6375,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Blanquefort (33056)</span><br />Population : 15508"
                }
            },
            "town-45302": {
                value: "15423",
                latitude: 47.951388888889,
                longitude: 1.8802777777778,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Saran (45302)</span><br />Population : 15423"
                }
            },
            "town-78418": {
                value: "15412",
                latitude: 48.908611111111,
                longitude: 2.1494444444444,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Montesson (78418)</span><br />Population : 15412"
                }
            },
            "town-78123": {
                value: "15389",
                latitude: 48.947777777778,
                longitude: 2.0386111111111,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Carrières-sous-Poissy (78123)</span><br />Population : 15389"
                }
            },
            "town-34057": {
                value: "15326",
                latitude: 43.636111111111,
                longitude: 3.9013888888889,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Castelnau-le-Lez (34057)</span><br />Population : 15326"
                }
            },
            "town-76157": {
                value: "15281",
                latitude: 49.440277777778,
                longitude: 1.0252777777778,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Canteleu (76157)</span><br />Population : 15281"
                }
            },
            "town-06161": {
                value: "15258",
                latitude: 43.658055555556,
                longitude: 7.1213888888889,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Villeneuve-Loubet (06161)</span><br />Population : 15258"
                }
            },
            "town-45155": {
                value: "15254",
                latitude: 47.688888888889,
                longitude: 2.6294444444444,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Gien (45155)</span><br />Population : 15254"
                }
            },
            "town-62765": {
                value: "15231",
                latitude: 50.748333333333,
                longitude: 2.2608333333333,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Saint-Omer (62765)</span><br />Population : 15231"
                }
            },
            "town-42186": {
                value: "15153",
                latitude: 45.529444444444,
                longitude: 4.6169444444444,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Rive-de-Gier (42186)</span><br />Population : 15153"
                }
            },
            "town-54304": {
                value: "15139",
                latitude: 48.685555555556,
                longitude: 6.1522222222222,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Laxou (54304)</span><br />Population : 15139"
                }
            },
            "town-65286": {
                value: "15102",
                latitude: 43.095,
                longitude: -0.045277777777778,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Lourdes (65286)</span><br />Population : 15102"
                }
            },
            "town-25031": {
                value: "15094",
                latitude: 47.482777777778,
                longitude: 6.8397222222222,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Audincourt (25031)</span><br />Population : 15094"
                }
            },
            "town-33075": {
                value: "15082",
                latitude: 44.882777777778,
                longitude: -0.6125,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Bruges (33075)</span><br />Population : 15082"
                }
            },
            "town-61006": {
                value: "15082",
                latitude: 48.744444444444,
                longitude: -0.020277777777778,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Argentan (61006)</span><br />Population : 15082"
                }
            },
            "town-13027": {
                value: "15079",
                latitude: 43.8825,
                longitude: 4.855,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Châteaurenard (13027)</span><br />Population : 15079"
                }
            },
            "town-95199": {
                value: "15075",
                latitude: 49.0275,
                longitude: 2.3266666666667,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Domont (95199)</span><br />Population : 15075"
                }
            },
            "town-85092": {
                value: "15043",
                latitude: 46.466944444444,
                longitude: -0.80638888888889,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Fontenay-le-Comte (85092)</span><br />Population : 15043"
                }
            },
            "town-02168": {
                value: "15020",
                latitude: 49.046388888889,
                longitude: 3.4030555555556,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Château-Thierry (02168)</span><br />Population : 15020"
                }
            },
            "town-97125": {
                value: "14998",
                latitude: 16.251388888889,
                longitude: -61.273888888889,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Saint-François (97125)</span><br />Population : 14998"
                }
            },
            "town-95563": {
                value: "14962",
                latitude: 49.016944444444,
                longitude: 2.2463888888889,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Saint-Leu-la-Forêt (95563)</span><br />Population : 14962"
                }
            },
            "town-93013": {
                value: "14943",
                latitude: 48.934444444444,
                longitude: 2.4244444444444,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Le Bourget (93013)</span><br />Population : 14943"
                }
            },
            "town-77131": {
                value: "14920",
                latitude: 48.815555555556,
                longitude: 3.0836111111111,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Coulommiers (77131)</span><br />Population : 14920"
                }
            },
            "town-83116": {
                value: "14907",
                latitude: 43.453333333333,
                longitude: 5.8619444444444,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Saint-Maximin-la-Sainte-Baume (83116)</span><br />Population : 14907"
                }
            },
            "town-68154": {
                value: "14903",
                latitude: 47.782222222222,
                longitude: 7.3480555555556,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Illzach (68154)</span><br />Population : 14903"
                }
            },
            "town-85194": {
                value: "14888",
                latitude: 46.496388888889,
                longitude: -1.7847222222222,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Les Sables-d'Olonne (85194)</span><br />Population : 14888"
                }
            },
            "town-56178": {
                value: "14860",
                latitude: 48.068611111111,
                longitude: -2.9627777777778,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Pontivy (56178)</span><br />Population : 14860"
                }
            },
            "town-54431": {
                value: "14832",
                latitude: 48.904444444444,
                longitude: 6.0541666666667,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Pont-à-Mousson (54431)</span><br />Population : 14832"
                }
            },
            "town-59043": {
                value: "14772",
                latitude: 50.7375,
                longitude: 2.7338888888889,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Bailleul (59043)</span><br />Population : 14772"
                }
            },
            "town-91326": {
                value: "14756",
                latitude: 48.688333333333,
                longitude: 2.3775,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Juvisy-sur-Orge (91326)</span><br />Population : 14756"
                }
            },
            "town-54578": {
                value: "14753",
                latitude: 48.673055555556,
                longitude: 6.1547222222222,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Villers-lès-Nancy (54578)</span><br />Population : 14753"
                }
            },
            "town-62643": {
                value: "14717",
                latitude: 50.703888888889,
                longitude: 1.5938888888889,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Outreau (62643)</span><br />Population : 14717"
                }
            },
            "town-54323": {
                value: "14707",
                latitude: 49.519722222222,
                longitude: 5.7605555555556,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Longwy (54323)</span><br />Population : 14707"
                }
            },
            "town-77258": {
                value: "14697",
                latitude: 48.836111111111,
                longitude: 2.6277777777778,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Lognes (77258)</span><br />Population : 14697"
                }
            },
            "town-94069": {
                value: "14647",
                latitude: 48.818333333333,
                longitude: 2.4347222222222,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Saint-Maurice (94069)</span><br />Population : 14647"
                }
            },
            "town-59139": {
                value: "14632",
                latitude: 50.125,
                longitude: 3.4116666666667,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Caudry (59139)</span><br />Population : 14632"
                }
            },
            "town-23096": {
                value: "14577",
                latitude: 46.170555555556,
                longitude: 1.8683333333333,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Guéret (23096)</span><br />Population : 14577"
                }
            },
            "town-59286": {
                value: "14569",
                latitude: 50.609166666667,
                longitude: 2.9869444444444,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Haubourdin (59286)</span><br />Population : 14569"
                }
            },
            "town-95539": {
                value: "14487",
                latitude: 48.998611111111,
                longitude: 2.3569444444444,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Saint-Brice-sous-Forêt (95539)</span><br />Population : 14487"
                }
            },
            "town-63178": {
                value: "14475",
                latitude: 45.544166666667,
                longitude: 3.2488888888889,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Issoire (63178)</span><br />Population : 14475"
                }
            },
            "town-44131": {
                value: "14450",
                latitude: 47.115555555556,
                longitude: -2.1033333333333,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Pornic (44131)</span><br />Population : 14450"
                }
            },
            "town-42279": {
                value: "14425",
                latitude: 45.499444444444,
                longitude: 4.24,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Saint-Just-Saint-Rambert (42279)</span><br />Population : 14425"
                }
            },
            "town-95427": {
                value: "14423",
                latitude: 48.973611111111,
                longitude: 2.3458333333333,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Montmagny (95427)</span><br />Population : 14423"
                }
            },
            "town-68376": {
                value: "14403",
                latitude: 47.8075,
                longitude: 7.3369444444444,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Wittenheim (68376)</span><br />Population : 14403"
                }
            },
            "town-22187": {
                value: "14393",
                latitude: 48.534444444444,
                longitude: -2.7708333333333,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Plérin (22187)</span><br />Population : 14393"
                }
            },
            "town-37208": {
                value: "14375",
                latitude: 47.366666666667,
                longitude: 0.72666666666667,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Saint-Avertin (37208)</span><br />Population : 14375"
                }
            },
            "town-60176": {
                value: "14364",
                latitude: 49.234444444444,
                longitude: 2.8875,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Crépy-en-Valois (60176)</span><br />Population : 14364"
                }
            },
            "town-59291": {
                value: "14358",
                latitude: 50.248055555556,
                longitude: 3.9244444444444,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Hautmont (59291)</span><br />Population : 14358"
                }
            },
            "town-02738": {
                value: "14320",
                latitude: 49.655833333333,
                longitude: 3.2872222222222,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Tergnier (02738)</span><br />Population : 14320"
                }
            },
            "town-01004": {
                value: "14316",
                latitude: 45.958055555556,
                longitude: 5.3577777777778,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Ambérieu-en-Bugey (01004)</span><br />Population : 14316"
                }
            },
            "town-85166": {
                value: "14316",
                latitude: 46.536111111111,
                longitude: -1.7727777777778,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Olonne-sur-Mer (85166)</span><br />Population : 14316"
                }
            },
            "town-77014": {
                value: "14287",
                latitude: 48.408888888889,
                longitude: 2.725,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Avon (77014)</span><br />Population : 14287"
                }
            },
            "town-53147": {
                value: "14264",
                latitude: 48.303055555556,
                longitude: -0.61361111111111,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Mayenne (53147)</span><br />Population : 14264"
                }
            },
            "town-21166": {
                value: "14233",
                latitude: 47.291111111111,
                longitude: 5.0072222222222,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Chenôve (21166)</span><br />Population : 14233"
                }
            },
            "town-93062": {
                value: "14194",
                latitude: 48.899166666667,
                longitude: 2.5230555555556,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Le Raincy (93062)</span><br />Population : 14194"
                }
            },
            "town-84019": {
                value: "14092",
                latitude: 44.280277777778,
                longitude: 4.7488888888889,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Bollène (84019)</span><br />Population : 14092"
                }
            },
            "town-28088": {
                value: "14035",
                latitude: 48.070833333333,
                longitude: 1.3377777777778,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Châteaudun (28088)</span><br />Population : 14035"
                }
            },
            "town-13015": {
                value: "14028",
                latitude: 43.454444444444,
                longitude: 5.4144444444444,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Bouc-Bel-Air (13015)</span><br />Population : 14028"
                }
            },
            "town-91182": {
                value: "13968",
                latitude: 48.618055555556,
                longitude: 2.4069444444444,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Courcouronnes (91182)</span><br />Population : 13968"
                }
            },
            "town-97230": {
                value: "13965",
                latitude: 14.738611111111,
                longitude: -60.963055555556,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">La Trinité (97230)</span><br />Population : 13965"
                }
            },
            "town-60471": {
                value: "13907",
                latitude: 49.581111111111,
                longitude: 2.9988888888889,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Noyon (60471)</span><br />Population : 13907"
                }
            },
            "town-74225": {
                value: "13892",
                latitude: 45.866111111111,
                longitude: 5.9444444444444,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Rumilly (74225)</span><br />Population : 13892"
                }
            },
            "town-78073": {
                value: "13880",
                latitude: 48.801388888889,
                longitude: 2.0316666666667,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Bois-d'Arcy (78073)</span><br />Population : 13880"
                }
            },
            "town-03095": {
                value: "13873",
                latitude: 46.134444444444,
                longitude: 3.4563888888889,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Cusset (03095)</span><br />Population : 13873"
                }
            },
            "town-29075": {
                value: "13845",
                latitude: 48.433611111111,
                longitude: -4.4008333333333,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Guipavas (29075)</span><br />Population : 13845"
                }
            },
            "town-31044": {
                value: "13832",
                latitude: 43.610277777778,
                longitude: 1.4986111111111,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Balma (31044)</span><br />Population : 13832"
                }
            },
            "town-51649": {
                value: "13826",
                latitude: 48.724722222222,
                longitude: 4.5844444444444,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Vitry-le-François (51649)</span><br />Population : 13826"
                }
            },
            "town-85060": {
                value: "13802",
                latitude: 46.504166666667,
                longitude: -1.7372222222222,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Château-d'Olonne (85060)</span><br />Population : 13802"
                }
            },
            "town-10323": {
                value: "13774",
                latitude: 48.515833333333,
                longitude: 3.7266666666667,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Romilly-sur-Seine (10323)</span><br />Population : 13774"
                }
            },
            "town-57160": {
                value: "13770",
                latitude: 49.205277777778,
                longitude: 6.6958333333333,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Creutzwald (57160)</span><br />Population : 13770"
                }
            },
            "town-30258": {
                value: "13767",
                latitude: 43.677777777778,
                longitude: 4.4311111111111,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Saint-Gilles (30258)</span><br />Population : 13767"
                }
            },
            "town-59421": {
                value: "13752",
                latitude: 50.703333333333,
                longitude: 3.1405555555556,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Mouvaux (59421)</span><br />Population : 13752"
                }
            },
            "town-50218": {
                value: "13723",
                latitude: 48.838055555556,
                longitude: -1.5869444444444,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Granville (50218)</span><br />Population : 13723"
                }
            },
            "town-91386": {
                value: "13710",
                latitude: 48.565277777778,
                longitude: 2.4361111111111,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Mennecy (91386)</span><br />Population : 13710"
                }
            },
            "town-14047": {
                value: "13702",
                latitude: 49.278611111111,
                longitude: -0.70388888888889,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Bayeux (14047)</span><br />Population : 13702"
                }
            },
            "town-13014": {
                value: "13696",
                latitude: 43.475555555556,
                longitude: 5.1680555555556,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Berre-l'Étang (13014)</span><br />Population : 13696"
                }
            },
            "town-27701": {
                value: "13688",
                latitude: 49.274444444444,
                longitude: 1.2102777777778,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Val-de-Reuil (27701)</span><br />Population : 13688"
                }
            },
            "town-06012": {
                value: "13684",
                latitude: 43.741944444444,
                longitude: 7.4236111111111,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Beausoleil (06012)</span><br />Population : 13684"
                }
            },
            "town-97404": {
                value: "13659",
                latitude: -21.266111111111,
                longitude: 55.366944444444,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">L'Étang-Salé (97404)</span><br />Population : 13659"
                }
            },
            "town-95019": {
                value: "13656",
                latitude: 48.987222222222,
                longitude: 2.4166666666667,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Arnouville (95019)</span><br />Population : 13656"
                }
            },
            "town-59014": {
                value: "13639",
                latitude: 50.371388888889,
                longitude: 3.5044444444444,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Anzin (59014)</span><br />Population : 13639"
                }
            },
            "town-29189": {
                value: "13587",
                latitude: 48.3725,
                longitude: -4.3705555555556,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Plougastel-Daoulas (29189)</span><br />Population : 13587"
                }
            },
            "town-81099": {
                value: "13558",
                latitude: 43.900555555556,
                longitude: 1.8983333333333,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Gaillac (81099)</span><br />Population : 13558"
                }
            },
            "town-03321": {
                value: "13545",
                latitude: 46.565833333333,
                longitude: 3.3544444444444,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Yzeure (03321)</span><br />Population : 13545"
                }
            },
            "town-66037": {
                value: "13528",
                latitude: 42.705555555556,
                longitude: 3.0072222222222,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Canet-en-Roussillon (66037)</span><br />Population : 13528"
                }
            },
            "town-33003": {
                value: "13511",
                latitude: 44.924722222222,
                longitude: -0.48666666666667,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Ambarès-et-Lagrave (33003)</span><br />Population : 13511"
                }
            },
            "town-57240": {
                value: "13481",
                latitude: 49.141666666667,
                longitude: 6.7988888888889,
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Freyming-Merlebach (57240)</span><br />Population : 13481"
                }
            }
        }
    });

    // Vars to keep track of current movement
    var mouseDragging = false;
    var mouseDown = false;

    // Detect mousedown event
    $(".zoom-on-click svg").mousedown(function () {
        mouseDown = true;
    });

    // If the mouse if moving, and mousedown was set, then user is dragging!
    $(".zoom-on-click svg").mousemove(function () {
        mouseDragging = mouseDown;
    });

    // On mouse up, check if user was dragging or only clicking
    // If not dragging, then zoom on position!
    $(".zoom-on-click svg").mouseup(function (e) {
        if (!mouseDragging) {
            // Get current mapael object
            var mapael = $(".zoom-on-click").data("mapael");
            // We need to convert the mouse coordinate to map coordinate
            // Fortunately, Mapael provides a handy function to do this for us!
            var newCoordinates = mapael.mapPagePositionToXY(e.pageX, e.pageY);

            // Zoom to this position
            $(".zoom-on-click").trigger('zoom', {
                fixedCenter: true,
                level: "+1",
                x: newCoordinates.x,
                y: newCoordinates.y
            });
        }
        // Reset vars
        mouseDragging = false;
        mouseDown = false;
    });

});
