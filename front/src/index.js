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

// apply pmtiles source
const pmtilesSource = {
    "openmaptiles": {
        "type": "vector",
        "url": `pmtiles://${location.protocol}//${location.host}/kyushu-latest.pmtiles` // pmtiles file at public folder
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
