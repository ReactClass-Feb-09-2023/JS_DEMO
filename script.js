// select the correct variable declaration, and datatype / structure for the following

// - email to, cc, subject, body
// - email body
// - calendar upcoming events, each event has title, time, and meeting-url
// - products list, each product has a name, tagline (description), and stock-qty
// - todo list, each todo has subject, status, start date, end date

// Solutions:

// - email body
const emailBody =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sunt, veritatis quod dicta accusamus illum at nesciunt repudiandae id fugiat incidunt maxime eaque excepturi iusto? Doloribus aut laboriosam esse laborum libero animi voluptate quam minus quidem, velit, excepturi voluptatibus commodi eum amet facilis ab distinctio perspiciatis nobis. Magni, eos quo.'

// email to, cc, subject, body
const email = {
  to: ['john.doe@email.com', 'Lili@email.com'],
  cc: ['william@email.com', 'max@email.com'],
  subject: 'Lorem, ipsum dolor.',
  body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique rem ad optio eius officia, doloribus rerum eligendi.'
}

// - calendar upcoming events, each event has title, time, and meeting-url
const Event1 = new Map()
Event1.set('uuid', 'id2...........')
Event1.set('name', 'event1')
Event1.set('time', '17:00')
Event1.set('url', 'https://daturl.com/datpage.html')

const Event2 = new Map()
Event1.set('uuid', 'id2...........')
Event1.set('name', 'event2')
Event1.set('time', '16:00')
Event1.set('url', 'https://datsameurl.com/datpage.html')

const calendar = new Set()
calendar.add(Event1)
calendar.add(event2)

// - products list, each product has a name, tagline (description), and stock-qty
let products = [
  {
    id: '0c4d40a6-ca4c-46e6-942e-5477e8c7f473',
    name: 'Product A',
    tagline: 'Description of Product A',
    stockQty: 10
  },
  {
    id: 'cf13fc94-03fb-4415-a3e5-b74038ea7ea9',
    name: 'Product B',
    tagline: 'Description of Product B',
    stockQty: 5
  },
  {
    id: '357ea31e-fa42-4d4e-9565-ad7295b2f1de',
    name: 'Product C',
    tagline: 'Description of Product C',
    stockQty: 2
  }
]

// - todo list, each todo has subject, status, start date, end date
const todoList = [
  {
    subject: 'Lorem, ipsum dolor.',
    isComplete: false,
    startDate: '12/01/2023',
    endDate: null
  },
  {
    subject: 'Lorem, ipsum dolor.ssasfsdfdsafdsafsa',
    isComplete: true,
    startDate: '12/01/2023',
    endDate: '13/01/2023'
  }
]
