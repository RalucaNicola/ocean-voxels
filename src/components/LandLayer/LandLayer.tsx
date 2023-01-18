import { FC, useEffect, useState } from 'react';

import ISceneView from 'esri/views/SceneView';
import IFeatureLayer from 'esri/layers/FeatureLayer';
import { useSelector } from 'react-redux';
import { selectOffsetFromGround } from '../../store/Map/selectors';

type Props = {
  view?: ISceneView;
};

const CountriesLayer: FC<Props> = ({ view }: Props) => {
  const offsetFromGround = useSelector(selectOffsetFromGround);
  const [layer, setLayer] = useState<IFeatureLayer>();

  useEffect(() => {
    if (layer && offsetFromGround) {
      layer.elevationInfo = {
        mode: 'absolute-height',
        offset: offsetFromGround + 1.5 * Math.pow(10, 6)
      };
    }
  }, [offsetFromGround]);

  // initialization
  useEffect(() => {
    if (view) {
      const layer = view.map.layers.find((layer) => layer.title === 'World Continents') as IFeatureLayer;
      layer.when(() => {
        setLayer(layer);
      });
    }
  }, [view]);

  return null;
};

export default CountriesLayer;
