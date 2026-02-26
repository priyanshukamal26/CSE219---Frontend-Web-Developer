function getData() {
            return new Promise(resolve => {
                setTimeout(()=>resolve("data received"), 10000);
            })
        }

        async function showData() {
            const result = await getData()
            console.log(result)
        }

        showData()