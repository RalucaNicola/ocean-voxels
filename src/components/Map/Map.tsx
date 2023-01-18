import * as styles from './Map.module.css';
import { Children, cloneElement, FC, useRef, useState, ReactNode, ReactElement, useEffect } from 'react';
import ISceneView from 'esri/views/SceneView';
import SceneView from '@arcgis/core/views/SceneView';
import WebScene from '@arcgis/core/WebScene';
import { ExaggeratedElevationLayer } from './ExaggeratedTerrain';
import Collection from '@arcgis/core/core/Collection';

interface MapProps {
  webmapId: string;
  children?: ReactNode;
}

const Map: FC<MapProps> = ({ webmapId, children }: MapProps) => {
  const mapDivRef = useRef<HTMLDivElement>();
  const [view, setView] = useState<ISceneView>();

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
