const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/contactapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

//Menambah 1 Data
// const contact1 = new Contact({
//     nama: 'Ardillah Setiawan',
//     nohp: '081340804276',
//     email: 'ardisetiawan1305@gmail.com',
// });

// contact1.save().then((contact) => console.log(contact));