const clubs = [
  {
    id: 1,
    denominazione: "Club 1",
    slug: "club_1",
    citta: "test",
    telefono: "046300000",
    email: "test@test.test"
  }
];

const errorClub = {
  id: null,
  denominazione: "ERROR",
  slug: null,
  citta: "ERROR",
  telefono: "ERROR",
  email: "ERROR"
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  errorClub,
  clubs
};
