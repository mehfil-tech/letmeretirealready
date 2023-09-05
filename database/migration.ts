import Version, { IVersion } from './schemas/version'; 

// this is for initial data entries or additional direct db entries
const migrate = async () => {
    const version = await Version.findOne();
    if (!version) {
        await Version.createCollection();
        console.log('Created "Version" collection.');
      } else {
        console.log('"Version" collection already exists. Skipping creation.');
      }
};

export default migrate;