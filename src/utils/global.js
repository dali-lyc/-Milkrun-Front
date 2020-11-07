const Theme = 'macarons';
const styleJson = {
    "version": 8,
    "name": "hackathon",
    "metadata": {
        "mapbox:autocomposite": true,
        "mapbox:type": "template",
        "mapbox:sdk-support": {
            "android": "9.3.0",
            "ios": "5.10.0",
            "js": "1.10.0"
        },
        "mapbox:groups": {},
        "mapbox:uiParadigm": "layers",
        "mapbox:trackposition": false
    },
    "center": [10.574607513974684, 8.408189058163643],
    "zoom": 5.016049322964997,
    "bearing": 0,
    "pitch": 0,
    "sources": {
        "composite": {
            "url": "mapbox://zouyi100.0h0w70dp,zouyi100.2p72kv8z,zouyi100.6yfyxyue,zouyi100.2gtqy0uv,zouyi100.4ub23558,zouyi100.9tbic3ya",
            "type": "vector"
        }
    },
    "sprite": "mapbox://sprites/zouyi100/ckh3exfbq1tc519o1gnyjwqto/72plenai37r6d4kpoppuc9frl",
    "glyphs": "mapbox://fonts/zouyi100/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "Background",
            "type": "background",
            "layout": {},
            "paint": {"background-color": "hsl(87, 93%, 89%)"}
        },
        {
            "id": "Room",
            "type": "fill",
            "source": "composite",
            "source-layer": "Room-36h07m",
            "layout": {},
            "paint": {
                "fill-color": "hsla(204, 91%, 87%, 0.89)",
                "fill-outline-color": "hsla(0, 0%, 0%, 0)",
                "fill-translate": [0, 0]
            }
        },
        {
            "id": "Block Area",
            "type": "fill",
            "source": "composite",
            "source-layer": "Area-d6o6xl",
            "layout": {},
            "paint": {
                "fill-outline-color": "hsla(0, 11%, 57%, 0.64)",
                "fill-color": "hsla(0, 8%, 15%, 0.91)"
            }
        },
        {
            "id": "Milk Run 1",
            "type": "line",
            "source": "composite",
            "source-layer": "MilkRun1-2ic9j4",
            "layout": {"line-cap": "square"},
            "paint": {
                "line-color": "hsl(34, 100%, 42%)",
                "line-width": 2,
                "line-dasharray": [2, 0]
            }
        },
        {
            "id": "Milk Run 2",
            "type": "line",
            "source": "composite",
            "source-layer": "MilkRun2-0u94h8",
            "layout": {
                "line-cap": "square",
                "line-join": "round",
                "line-round-limit": 1.5
            },
            "paint": {
                "line-color": "hsl(271, 72%, 42%)",
                "line-dasharray": [2, 0],
                "line-width": 2
            }
        },
        {
            "id": "Station",
            "type": "circle",
            "source": "composite",
            "source-layer": "Station-26d31c",
            "layout": {},
            "paint": {
                "circle-radius": 4,
                "circle-color": "hsl(207, 91%, 46%)",
                "circle-blur": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    0,
                    0,
                    22,
                    0
                ],
                "circle-stroke-color": "hsl(0, 65%, 44%)",
                "circle-stroke-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    0,
                    0,
                    22,
                    0
                ]
            }
        },
        {
            "id": "Station Text",
            "type": "symbol",
            "source": "composite",
            "source-layer": "Station-26d31c",
            "layout": {
                "text-field": ["to-string", ["get", "StName"]],
                "text-size": 12,
                "text-offset": [0, 1]
            },
            "paint": {}
        },
        {
            "id": "Station Buffer",
            "type": "line",
            "source": "composite",
            "source-layer": "StationBuffer-4iiwvp",
            "layout": {},
            "paint": {"line-color": "hsl(54, 92%, 35%)"}
        }
    ],
    "created": "2020-11-04T13:04:14.682Z",
    "modified": "2020-11-06T11:34:20.224Z",
    "id": "ckh3exfbq1tc519o1gnyjwqto",
    "owner": "zouyi100",
    "visibility": "private",
    "draft": false
}
export default {
    Theme,
    styleJson
}