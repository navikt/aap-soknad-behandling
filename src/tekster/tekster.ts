const texts = {
  paragraf: {
    PARAGRAF_11_1: "§ 11-1",
    PARAGRAF_11_2: "§ 11-2",
    PARAGRAF_11_3: "§ 11-3",
    PARAGRAF_11_4: "§ 11-4",
    PARAGRAF_11_5: "§ 11-5",
    PARAGRAF_11_6: "§ 11-6",
    PARAGRAF_11_8: "§ 11-8",
    PARAGRAF_11_9: "§ 11-9",
    PARAGRAF_11_10: "§ 11-10",
    PARAGRAF_11_11: "§ 11-11",
    PARAGRAF_11_12: "§ 11-12",
    PARAGRAF_11_13: "§ 11-13",
    PARAGRAF_11_14: "§ 11-14",
    PARAGRAF_11_15: "§ 11-15",
    PARAGRAF_11_16: "§ 11-16",
    PARAGRAF_11_17: "§ 11-17",
    PARAGRAF_11_18: "§ 11-18",
    PARAGRAF_11_19: "§ 11-19",
    PARAGRAF_11_20: "§ 11-20",
    PARAGRAF_11_21: "§ 11-21",
    PARAGRAF_11_22: "§ 11-22",
    PARAGRAF_11_23: "§ 11-23",
    PARAGRAF_11_24: "§ 11-24",
    PARAGRAF_11_25: "§ 11-25",
    PARAGRAF_11_26: "§ 11-26",
    PARAGRAF_11_27: "§ 11-27",
    PARAGRAF_11_28: "§ 11-28",
    PARAGRAF_11_29: "§ 11-29",
    PARAGRAF_11_30: "§ 11-30",
    PARAGRAF_11_31: "§ 11-31",
  },
  ledd: {
    LEDD_1: "ledd 1",
    LEDD_2: "ledd 2",
    LEDD_3: "ledd 3",
    LEDD_4: "ledd 4",
    LEDD_5: "ledd 5",
    LEDD_6: "ledd 6",
    LEDD_7: "ledd 7",
  },
};

export const getText = (key: string): string => {
  const res = key.split(".").reduce((acc: any, cur: string) => {
    return acc?.[cur];
  }, texts);
  return res || key;
};
