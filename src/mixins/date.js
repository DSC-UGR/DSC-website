var moment = require('moment');
export default {
  filters: {
    toDateString(value) {
      moment.locale('es');
      return moment(value).format('LL');
    }
  }
}