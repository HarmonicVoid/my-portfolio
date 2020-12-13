
import Airtable from 'airtable'

const base = new Airtable({apiKey: process.env.API_KEY ,}).base(process.env.BASE_ID);

const table = base(process.env.TABLE_NAME);

export default async function getPosts() {
  const records = await table.select({}).all();

  console.log(records);

  return records;
}
