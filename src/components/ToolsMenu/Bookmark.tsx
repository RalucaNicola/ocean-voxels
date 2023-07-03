import '@esri/calcite-components/dist/components/calcite-button';
import { CalciteButton } from '@esri/calcite-components-react';

import { setBookmark } from '../../store/Map/reducer';
import { useDispatch } from 'react-redux';

const Bookmark = ({ id, title }: { id: Number; title: string }) => {
  const dispatch = useDispatch();
  return (
    <CalciteButton
      appearance='outline'
      iconStart='bookmark'
      onClick={() => {
        dispatch(setBookmark(id));
      }}
    >
      {title}
    </CalciteButton>
  );
};

export default Bookmark;
