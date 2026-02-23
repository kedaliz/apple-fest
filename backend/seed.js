const mongoose = require('mongoose');
require('dotenv').config();

const Vendor = require('./models/Vendor');
const Event = require('./models/Event');
const Festival = require('./models/Festival');

const sampleVendors = [
    {
        name: "Apple Orchard Fresh Stand",
        category: "food",
        description: "Fresh apples, cider, and apple-based products from local orchards",
        image: "/images/apples-pile-close.jpg",
        contact: "(607) 555-0101",
        hours: "10am - 6pm Fri-Sun"
    },
    {
        name: "The Cider House",
        category: "food",
        description: "Hot and cold apple ciders, fresh juice, and seasonal drinks",
        image: "/images/apple-cider.jpg",
        contact: "(607) 555-0102",
        hours: "12pm - 6pm Fri-Sun"
    },
    {
        name: "Apple Pie Bakery",
        category: "food",
        description: "Homemade apple pies, turnovers, fritters, and baked goods",
        image: "/images/cider-donuts-vertical.jpg",
        contact: "(607) 555-0103",
        hours: "10am - 6pm Fri-Sun"
    },
    {
        name: "Handmade Wood Crafts",
        category: "craft",
        description: "Beautiful wooden apple cutting boards and kitchen items",
        image: "/images/jar-stand.jpg",
        contact: "(607) 555-0104",
        hours: "10am - 6pm Fri-Sun"
    },
    {
        name: "Fall Fiber Arts",
        category: "craft",
        description: "Hand-knitted sweaters, scarves, and apple-themed textiles",
        image: "/images/craft-earrings.jpg",
        contact: "(607) 555-0105",
        hours: "11am - 5pm Fri-Sun"
    },
    {
        name: "Artisan Ceramics",
        category: "craft",
        description: "Handcrafted pottery including apple-shaped bowls and dinnerware",
        image: "/images/jewelry.jpg",
        contact: "(607) 555-0106",
        hours: "10am - 6pm Fri-Sun"
    },
    {
        name: "The Ithaca Band",
        category: "entertainment",
        description: "Live folk and acoustic music performances",
        image: "/images/applefest-event.jpg",
        contact: "info@ithacanband.com",
        hours: "Performances at 1pm, 3pm, 5pm"
    },
    {
        name: "Face Painting & Crafts Station",
        category: "entertainment",
        description: "Fun face painting and kids' craft activities",
        image: "/images/popcorn-stall.jpg",
        contact: "(607) 555-0107",
        hours: "10am - 5pm Fri-Sun"
    },
    {
        name: "Apple Farm Tours",
        category: "entertainment",
        description: "Guided tours of local apple orchards and farming practices",
        image: "/images/sign-vendor.jpg",
        contact: "(607) 555-0108",
        hours: "Tours at 12pm & 3pm"
    }
];

const sampleFestival = {
    name: "The 42nd Annual Apple Harvest Festival",
    year: 2024,
    location: {
        address: "Ithaca Commons",
        city: "Ithaca",
        state: "New York"
    },
    dates: [
        { day: "Friday, September 27", startTime: "12pm", endTime: "6pm" },
        { day: "Saturday, September 28", startTime: "10am", endTime: "6pm" },
        { day: "Sunday, September 29", startTime: "10am", endTime: "6pm" }
    ],
    description: "The Apple Harvest Festival, held annually in downtown Ithaca, is a beloved community event celebrating the bounty of the fall season.",
    about: "Join us for three days of farm-fresh bites, local crafts, live music, and fall activities for all ages.",
    history: "Since 1982, the Apple Harvest Festival has been one of Ithaca's most celebrated events, featuring over 100 vendors and artisans."
};

async function seedDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✓ MongoDB connected');

        // Clear existing data
        await Vendor.deleteMany({});
        await Festival.deleteMany({});
        console.log('✓ Cleared existing data');

        // Insert vendors
        const createdVendors = await Vendor.insertMany(sampleVendors);
        console.log(`✓ Added ${createdVendors.length} vendors`);

        // Insert festival info
        const createdFestival = await Festival.create(sampleFestival);
        console.log('✓ Added festival information');

        console.log('\n✅ Database seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding database:', error.message);
        process.exit(1);
    }
}

seedDatabase();
