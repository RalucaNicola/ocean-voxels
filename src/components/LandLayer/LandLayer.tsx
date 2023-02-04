import { FC, useEffect } from 'react';

import ISceneView from 'esri/views/SceneView';
import { useSelector } from 'react-redux';
import { selectOffsetFromGround, selectScaleEnabled } from '../../store/Map/selectors';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import { Point, Polygon } from '@arcgis/core/geometry';

import Graphic from '@arcgis/core/Graphic';
import { PolygonSymbol3D, FillSymbol3DLayer, PointSymbol3D, TextSymbol3DLayer } from '@arcgis/core/symbols';
import LineStylePattern3D from '@arcgis/core/symbols/patterns/LineStylePattern3D';

type Props = {
  view?: ISceneView;
};

const layer = new GraphicsLayer({ elevationInfo: { mode: 'absolute-height' } });

function createGraphics(altitude: number): Array<Graphic> {
  const z = altitude * 500;
  const polygon = new Polygon({
    rings: [
      [
        [-180, 90, z],
        [-180, -90, z],
        [180, -90, z],
        [180, 90, z],
        [-180, 90, z]
      ]
    ],
    spatialReference: {
      wkid: 4326
    }
  });
  const polygonGraphic = new Graphic({
    geometry: polygon,
    symbol: new PolygonSymbol3D({
      symbolLayers: [
        new FillSymbol3DLayer({
          material: { color: [255, 255, 255, 0.05] },
          outline: {
            size: 1,
            color: [255, 255, 255, 0.3],
            pattern: new LineStylePattern3D({
              style: 'solid'
            })
          }
        })
      ]
    })
  });
  const labelPoint = new Point({ longitude: 180, latitude: -90, z: z + 20000 });
  const labelGraphic = new Graphic({
    geometry: labelPoint,
    symbol: new PointSymbol3D({
      symbolLayers: [
        new TextSymbol3DLayer({
          material: { color: [255, 255, 255, 0.3] },
          text: `   ${altitude}m`,
          horizontalAlignment: 'left',
          verticalAlignment: 'baseline',
          size: 14,
          font: {
            family: `"Avenir Next", sans-serif`,
            decoration: 'underline',
            weight: 'bolder'
          }
        })
      ]
    })
  });
  return [polygonGraphic, labelGraphic];
}

const CountriesLayer: FC<Props> = ({ view }: Props) => {
  const offsetFromGround = useSelector(selectOffsetFromGround);
  const scaleEnabled = useSelector(selectScaleEnabled);

  useEffect(() => {
    if (layer && offsetFromGround) {
      layer.elevationInfo = {
        mode: 'absolute-height',
        offset: offsetFromGround * 1000
      };
    }
  }, [offsetFromGround]);

  useEffect(() => {
    if (layer) {
      layer.visible = scaleEnabled;
    }
  }, [scaleEnabled]);

  // initialization
  useEffect(() => {
    if (view) {
      view.map.add(layer);
      [-200, -2000, -4000].forEach((altitude) => {
        const graphics = createGraphics(altitude);
        layer.addMany(graphics);
      });
    }
  }, [view]);

  return null;
};

export default CountriesLayer;
