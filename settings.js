/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/
const fs = require('fs-extra');
const path = require('path');
if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}
const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VU2bKiSBT8l3rVaFllibgRAyiLqAi4oBPzUEABpQgIhYod/vsE3r59+2Gm585bLSey8uTJrO+gKHGDbNQB+TuoanyFBPVL0lUIyEBtkwTVYAhiSCCQAWXHkVYF4znFwEckPMp6px7rWecnwabI47gY7YN5WIwkffEGnkNQtWGOo98AWodBfrkMtvWcGfGesYNTfHloaxzaSy+aZ2Ob26idsUe7HfcGnj0ixDUu0mmVoTOqYW6jbgVx/TX6J2fNjCixWpuWb+fxVNXJeL3kBzZtugK6HIo5aXRpI5RB+jX6rWdfKnosmOW9UZN1a8y6djlQu6qbls3RHky0qc8nVhAy7jv9BqcFiq0YFQST7su6nzVxVJSzVCP0aLm+MKt5NNAFJ2d3JK2CnbH39uY6NF1xOv0a8TqWGDWAflubA+aUM34U6PlNH7fbu4mJkxWGwE1WZjHSrV+Jr+oPr5z+j+7iarGhDU2ptmHAZbropmNPLzXmYY4oTwiTZEpTZz+Ds+D0NfoTd51PpDnNSQKEesrG273Ebk/8oVx1xKVsP7vRxYbi3U75pA9JW/+O5WqzbQZp13ThQRhRemqpmVlzyOTMyHNWg4OJndV1paue4Zg8T6qZS51nYT5b5+WevsXtYe0dzykbXwtGfzyo+LDQ0sx9e3V0Qp0VA5l+DkGNUtyQGhJcFv0ZIwwBjK8+impEXuoCl21N6Wrs581cjcdrLmDcUWwqzZiE6/2qmTnnqcHNYJ5o7hsYgqouI9Q0KDZxQ8q6W6CmgSlqgPznX0NQoDt5n1v/GksPQYLrhmyKtspLGH8M9eMSRlHZFsTvikjrF6gGMvV5jAjBRdr0MrYFrKMMX5GWQdIAOYF5g342iGoUA5nULfoZWq2Me91tWvCms6kAhuD8mgeOgQwYnhM4nmNpgeVkQfqj+XbrYWFVfSsQAUOQv8polhEkhqFFluFplukr+4vnT4Y9YIwIxHkDZKBZZ1tsS2O6gHcs3gxDOaWKlirgs6MPZ7xLbwi1G15ueLmdJZWuRJ3FTKyJfmWv0mjfHi6+vc4T47Ljd9bbP4AAGQT71XGk8qcgKp1lcDPY4D7O6bk3m+zY5DKhIuIe4Q7f8KLz9zUdzK/OY0b228EkO7jxiJPOjjDJBm1Q3aOJ6qZO3Tlqb6MhiNEVR+jXx85Lq6Td0CJE5BlRTLCaSOJ842phcrIfM9sSdo5XbG+VzvHVZNcaueHfqJtunfybhXYL5SDCRUhxyugwPUoH55Qdt5ny7tlXZvIffxV+2amfVb9NMHpFv4D9BP97du/Ee4tRz+EvGD8+k38JpOq1Y8oYN9Zx6wdjzzUXeJl2yj2UhFHCzM/whE98cL/k7RaD5/OvIahySJKyPgMZwCKuSxyDIajLtvesVSTlbx7TlI2lKemy7zyHDVE+c7DGZ9QQeK6ATAsCRYuMOObeq1Z1WZmwyYAMWE86sFJv6k6pKp9A8hEroEwpRXFOCXj+DdpjWqNxBwAA';
const dev = process.env.OWNER_NUMBER || '254745431734';
const { Sequelize } = require('sequelize'); 
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; 
const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {  
  database,  
  dev,
  session,
};

//must run
