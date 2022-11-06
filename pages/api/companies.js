import companiesMockData from '../../data/companies-mock.json';

export default function handler(req, res) {
  try {
    res.status(200).json(companiesMockData);
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' });
  }
}
