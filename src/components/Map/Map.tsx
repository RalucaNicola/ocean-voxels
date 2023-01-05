import * as styles from './Map.module.css';
import { Children, cloneElement, FC, useRef, useState, ReactNode, ReactElement, useEffect } from 'react';
import ISceneView from 'esri/views/SceneView';
import SceneView from '@arcgis/core/views/SceneView';
import WebScene from '@arcgis/core/WebScene';

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
        })
      });

      view.when(() => {
        setView(view);
        window['view'] = view;
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
