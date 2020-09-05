
const sample = (list) => {
    return list[Math.floor(Math.random() * list.length)];
}

const firstNames = ['Giuseppe', 'Giovanni', 'Antonio', 'Mario', 'Luigi', 'Francesco', 'Angelo', 'Vincenzo', 'Pietro', 'Salvatore', 'Carlo', 'Franco', 'Domenico', 'Bruno', 'Paolo', 'Michele', 'Giorgio', 'Aldo', 'Sergio', 'Luciano', 'Maria', 'Anna', 'Giuseppina', 'Rosa', 'Angela'];
const lastNames = ['Rossi', 'Ferrari', 'Russo', 'Bianchi', 'Esposito', 'Colombo', 'Romano', 'Ricci', 'Gallo', 'Greco', 'Conti', 'Marino', 'De Luca', 'Bruno', 'Costa', 'Giordano', 'Mancini', 'Lombardi', 'Barbieri', 'Moretti', 'Fontana', 'Rizzo', 'Santoro', 'Caruso', 'Mariani'];
const cities = ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Tweed Heads', 'Newcastle', 'Canberra', 'Sunshine Coast', 'Wollongong', 'Geelong', 'Hobart', 'Townsville', 'Cairns', 'Darwin', 'Toowoomba', 'Ballarat', 'Bendigo', 'Albury', 'Launceston', 'Mackay', 'Rockhampton', 'Bunbury', 'Coffs Harbour', 'Bundaberg'];
const emailProvider = ['gmail', 'hotmail', 'yahoo', 'hubspot', 'outlook', 'aol'];
const categories = ['arts', 'business', 'education', 'hospitality', 'law', 'medical', 'technology'];
const jobTitles = ['Accountant', 'Engineer', 'Teacher/Faculty/Tutor/Instructor', 'Writer', 'Consultant', 'Program Manager', 'Project Manager', 'Customer Service Representative', 'Business Development Manager', 'Account Manager/Account Executive', 'Recruiter', 'Sales Representative', 'Web Developer', 'Medical Coder', 'Territory Sales Manager', 'Nurse', 'Data Analyst', 'Editor', 'Case Manager', 'UX/UI Designer'];
const skills = ['Creativity', 'Interpersonal Communication', 'Critical Thinking', 'Problem Solving', 'Public Speaking', 'Customer Service', 'Teamwork', 'Communication', 'Collaboration', 'Accounting', 'Active Listening', 'Adaptability', 'Negotiation', 'Conflict Resolution', 'Decision-making', 'Empathy', 'Customer Service', 'Decision Making', 'Management', 'Leadership', 'Organization'];
const availability = [true, false];

const data = {
    users: [],
    categories: []
};

for (let i=0;i<50;i++) {

    const firstName = sample(firstNames);
    const lastName = sample(lastNames);

    const user = {
        id: i,
        firstName: firstName,
        lastName: lastName,
        address: {
            city: sample(cities)
        },
        contactDetail: {
            email: `${firstNames}.${lastName}@${sample(emailProvider)}.com`
        },
        category: Math.floor(Math.random() * categories.length),
        jobTitle: sample(jobTitles),
        skills: [sample(skills), sample(skills), sample(skills)],
        availability: sample(availability)
    };

    data.users.push(user);

}

for(let index in categories) {
    data.categories.push({
        id: index,
        description: categories[index]
    })
}

// const oldData = {
//   users: [
//       {
//           'id': 1,
//           'firstName': 'Marco',
//           'lastName': 'Pestrin',
//           'address': {
//               'city': 'Sydney'
//           },
//           'contactDetail': {
//               'email': 'pestrinmarco@gmail.com'
//           },
//           'category': 0,
//           'jobTitle': 'Web Developer',
//           'skills': ['react', 'angular', 'javascript'],
//           'availability': true
//       },
//       {
//           'id': 2,
//           'firstName': 'Giampaolo',
//           'lastName': 'Visentin',
//           'address': {
//               'city': 'Dallas'
//           },
//           'contactDetail': {
//               'email': 'giampa44@gmail.com'
//           },
//           'category': 2,
//           'jobTitle': 'Sistemista',
//           'skills': ['shell', 'linux', 'https'],
//           'availability': false
//       },
//       {
//           'id': 3,
//           'firstName': 'Renato',
//           'lastName': 'Facci',
//           'address': {
//               'city': 'London'
//           },
//           'contactDetail': {
//               'email': 'ren96@gmail.com'
//           },
//           'category': 2,
//           'jobTitle': 'Sistemista',
//           'skills': ['cablaggio reti', 'linux', 'VMWare'],
//           'availability': true
//       },
//       {
//           'id': 4,
//           'firstName': 'Samuele',
//           'lastName': 'Zoica',
//           'address': {
//               'city': 'Nairobi'
//           },
//           'contactDetail': {
//               'email': 'sam877@gmail.com'
//           },
//           'category': 0,
//           'jobTitle': 'FrontEnd Develoepr',
//           'skills': ['jQuery', 'HTML'],
//           'availability': false
//       },
//       {
//           'id': 5,
//           'firstName': 'Manuel',
//           'lastName': 'Sassone',
//           'address': {
//               'city': 'Houston'
//           },
//           'contactDetail': {
//               'email': 'sax@gmail.com'
//           },
//           'category': 1,
//           'jobTitle': 'PHP Developer',
//           'skills': ['php', 'Python', 'IA'],
//           'availability': true
//       },
//       {
//           'id': 6,
//           'firstName': 'Angelo',
//           'lastName': 'Iadi',
//           'address': {
//               'city': 'Parigi'
//           },
//           'contactDetail': {
//               'email': 'iadiange@gmail.com'
//           },
//           'category': 3,
//           'jobTitle': 'PM Senior Consultant',
//           'skills': ['agile', 'scrum', 'tasks'],
//           'availability': true
//       },

//   ],
//   categories: [{
//       'id': 0,
//       'description':'Sviluppo frontend',
//   },{
//       'id': 1,
//       'description':'Sviluppo backend',
//   },{
//       'id': 2,
//       'description':'DevOPS',
//   },{
//       'id': 3,
//       'description':'Project Manager',
//   }]

// }

export default data;
