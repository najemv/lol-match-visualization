
type RegionDto = {
  name: string;
  routing1: string;
  routing2: string;
};


export const REGIONS: RegionDto[] = [
  {
    name: "EUNE",
    routing1: "eun1",
    routing2: "europe"
  },
  {
    name: "EUW",
    routing1: "euw1",
    routing2: "europe"
  },
  {
    name: "NA",
    routing1: "na1",
    routing2: "americas"
  },
  {
    name: "LAN",
    routing1: "la1",
    routing2: "americas"
  },
  {
    name: "LAS",
    routing1: "la2",
    routing2: "americas"
  },
  {
    name: "BR",
    routing1: "br1",
    routing2: "americas"
  },
  {
    name: "OCE",
    routing1: "oc1",
    routing2: "sea"
  },
  {
    name: "RU",
    routing1: "ru1",
    routing2: "europe"
  },
  {
    name: "TR",
    routing1: "tr1",
    routing2: "europe"
  },
  {
    name: "JP",
    routing1: "jp1",
    routing2: "asia"
  },
  {
    name: "KR",
    routing1: "kr",
    routing2: "asia"
  }
]

export const GetRegion = (name: string) => {
  return REGIONS.find(r => r.name === name);
};