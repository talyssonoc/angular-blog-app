const restmodConfig = [
  'restmodProvider',
  (restmodProvider) => {
    restmodProvider.rebase({
      $config: {
        style: 'MyOwn',
        primaryKey: 'id',
        jsonLinks: '.'
      }
    });
  }
];

export default restmodConfig;
