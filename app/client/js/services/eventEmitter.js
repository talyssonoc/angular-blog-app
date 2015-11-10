const eventEmitterService = [
  '$rootScope',
  ($rootScope) => {
    return {
      on: (...args) => {
        $rootScope.$on(...args);
      },
      emit: (...args) => {
        $rootScope.$emit(...args);
      }
    }
  }
];

export default eventEmitterService;
