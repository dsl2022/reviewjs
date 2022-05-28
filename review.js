const subscribers = [
  {
    firstName: "David",
    status: "active",
    score: 450,
  },
  {
    firstName: "Dany",
    status: "not-active",
    score: 46,
  },
  {
    firstName: "Dorian",
    status: "active",
    score: 150,
  },
  {
    firstName: "Dallas",
    status: "pending",
    score: NaN,
  },
  {
    firstName: "Leo",
    status: "pending",
    score: 250,
  },
  {
    firstName: "Mary",
    status: "active",
    score: 550,
  },
];

const listContainer = document.querySelector("#subscriber-list");
const levelListContainer = document.querySelector("#subscriber-level-list");
for (let i = 0; i < subscribers.length; i++) {
  let child = document.createElement("li");
  const newContent = document.createTextNode(
    `first name: ${subscribers[i].firstName}`
  );
  listContainer.appendChild(child.appendChild(newContent));
}
console.log("test list container", listContainer);

const subscribersWithLevel = userLevelDetermined(subscribers);

for (let i = 0; i < subscribersWithLevel.length; i++) {
  let child = document.createElement("li");
  const newContent = document.createTextNode(
    `first name: ${subscribersWithLevel[i].firstName},level:${subscribersWithLevel[i].level} `
  );
  levelListContainer.appendChild(child.appendChild(newContent));
}
// below 100, is a average user
// above 300, is a silver level user
// above 450, is a gold level user
// above 500, is a platinum
// user has to be active.
function userLevelDetermined(data) {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    const firstName = data[i].firstName;
    const score = data[i].score;
    const status = data[i].status;
    if (status === "active") {
      if (score >= 500) {
        result.push({ firstName: firstName, level: "platinum" });
      } else if (score >= 450 && score < 500) {
        result.push({ firstName: firstName, level: "gold" });
      } else if (score >= 300 && score < 450) {
        result.push({ firstName: firstName, level: "sliver" });
      } else if (score > 100 && score < 300) {
        result.push({ firstName: firstName, level: "ok" });
      } else if (score <= 100) {
        result.push({ firstName: firstName, level: "average" });
      }
    } else {
      continue;
    }
  }
  return result;
}

// console.log(userLevelDetermined(subscribers));

//
