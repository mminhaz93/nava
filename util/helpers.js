import abbreviate from 'number-abbreviate';

const currency = (amount) => `$${abbreviate(amount, 2)}`;

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export { fetcher, currency };
