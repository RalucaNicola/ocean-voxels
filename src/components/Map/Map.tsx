import * as styles from './Map.module.css';
import { Children, cloneElement, FC, useRef, useState, ReactNode, ReactElement, useEffect } from 'react';
import ISceneView from 'esri/views/SceneView';
import SceneView from '@arcgis/core/views/SceneView';
import WebScene from '@arcgis/core/WebScene';
import { ExaggeratedElevationLayer } from './ExaggeratedTerrain';
import Collection from '@arcgis/core/core/Collection';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/storeConfiguration';

interface MapProps {
  webmapId: string;
  children?: ReactNode;
}

const Map: FC<MapProps> = ({ webmapId, children }: MapProps) => {
  const mapDivRef = useRef<HTMLDivElement>();
  const [view, setView] = useState<ISceneView>();
  const bookmark = useSelector((state: RootState) => state.Map.bookmark);

  // map initialization
  useEffect(() => {
    try {
      const view = new SceneView({
        container: mapDivRef.current,
        map: new WebScene({
          portalItem: {
            id: webmapId
          }
        }),
        ui: { components: [] },
        alphaCompositingEnabled: true,
        qualityProfile: 'high',
        viewingMode: 'local',
        environment: {
          background: {
            type: 'color',
            color: [255, 0, 0, 0]
          },
          starsEnabled: false,
          atmosphereEnabled: false
        }
      });

      view.when(() => {
        setView(view);
        window['view'] = view;
        // add exaggerated terrain
        const elevationLayer = new ExaggeratedElevationLayer({ exaggeration: 40 });
        view.map.ground.layers = new Collection([elevationLayer]);
      });
    } catch (err) {
      console.error(err);
    }
    return () => {
      if (view) {
        view.destroy();
        setView(null);
      }
    };
  }, []);

  useEffect(() => {
    if (view && bookmark) {
      switch (bookmark) {
        case 1:
          view.goTo({
            position: [-16.38028963, -16.64164386, 67237282.25199],
            heading: 0.0,
            tilt: 0.5
          });
          view.map.ground.opacity = 1;
          break;
        case 2:
          view.goTo({
            position: [-387.18032814, -338.67150254, 26051305.87835],
            heading: 43.64,
            tilt: 63.3
          });
          view.map.ground.opacity = 0;
      }
    }
  }, [view, bookmark]);

  return (
    <>
      <div className={styles.mapContainer} ref={mapDivRef}></div>
      {view
        ? Children.map(children, (child: ReactNode) => {
            return cloneElement(child as ReactElement, {
              view
            });
          })
        : null}
    </>
  );
};

export default Map;
