import BaseElevationLayer from '@arcgis/core/layers/BaseElevationLayer';
import ElevationLayer from '@arcgis/core/layers/ElevationLayer';
const url = 'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/TopoBathy3D/ImageServer';

type ElevationTileData = {
  values: number[];
  width: number;
  height: number;
};

export const ExaggeratedElevationLayer = (BaseElevationLayer as any).createSubclass({
  properties: {
    exaggeration: null
  },
  load: function () {
    // TopoBathy3D contains elevation values for both land and ocean ground
    this._elevation = new ElevationLayer({
      url
    });
    // wait for the elevation layer to load before resolving load()
    this.addResolvingPromise(
      this._elevation.load().then(() => {
        // get tileInfo, spatialReference and fullExtent from the elevation service
        // this is required for elevation services with a custom spatialReference
        this.tileInfo = this._elevation.tileInfo;
        this.spatialReference = this._elevation.spatialReference;
        this.fullExtent = this._elevation.fullExtent;
      })
    );
    return this;
  },
  // Fetches the tile(s) visible in the view
  fetchTile: function (level: number, row: number, col: number, options: { signal: AbortSignal }) {
    // calls fetchTile() on the elevationlayer for the tiles
    // visible in the view
    return this._elevation.fetchTile(level, row, col, options).then(
      function (data: ElevationTileData) {
        for (let i = 0; i < data.values.length; i++) {
          data.values[i] *= this.exaggeration;
        }
        return data;
      }.bind(this)
    );
  }
});
