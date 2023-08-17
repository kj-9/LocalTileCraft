# LocalTileCraft

This repository is a practical example of the process for locally generating, editing, and exporting vector tiles from OpenStreetMap (OSM) data.

## Setup

Before diving into the repository, make sure you have the following installed:

- **go-pmtiles**: Install this essential tool by executing `make install-pmtiles` for macOS. Alternatively, you can download and install it from the [go-pmtiles releases](https://github.com/protomaps/go-pmtiles/releases) page. 
- **Docker**: Docker is required to run the Maputnik editor.
- **Task Runner**: We use [Task](https://taskfile.dev) as a task runner to streamline the workflow.

then run the following command to set up the environment:

```bash
task setup
```

## Obtaining OSM Data

Fetch the `osm.pbf` OSM data, for example, from Geofabrik, and place it in the `data/` directory. 
as example, you can run:

```bash
task dl-pbf
```

## Generating mbtiles

We utilize tilemaker to generate mbtiles from the OSM data:

```bash
task make-mbtiles
```

To preview the generated mbtiles:

```bash
task preview-mbtiles
```

## Converting mbtiles to pmtiles

We convert the mbtiles to pmtiles before proceeding with style editing and map image exporting,
since pmtiles are easy to host locally.

```bash
task convert-pmtiles
```

## Style Editing

For editing the map style, follow these steps:

1. Launch the Maputnik editor:

```bash
task run-maputnik
```

2. Open your preferred web browser and navigate to `http://localhost:8888`.
3. Within the Maputnik UI:
   - Click on "Open."
   - Choose "Upload" and select the style JSON file located in the `style/` directory.
   - Customize the style according to your preferences.

## Exporting Map Image

To export the map as an image, execute:

```bash
task run-export
```

This command will locally serve the web app for the exporting process.
