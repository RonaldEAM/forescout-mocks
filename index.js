const { faker } = require("@faker-js/faker");
const express = require("express");
const policies = require("./responses/policies");
const segments = require("./responses/segments");
const vulns = require("./responses/vulns");
const segmentNames = require("./responses/segmentNames");
const { sampleSize } = require("lodash");
const app = express();

const port = process.argv[2] || 80;

BigInt.prototype["toJSON"] = function () {
  return this.toString();
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const hosts = new Map();
for (let i = 1; i <= 600; i++) {
  const ip = faker.internet.ipv4();
  const mac = faker.string.hexadecimal({
    length: 12,
    casing: "lower",
    prefix: "",
  });
  hosts.set(i, {
    hostId: i,
    ip: ip,
    mac: mac,
    links: [{ rel: "self", href: `https://127.0.0.1/api/hosts/${i}` }],
  });
}

const hostsArray = Array.from(hosts.values());

app.post("/api/login", (req, res) => {
  const { username, password } = req.query;
  if (!username || !password) {
    res.status(400).json({ error: "Missing username or password" });
    return;
  }
  res.send("test-token");
});

app.get("/api/hosts", (req, res) => {
  const { matchRuleId } = req.query;
  if (matchRuleId) {
    res.json({
      hosts: sampleSize(hostsArray, 5),
      links: [],
    });
    return;
  }
  res.json({
    hosts: hostsArray,
    links: [],
  });
});

app.get("/api/hosts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (hosts.has(id)) {
    const host = hosts.get(id);
    res.json({
      host: {
        id: host.hostId,
        ip: host.ip,
        mac: host.mac,
        fields: {
          // host fields
          prim_classification: {
            timestamp: 1723755663,
            value: faker.helpers.arrayElement([
              "Information Technology/Computer/Workstation",
              "Information Technology/Computer/ICS Supervisory/Distributed Control System",
              "Operational Technology/Facilities/Physical Security/Surveillance/IP Camera",
            ]),
          },
          os_classification: {
            timestamp: 1723755663,
            value: faker.helpers.arrayElement([
              "Windows/Windows 10/Windows 10 Professional",
              "Unknown",
              "Apple/Apple Desktop OS/Apple macOS",
              "Embedded Firmware/Axis Firmware",
            ]),
          },
          model_classification: {
            timestamp: 1723755663,
            value: faker.helpers.arrayElement(["Centum", "Network Camera"]),
          },
          manufacturer_classification: {
            timestamp: 1723755663,
            value: faker.helpers.arrayElement([
              "Dell",
              "Yokogawa",
              "Apple",
              "Axis",
            ]),
          },

          // user fields
          user: {
            timestamp: 1723755663,
            value: faker.internet.userName(),
          },
          ad_displayname: {
            timestamp: 1723755663,
            value: faker.person.fullName(),
          },
          ad_mail: {
            timestamp: 1723755663,
            value: faker.internet.email(),
          },
          ad_department: {
            timestamp: 1723755663,
            value: faker.person.jobArea(),
          },
          gst_signed_in_stat: {
            timestamp: 1723755663,
            value: "na",
          },

          // vulnerability fields
          otsm_details_cves: vulns,

          // segment fields
          segment_name_calculated: {
            timestamp: 1723755663,
            value: faker.helpers.arrayElement(segmentNames),
          },
        },
      },
      links: [
        { rel: "self", href: `https://127.0.0.1/api/hosts/${host.hostId}` },
      ],
    });
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

app.post("/fsum/oauth2.0/token", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ error: "Missing username or password" });
    return;
  }
  res.json({
    access_token: "test-token",
    token_type: "bearer",
    expires_in: 3600,
  });
});

app.get("/adminapi/segments", (req, res) => {
  res.json(segments);
});

app.get("/api/policies", (req, res) => {
  res.json(policies);
});

app.listen(port, () => {
  console.log(`Mock app listening at http://localhost:${port}`);
});
