const setTitleService = [
  '$document',
  ($document) => {
    const setTitle = (title) => {
      $document.prop('title', title);
    };

    return setTitle;
  }
];

export default setTitleService;
