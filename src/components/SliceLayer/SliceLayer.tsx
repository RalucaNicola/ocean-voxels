import { useSelector } from 'react-redux';
import { FC, useEffect, useRef, useState } from 'react';
import ISceneView from 'esri/views/SceneView';
import SliceViewModel from '@arcgis/core/widgets/Slice/SliceViewModel';
import { VERTICAL_SLICE_PLANE, HORIZONTAL_SLICE_PLANE } from '../../config';
import { selectSliceEnabled, selectSlicePlaneOrientation } from '../../store/Map/selectors';
import SlicePlane from '@arcgis/core/analysis/SlicePlane';
import Point from '@arcgis/core/geometry/Point';
import { watch } from '@arcgis/core/core/reactiveUtils';
import { SlicePlaneInfo } from '../../types/types';

type Props = {
  view?: ISceneView;
};

const getSlicePlane = (slicePlaneInfo: SlicePlaneInfo) => {
  const { latitude, longitude, z, tilt, width, height, heading } = slicePlaneInfo;
  return new SlicePlane({
    position: new Point({
      latitude,
      longitude,
      z
    }),
    tilt,
    width,
    height,
    heading
  });
};

const SliceLayer: FC<Props> = ({ view }: Props) => {
  const [slicePlane, setSlicePlane] = useState(VERTICAL_SLICE_PLANE);
  const sliceEnabled = useSelector(selectSliceEnabled);
  const slicePlaneOrientation = useSelector(selectSlicePlaneOrientation);
  const sliceViewmodel = useRef(null);
  useEffect(() => {
    if (sliceViewmodel.current) {
      if (sliceEnabled) {
        sliceViewmodel.current.shape = getSlicePlane(slicePlane);
        sliceViewmodel.current.tiltEnabled = true;
      } else {
        sliceViewmodel.current.clear();
      }
    }
  }, [sliceEnabled, sliceViewmodel]);

  useEffect(() => {
    if (sliceViewmodel.current) {
      if (sliceEnabled) {
        if (slicePlaneOrientation === 'horizontal') {
          sliceViewmodel.current.shape = getSlicePlane(HORIZONTAL_SLICE_PLANE);
          setSlicePlane(HORIZONTAL_SLICE_PLANE);
        } else if (slicePlaneOrientation === 'vertical') {
          sliceViewmodel.current.shape = getSlicePlane(VERTICAL_SLICE_PLANE);
          setSlicePlane(VERTICAL_SLICE_PLANE);
        }
      }
    }
  }, [slicePlaneOrientation]);

  useEffect(() => {
    if (view) {
      if (sliceViewmodel.current) {
        sliceViewmodel.current.destroy();
      }
      sliceViewmodel.current = new SliceViewModel({ view });
      const handle = watch(
        () => sliceViewmodel.current.shape,
        (shape) => {
          if (shape) {
            setSlicePlane({
              latitude: shape.position.latitude,
              longitude: shape.position.longitude,
              z: shape.position.z,
              tilt: shape.tilt,
              width: shape.width,
              height: shape.height,
              heading: shape.heading
            });
          }
        }
      );
      return () => handle.remove();
    }
  }, [view]);

  return null;
};

export default SliceLayer;
