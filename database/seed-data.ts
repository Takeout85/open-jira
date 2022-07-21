interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  createdAt: number;
  status: string;
}

export const seedData: SeedData = {
  entries: [
    {
      description: 'PENDIENTE dfjgvbh disjhfiods hfgoidshjoiueshjfoi ',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description: 'IN-PROGRESS 100000 disjhfiods hfgoidshjoiueshjfoi ',
      status: 'in-progress',
      createdAt: Date.now() - 100000,
    },
    {
      description: 'FINISHED 1000 disjhfiods hfgoidshjoiueshjfoi ',
      status: 'finished',
      createdAt: Date.now() - 10000000000,
    },
  ],
};
