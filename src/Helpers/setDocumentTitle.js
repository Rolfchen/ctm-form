// @flow

type SetDocumentTitle = (title: string) => void;

export const setDocumentTitle: SetDocumentTitle = (title) => {
  document.title = title;
};
