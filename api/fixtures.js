const mongoose = require('mongoose');
const config = require('./config');

const User  = require('./models/User');
const Product = require('./models/Product');
const Category = require('./models/Category');

mongoose.connect(config.db.url + '/' + config.db.name, {useNewUrlParser: true });

const db = mongoose.connection;

db.once('open', async () => {
    try {
        await db.dropCollection('users');
        await db.dropCollection('products');
        await db.dropCollection('categories');
    } catch (e) {
        console.log('Collection were not present , skipping drop...');
    }

    console.log('collection is dropped');

    const [user] = await User.create({
        username: 'user1',
        password: '123',
        displayname: 'Petr',
        phone: '+996774787878',
        role: 'user'
    }, {
        username: 'user2',
        password: '123',
        displayname: 'Ivan',
        phone: '+996555545454',
        role: 'user'
    });
    console.log('use created');

    const [cpus, gpus, motherboards] = await Category.create({
        title: 'CPUs',
        description: 'Here description for cpus'
    }, {
        title: 'GPUs',
        description: 'Here is description for GPUs'
    },{
        title: 'Matherboards',
        description: 'Here is description for motherboards'
    });
    console.log('categories created');

    const [gtx2080, gtx2080Ti, corei9, corei7, asuss800, abitp4] = await Product.create({
        title: 'gtx 2080',
        price: 1000,
        description: 'powerful gpu',
        image: "gpu.jpg",
        category: gpus._id,
        userId: user._id
    }, {
        title: 'gtx 2080Ti',
        price: 1000,
        description: 'top gpu',
        image: "gpu.jpg",
        category: gpus._id,
        userId: user._id
    }, {
        title: 'Core i 9',
        price: 1000,
        description: 'top cpu',
        image: "cpu.jpg",
        category: cpus._id,
        userId: user._id
    }, {
        title: 'Core i 7',
        price: 1000,
        description: 'powerful cpu',
        image: "cpu.jpg",
        category: cpus._id,
        userId: user._id
    }, {
        title: 'asuss800',
        price: 1000,
        description: 'top motherboard',
        image: "motherboard.jpg",
        category: motherboards._id,
        userId: user._id
    }, {
        title: 'abitp4',
        price: 1000,
        description: 'powerful motherboard',
        image: "motherboard.jpg",
        category: motherboards._id,
        userId: user._id
    });
    console.log('products were created');
    db.close();
});