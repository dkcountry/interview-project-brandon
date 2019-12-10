const username = `1234-test`
const password = `1234test`

// Yes, this is bad practice. However, this is a substitude to show that this application
// can work on the backend too. So for the purpose of this take home, we are doing it like this
// I would not do such a thing in an actual production database. 

const yourMLabDataBaseAddress = ``;

module.exports.MONGODBADDRESS = yourMLabDataBaseAddress || `mongodb://${username}:${password}@ds253398.mlab.com:53398/keeper-tax-takehome`

module.exports.STATES = [
 'Alabama',
 'Alaska',
 'Arizona',
 'Arkansas',
 'California',
 'Colorado',
 'Connecticut',
 'Delaware',
 'Florida',
 'Georgia',
 'Hawaii',
 'Idaho',
 'Illinois',
 'Indiana',
 'Iowa',
 'Kansas',
 'Kentucky',
 'Louisiana',
 'Maine',
 'Maryland',
 'Massachusetts',
 'Michigan',
 'Minnesota',
 'Mississippi',
 'Missouri',
 'Montana',
 'Nebraska',
 'Nevada',
 'New Hampshire',
 'New Jersey',
 'New Mexico',
 'New York',
 'North Carolina',
 'North Dakota',
 'Ohio',
 'Oklahoma',
 'Oregon',
 'Pennsylvania',
 'Rhode Island',
 'South Carolina',
 'South Dakota',
 'Tennessee',
 'Texas',
 'Utah',
 'Vermont',
 'Virginia',
 'Washington',
 'West Virginia',
 'Wisconsin',
 'Wyoming',
]
