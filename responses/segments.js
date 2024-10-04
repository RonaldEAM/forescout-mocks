module.exports = {
  traceId: 'fcd53d57-2f05-4d63-8c08-c8a46446afd8',
  node: {
    name: '*root',
    nodes: [
      {
        name: 'Nakatomi - In Scope',
        ranges: ['10.0.0.1-10.0.255.255'],
        nodes: [
          {
            name: 'Nakatomi Trading Corp.',
            nodes: [
              {
                name: 'Campus Sites',
                nodes: [
                  {
                    name: 'APAC',
                    nodes: [
                      {
                        name: 'Singapore',
                        nodes: [
                          {
                            name: '61-Mgmt',
                            ranges: ['10.0.61.0-10.0.61.255'], // cidr, public,
                          },
                          {
                            name: '62-Production',
                            ranges: ['10.0.62.0-10.0.62.255'],
                          },
                          {
                            name: '63-Guest',
                            ranges: ['10.0.63.0-10.0.63.255'],
                          },
                          {
                            name: '64-Facilities',
                            ranges: ['10.0.64.0-10.0.64.255'],
                          },
                          {
                            name: '65-IoT',
                            ranges: ['10.0.65.0-10.0.65.255'],
                          },
                          {
                            name: '66-DC',
                            ranges: ['10.0.66.0-10.0.66.255'],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'Europe',
                    nodes: [
                      {
                        name: 'London',
                        nodes: [
                          {
                            name: '31-Mgmt',
                            ranges: ['10.0.31.0-10.0.31.255'],
                          },
                          {
                            name: '32-Production',
                            ranges: ['10.0.32.0-10.0.32.255'],
                          },
                          {
                            name: '33-Guest',
                            ranges: ['10.0.33.0-10.0.33.255'],
                          },
                          {
                            name: '34-Facilities',
                            ranges: ['10.0.34.0-10.0.34.255'],
                          },
                          {
                            name: '35-IoT',
                            ranges: ['10.0.35.0-10.0.35.255'],
                          },
                          {
                            name: '36-DC',
                            ranges: ['10.0.36.0-10.0.36.255'],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'United States',
                    nodes: [
                      {
                        name: 'HQ San Francisco',
                        nodes: [
                          {
                            name: '1-Mgmt',
                            ranges: ['10.0.11.0-10.0.11.255'],
                          },
                          {
                            name: '2-Production',
                            ranges: ['10.0.12.0-10.0.12.255'],
                          },
                          {
                            name: '3-Guest',
                            ranges: ['10.0.13.0-10.0.13.255'],
                          },
                          {
                            name: '4-Facilities',
                            ranges: ['10.0.14.0-10.0.14.255'],
                          },
                          {
                            name: '5-IoT',
                            ranges: ['10.0.15.0-10.0.15.255'],
                          },
                          { name: '6-DC', ranges: ['10.0.16.0-10.0.16.255'] },
                          {
                            name: 'Lab-Kit',
                            ranges: [
                              '10.0.1.1-10.0.1.214',
                              '10.0.2.2-10.0.2.253',
                              '10.0.3.2-10.0.3.253',
                              '10.0.4.2-10.0.4.253',
                              '10.0.5.2-10.0.5.253',
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: 'Data Center & Other Areas',
                nodes: [
                  {
                    name: 'AWS',
                    nodes: [
                      {
                        name: 'AWS - Ohio',
                        ranges: ['172.16.101.1-172.16.101.254'],
                      },
                      {
                        name: 'AWS - Oregon',
                        ranges: ['172.16.100.1-172.16.100.254'],
                        description: 'SE Demo Instance in Oregon',
                      },
                    ],
                  },
                  {
                    name: 'Azure',
                    ranges: [
                      '172.27.12.0-172.27.15.255',
                      '172.27.20.0-172.27.23.255',
                    ],
                  },
                ],
              },
              {
                name: 'Medical Devices',
                ranges: ['192.168.155.0-192.168.155.255'],
                nodes: [{ name: 'Main Hospital Site' }],
              },
              {
                name: 'Operational Technology',
                ranges: [
                  '10.0.100.1-10.0.100.255',
                  '10.0.101.1-10.255.255.255',
                  '74.209.0.0-74.209.255.255',
                  '137.48.0.0-137.48.255.255',
                  '172.16.0.0-172.16.99.255',
                  '172.16.102.0-172.17.255.255',
                  '172.19.1.1-172.26.11.255',
                  '172.27.16.0-172.27.17.255',
                  '172.30.0.0-172.31.255.255',
                  '192.168.0.0-192.168.154.255',
                  '192.168.156.0-192.168.255.255',
                ],
              },
              { name: 'Remote Offices', ranges: ['10.0.91.0-10.0.91.255'] },
              { name: 'VPN', ranges: ['10.0.95.0-10.0.95.255'] },
            ],
          },
          { name: 'pcap' },
        ],
      },
      { name: 'Out Of Scope' },
    ],
  },
  lastModified: 1723577630044,
};
