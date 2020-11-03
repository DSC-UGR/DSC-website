var dayjs = require('dayjs');
require('dayjs/locale/es');

export default {
  filters: {
    toDateString(value) {
      dayjs.locale('es');
      return dayjs(value).format('D [de] MMMM [de] YYYY');
    }
  }
}