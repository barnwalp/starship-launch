const path = require('path');
const fs = require('fs/promises');

async function readPassword() {
	const curPath = path.join(__dirname, '..', '..', '..', 'personal_token.json');
	try {
		const data = await fs.readFile(curPath, 'utf-8');
		const password = JSON.parse(data);
		return password.mongodb;
	} catch (err) {
		return err;
	}
}

module.exports = {
	readPassword,
};
