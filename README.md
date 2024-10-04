### About

This project is a mock server for the forescout-eyesight integration. It creates
endpoints that mimic the responses from the actual API.

Available endpoints:

- `/api/login?username=xxx&password=xxx`
- `/fsum/oauth2.0/token`
- `/api/hosts`
- `/api/hosts/{id}`
- `/api/policies`
- `api/hosts?matchRuleId={ruleId}`
- `/adminapi/segments`

### Installation

You need to execute `npm install` in this directory.

### How to execute

```bash
npm run start
```

That will start the mock server on port 8080.

Then in .env file set `HOSTNAME=http://127.0.0.1:8080`
