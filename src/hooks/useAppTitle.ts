import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app';
import { setTitle } from '@/features';

const useAppTitle = (newTitle?: string, withDocument?: boolean): string => {
  const dispatch = useAppDispatch();
  const { title: appTitle } = useAppSelector((state) => state.appHeader);

  const updateTitle = useCallback(
    (title: string, withDocument: boolean = true) => {
      dispatch(setTitle(title));

      if (title && withDocument) {
        document.title = title;
      }
    },
    [dispatch],
  );

  useEffect(() => {
    if (newTitle && newTitle !== appTitle) {
      updateTitle(newTitle, withDocument);
    }
  }, [appTitle, newTitle, updateTitle, withDocument]);

  return appTitle;
};

export default useAppTitle;
