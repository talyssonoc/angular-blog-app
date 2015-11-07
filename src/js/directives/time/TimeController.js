class TimeController {
  static $inject = ['$scope'];

  constructor($scope) {
    var date = new Date();

    this.data = $scope.time = {};

    this.data.time = `
      ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()},
      ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}
    `;

    this.data.getTime = () => {
      return this.data.time;
    }
  }
}

export default TimeController;
