const { StatusCodes } = require("http-status-codes");

const Drop = require("../models/drop");
const User = require("./../models/user");
const Public = require("./../models/public");

const increaseEncryptCount = async (req, res) => {
	try {
		const updatedPublic = await Public.findOneAndUpdate(
			{},
			{ $inc: { count: 1 } },
			{ new: true }
		);

		// If no document is found, create a new one with count set to 1
		if (!updatedPublic) {
			const newPublic = new Public({ count: 1 });
			await newPublic.save();
		}

        res.status(StatusCodes.OK).send('Count Updated Successfully');
	} catch (err) {
		console.log("Error increasing encrypt count", err);
        process.exit(1);
	}
};

const getWebsiteStat = async (req, res) => {
	try {
		const responseObject = {
			isVerified: false,
			msg: "default-obj-msg",
		};

		const userCount = await User.countDocuments();
		const dropCount = await Drop.countDocuments();
		const encryptCount = await Encrypt.findOne();
		const openedDrop = await Drop.countDocuments({
			openedOn: { $ne: null },
		});

		responseObject.userCount = userCount;
		responseObject.dropCount = dropCount;
		responseObject.encryptCount = encryptCount;
		responseObject.openedDrop = openedDrop;

		res.status(StatusCodes.OK).send(responseObject);
	} catch (err) {
		console.log("Error Getting Website Stat", err);
		process.exit(1);
	}
};

module.exports = { getWebsiteStat, increaseEncryptCount };
