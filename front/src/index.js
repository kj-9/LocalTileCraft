import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import {
	MaplibreExportControl,
	Size,
	PageOrientation,
	Format,
	DPI
} from '@watergis/maplibre-gl-export';
import * as pmtiles from "pmtiles";

import style from '../../style/osmt-kumejima.json' // change style here

// URL for pmtiles file hosted on the web
// pmtiles file is at public folder in source code, and it is copied to dist folder when build
// it should hosted on the web server at the same location as index.html
const pmtilesURL = `pmtiles://${location.href}/${import.meta.env.VITE_BASE_NAME}.pmtiles` 

console.log(`Loading pmtiles at ${pmtilesURL}...`)
// apply pmtiles source
const pmtilesSource = {
    "openmaptiles": {
        "type": "vector",
        "url": pmtilesURL
    }
}
style.sources = pmtilesSource;


// add pmtiles protocol
let protocol = new pmtiles.Protocol();
maplibregl.addProtocol("pmtiles",protocol.tile);


const map = new maplibregl.Map({
	container: 'map',
	style: style,
});
map.addControl(new maplibregl.NavigationControl({}), 'top-right');
map.addControl(
	new MaplibreExportControl({
		PageSize: Size.A3,
		PageOrientation: PageOrientation.Portrait,
		Format: Format.PNG,
		DPI: DPI[96],
		Crosshair: true,
		PrintableArea: true,
		Local: 'en'
	}),
	'top-right'
);
