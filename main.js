mapboxgl.accessToken = "pk.eyJ1IjoiZGVubmlzeWFrb3ZsZXY0MCIsImEiOiJjbHMyNnViazIwMHB5MmpvNHlvc3B2bDQ2In0.nTDRJJnhgM_EW8tSwyOchg";

const map = new mapboxgl.Map({
	container: 'my-map', // container ID
	style: 'mapbox://styles/dennisyakovlev40/clskppghq03u401p2c3184488', // my edited monochrone
	center: [-73.9, 40.7], // starting position [lng, lat], aim at NYC
	zoom: 9, // starting tile zoom
});

map.on("load", () => {

    // add all our sources statically
    map.addSource('1-geojson', {
        'type': 'geojson',
        'data': {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "coordinates": [
                    [
                      [
                        -74.2226378094223,
                        40.64788685121201
                      ],
                      [
                        -74.28392802773485,
                        40.488973047910434
                      ],
                      [
                        -73.96679661734002,
                        40.486942643214746
                      ],
                      [
                        -73.59902427820455,
                        40.57303014223825
                      ],
                      [
                        -73.4486127367212,
                        40.70219380188598
                      ],
                      [
                        -73.50353525723771,
                        40.85078857163836
                      ],
                      [
                        -73.81150109308706,
                        40.93531743097344
                      ],
                      [
                        -74.01228194207478,
                        40.91981780082892
                      ],
                      [
                        -74.22448277130232,
                        40.771352292046146
                      ],
                      [
                        -74.2336339422296,
                        40.69527542731734
                      ],
                      [
                        -74.2226378094223,
                        40.64788685121201
                      ]
                    ]
                  ],
                  "type": "Polygon"
                }
              }
            ]
          }
    });
    map.addSource('2-geojson', {
        'type': 'geojson',
        'data': {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "coordinates": [
                    [
                      [
                        -74.04833103280794,
                        40.6304460214015
                      ],
                      [
                        -73.9476418881411,
                        40.581590792531756
                      ],
                      [
                        -73.5811724410123,
                        40.59008838573965
                      ],
                      [
                        -73.45817639762679,
                        40.71000250168771
                      ],
                      [
                        -73.51004656538451,
                        40.843379164745215
                      ],
                      [
                        -73.62038462794696,
                        40.88151392204557
                      ],
                      [
                        -73.66371570331683,
                        40.86672770070456
                      ],
                      [
                        -73.93784275980173,
                        40.76722703161715
                      ],
                      [
                        -74.04833103280794,
                        40.6304460214015
                      ]
                    ]
                  ],
                  "type": "Polygon"
                },
                "id": 1
              }
            ]
          }
    });
    map.addSource('3-geojson', {
        'type': 'geojson',
        'data': {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "coordinates": [
                    [
                      [
                        -73.81156075528668,
                        40.592507668672255
                      ],
                      [
                        -73.59677918860005,
                        40.624067137736404
                      ],
                      [
                        -73.47492436673699,
                        40.709201377237406
                      ],
                      [
                        -73.51659445512114,
                        40.83296297114583
                      ],
                      [
                        -73.61900164272383,
                        40.87073088314901
                      ],
                      [
                        -73.85036136975877,
                        40.79211968307649
                      ],
                      [
                        -73.81156075528668,
                        40.592507668672255
                      ]
                    ]
                  ],
                  "type": "Polygon"
                }
              }
            ]
          }
    });
    map.addSource('4-geojson', {
        'type': 'geojson',
        'data': {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "coordinates": [
                    [
                      [
                        -73.65112227617468,
                        40.636496460546056
                      ],
                      [
                        -73.55715182636786,
                        40.66137069682634
                      ],
                      [
                        -73.54915790637212,
                        40.706665229137485
                      ],
                      [
                        -73.62710987383839,
                        40.716598130247576
                      ],
                      [
                        -73.71086574679802,
                        40.669659264825555
                      ],
                      [
                        -73.65112227617468,
                        40.636496460546056
                      ]
                    ]
                  ],
                  "type": "Polygon"
                }
              }
            ]
          }
    });
    map.addSource('5-geojson', {
        'type': 'geojson',
        'data': {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "coordinates": [
                    [
                      [
                        -73.90911236533164,
                        40.594748356771504
                      ],
                      [
                        -73.85093051762986,
                        40.66246748320188
                      ],
                      [
                        -73.96925994783064,
                        40.702181203394986
                      ],
                      [
                        -74.01582926894464,
                        40.66834758567896
                      ],
                      [
                        -74.04491207556731,
                        40.62714415092532
                      ],
                      [
                        -73.9886465262694,
                        40.58591061311938
                      ],
                      [
                        -73.90911236533164,
                        40.594748356771504
                      ]
                    ]
                  ],
                  "type": "Polygon"
                }
              }
            ]
          }
    });
    map.addSource('6-geojson', {
        'type': 'geojson',
        'data': {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "coordinates": [
                    [
                      [
                        -73.93573620723409,
                        40.60996780259933
                      ],
                      [
                        -73.90815390053028,
                        40.62152801055842
                      ],
                      [
                        -73.9072060867916,
                        40.65079359080323
                      ],
                      [
                        -73.942115691477,
                        40.656631978459615
                      ],
                      [
                        -73.96851246140848,
                        40.64435461984016
                      ],
                      [
                        -73.96677853996363,
                        40.618903962284776
                      ],
                      [
                        -73.93573620723409,
                        40.60996780259933
                      ]
                    ]
                  ],
                  "type": "Polygon"
                }
              }
            ]
          }
    });
    map.addSource('7-geojson', {
        'type': 'geojson',
        'data': {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "coordinates": [
                    -73.94775251604139,
                    40.63326473511427
                  ],
                  "type": "Point"
                }
              },
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "coordinates": [
                    [
                      [
                        -73.94558848134709,
                        40.61955572564554
                      ],
                      [
                        -73.92219535701291,
                        40.622293057783935
                      ],
                      [
                        -73.90862541897995,
                        40.6254090047064
                      ],
                      [
                        -73.91324155201058,
                        40.64995643998171
                      ],
                      [
                        -73.93663373474548,
                        40.65249839228798
                      ],
                      [
                        -73.96747778340333,
                        40.647118429587266
                      ],
                      [
                        -73.98364143466598,
                        40.63786920052473
                      ],
                      [
                        -73.97195876457467,
                        40.61974621769082
                      ],
                      [
                        -73.94558848134709,
                        40.61955572564554
                      ]
                    ]
                  ],
                  "type": "Polygon"
                }
              }
            ]
          }
    });
    map.addSource('8-geojson', {
        'type': 'geojson',
        'data': {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "coordinates": [
                    -73.94775251604139,
                    40.63326473511427
                  ],
                  "type": "Point"
                }
              },
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "coordinates": [
                    [
                      [
                        -73.94760452855762,
                        40.630030003734134
                      ],
                      [
                        -73.91825321562591,
                        40.632082612496134
                      ],
                      [
                        -73.91935803945572,
                        40.64052024387763
                      ],
                      [
                        -73.94850606826407,
                        40.638390922386975
                      ],
                      [
                        -73.94760452855762,
                        40.630030003734134
                      ]
                    ]
                  ],
                  "type": "Polygon"
                }
              }
            ]
          }
    });
    map.addSource('9-geojson', {
        'type': 'geojson',
        'data': {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "coordinates": [
                    -73.94775251604139,
                    40.63326473511427
                  ],
                  "type": "Point"
                }
              },
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "coordinates": [
                    -73.92234556707348,
                    40.63435084662507
                  ],
                  "type": "Point"
                }
              },
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "coordinates": [
                    [
                      [
                        -73.92520007726112,
                        40.630707596838704
                      ],
                      [
                        -73.92036680787325,
                        40.630904449914055
                      ],
                      [
                        -73.92072364333013,
                        40.633218482865914
                      ],
                      [
                        -73.92250775558328,
                        40.63321849306669
                      ],
                      [
                        -73.92266994058289,
                        40.635557028983385
                      ],
                      [
                        -73.92571906705842,
                        40.63523701771493
                      ],
                      [
                        -73.92520007726112,
                        40.630707596838704
                      ]
                    ]
                  ],
                  "type": "Polygon"
                }
              }
            ]
          }
    });
    map.addSource('10-geojson', {
        'type': 'geojson',
        'data': {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "coordinates": [
                    -73.94775251604139,
                    40.63326473511427
                  ],
                  "type": "Point"
                }
              },
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "coordinates": [
                    -73.92258072874608,
                    40.632701531700775
                  ],
                  "type": "Point"
                }
              }
            ]
          }
    });
    map.addSource('11-geojson', {
        'type': 'geojson',
        'data': {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "coordinates": [
                    -73.94775251604139,
                    40.63326473511427
                  ],
                  "type": "Point"
                }
              },
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "coordinates": [
                    -73.92258072874608,
                    40.632701531700775
                  ],
                  "type": "Point"
                }
              }
            ]
          }
    });
      
    var i = 0;
    const interval = setInterval(function() {
        if (i!=0 && i%12==0)
        {
            for (var j=1; j!=12; ++j)
            {
                map.removeLayer({
                    'id': `${i%12}-geojson-lyr-inner`
                });
                map.removeLayer({
                    'id': `${i%12}-geojson-lyr-border`
                });

            }
        }

        // add polygon, taken steaight from link in source
        // i like the syling as given, so keep it
        map.addLayer({
            'id': `${(i+1)%12}-geojson-lyr-inner`,
            'type': 'fill',
            'source': `${(i+1)%12}-geojson`, // source ref
            'layout': {},
            'paint': {
                'fill-color': '#0080ff',
                'fill-opacity': 0.5
            }
        });
        map.addLayer({
            'id': `${(i+1)%12}-geojson-lyr-border`,
            'type': 'line',
            'source': `${(i+1)%12}-geojson`, // source ref
            'layout': {},
            'paint': {
                'line-color': '#000',
                'line-width': 3
            }
        });
        console.log('done')
        i += 1;
    }, 2000); // execute on intermal every 2000 ms (2 seconds)
});
