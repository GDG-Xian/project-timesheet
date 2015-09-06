var Vue = require('vue');

var vm = new Vue({
  el: '#timesheet',
  data: {
    tasks: [
      { name: 'alalalal', time: '13', unit: 'h' },
      { name: '12', time: '3', unit: 'h' }
    ]
  }
});