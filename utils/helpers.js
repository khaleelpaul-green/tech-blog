module.exports = {
    format_time: (date) => {
      return date.toLocaleTimeString();
    },
    // formats date as as M/D/YYYY
    format_date: function (date) {
      const month = new Date(date).getMonth();
      const formattedDate = new Date(date).getDate();
      const year = new Date(date).getFullYear();
  
      return `${month}/${formattedDate}/${year}`;
    }
  };