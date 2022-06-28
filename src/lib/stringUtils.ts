const isTrue = (val: string | null | undefined): boolean => !!val?.match(/^true$/i) ?? false;

export { isTrue };
