// @ts-ignore
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
// @ts-ignore
const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

export {pipe, compose};
