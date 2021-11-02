import fetch from "node-fetch"
const num1 = 10
const num2 = 20
const num3 = 30
log(num1)
log(num2)
log(num3)

function log(num) {

	const payload = {
		"num": num
	}

  fetch("http://localhost:8080",
		{
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify(payload)
		}
	)
	.then(a => a.json())
	.then(console.log)
	.catch(console.error)
}
